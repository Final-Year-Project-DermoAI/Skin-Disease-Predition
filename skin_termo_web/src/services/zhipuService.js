import api from './api';

export const analyzeSkinImage = async (base64Image) => {
  try {
    const response = await api.post('/analysis/scan', { image_base64: base64Image });
    return response.data;
  } catch (error) {
    console.error('Analysis Error:', error.response?.data || error.message);
    throw error;
  }
};

export const chatWithAI = async (messages) => {
  try {
    const response = await api.post('/chat/message', { messages: messages });
    return response.data.content;
  } catch (error) {
    console.error('Chat AI Error:', error.response?.data || error.message);
    throw error;
  }
};

export const getAnalysisHistory = async () => {
  try {
    const response = await api.get('/analysis/history');
    return response.data;
  } catch (error) {
    console.error('Fetch History Error:', error.response?.data || error.message);
    throw error;
  }
};
