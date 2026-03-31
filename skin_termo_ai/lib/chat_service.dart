import 'dart:convert';
import 'package:http/http.dart' as http;
import 'api_config.dart';
import 'session_manager.dart';

class ChatMessage {
  final String role;
  final String content;
  final String timestamp;

  ChatMessage({required this.role, required this.content, required this.timestamp});

  Map<String, String> toJson() => {
    'role': role, 
    'content': content,
    'timestamp': timestamp
  };
}

class ChatService {
  static Future<String> sendMessage(List<ChatMessage> conversationHistory) async {
    try {
      final mode = await ApiConfig.getInferenceMode();
      
      if (mode == InferenceMode.ollama) {
        final host = await ApiConfig.getEffectiveHost();
        final model = await ApiConfig.getModel();
        final response = await http.post(
          Uri.parse('$host/api/chat'),
          headers: {'Content-Type': 'application/json'},
          body: jsonEncode({
            'model': model,
            'messages': [
              {
                'role': 'system',
                'content': "You are 'SkinTermo AI', a specialized Healthcare Assistant. "
                           "Provide detailed, clinical advice on skin conditions. "
                           "Always include a medical disclaimer."
              },
              ...conversationHistory.map((m) => {
                'role': m.role,
                'content': m.content,
              }).toList(),
            ],
            'stream': false,
          }),
        ).timeout(const Duration(seconds: 30));

        if (response.statusCode == 200) {
          final data = jsonDecode(response.body);
          return data['message']['content'] ?? 'No response from Ollama.';
        } else {
          return 'Ollama server error: ${response.statusCode}';
        }
      } else {
        // ZhipuAI / GLM Mode (via Backend)
        final baseUrl = await ApiConfig.getEffectiveBackendHost();
        final response = await http.post(
          Uri.parse('$baseUrl/chat/message'),
          headers: {'Content-Type': 'application/json'},
          body: jsonEncode({
            'messages': conversationHistory.map((m) => m.toJson()).toList(),
          }),
        ).timeout(const Duration(seconds: 30));

        if (response.statusCode == 200) {
          final data = jsonDecode(response.body);
          return data['content'] ?? 'No response from AI.';
        } else {
          return 'Backend error: ${response.statusCode}';
        }
      }
    } catch (e) {
      return 'Connection failed. Please check your network/server settings.';
    }
  }

  static Future<int?> createSession(String title) async {
    try {
      final baseUrl = await ApiConfig.getEffectiveBackendHost();
      final token = await SessionManager.getToken();
      final response = await http.post(
        Uri.parse('$baseUrl/chat/sessions'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: jsonEncode({'title': title}),
      );
      if (response.statusCode == 200) {
        return jsonDecode(response.body)['id'];
      }
    } catch (_) {}
    return null;
  }

  static Future<void> saveMessage(int sessionId, ChatMessage message) async {
    try {
      final baseUrl = await ApiConfig.getEffectiveBackendHost();
      final token = await SessionManager.getToken();
      await http.post(
        Uri.parse('$baseUrl/chat/sessions/$sessionId/messages'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: jsonEncode(message.toJson()),
      );
    } catch (_) {}
  }
}
