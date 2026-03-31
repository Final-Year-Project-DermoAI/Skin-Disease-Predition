import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:animate_do/animate_do.dart';
import 'dart:ui';

class PatientsListPage extends StatefulWidget {
  const PatientsListPage({super.key});

  @override
  State<PatientsListPage> createState() => _PatientsListPageState();
}

class _PatientsListPageState extends State<PatientsListPage> {
  final TextEditingController _searchController = TextEditingController();

  final List<Map<String, dynamic>> _patients = [
    {"name": "Amit Patel", "age": 42, "lastVisit": "Yesterday", "condition": "Acne Vulgaris", "status": "Stable"},
    {"name": "Priya Singh", "age": 28, "lastVisit": "3 days ago", "condition": "Psoriasis", "status": "Follow-up"},
    {"name": "Suresh Raina", "age": 35, "lastVisit": "1 week ago", "condition": "Eczema", "status": "Critical"},
    {"name": "Meera Iyer", "age": 31, "lastVisit": "2 weeks ago", "condition": "Rosacea", "status": "Recovered"},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0A0E21),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Color(0xFF0A0E21), Color(0xFF131736)],
          ),
        ),
        child: SafeArea(
          child: Column(
            children: [
              _buildAppBar(),
              _buildSearchBar(),
              Expanded(
                child: ListView.builder(
                  physics: const BouncingScrollPhysics(),
                  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 8),
                  itemCount: _patients.length,
                  itemBuilder: (context, index) {
                    return FadeInUp(
                      delay: Duration(milliseconds: 100 * index),
                      child: _buildPatientCard(_patients[index]),
                    );
                  },
                ),
              ),
              const SizedBox(height: 80), // Space for bottom nav
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildAppBar() {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Text(
            'Patient Registry',
            style: TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.bold),
          ),
          _buildGlassIconButton(FontAwesomeIcons.userPlus, const Color(0xFF00D2FF)),
        ],
      ),
    );
  }

  Widget _buildSearchBar() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        decoration: BoxDecoration(
          color: Colors.white.withOpacity(0.05),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: Colors.white.withOpacity(0.1)),
        ),
        child: TextField(
          controller: _searchController,
          style: const TextStyle(color: Colors.white),
          decoration: InputDecoration(
            hintText: 'Search patient by name...',
            hintStyle: TextStyle(color: Colors.white.withOpacity(0.3)),
            border: InputBorder.none,
            icon: Icon(FontAwesomeIcons.magnifyingGlass, color: Colors.white.withOpacity(0.5), size: 16),
          ),
        ),
      ),
    );
  }

  Widget _buildPatientCard(Map<String, dynamic> patient) {
    Color statusColor = const Color(0xFF00E676);
    if (patient['status'] == 'Critical') statusColor = const Color(0xFFFF6B6B);
    if (patient['status'] == 'Follow-up') statusColor = const Color(0xFFFFB347);

    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.03),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white.withOpacity(0.08)),
      ),
      child: Column(
        children: [
          Row(
            children: [
              Container(
                width: 54,
                height: 54,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [Color(0xFF6C63FF), Color(0xFF00D2FF)]),
                  borderRadius: BorderRadius.circular(18),
                ),
                child: const Center(child: Icon(FontAwesomeIcons.user, color: Colors.white, size: 24)),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(patient['name'], style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
                    Text('${patient['age']} Years • ${patient['condition']}', style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 12)),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                decoration: BoxDecoration(
                  color: statusColor.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Text(
                  patient['status'],
                  style: TextStyle(color: statusColor, fontSize: 11, fontWeight: FontWeight.bold),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          const Divider(color: Colors.white10),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              _buildInfoChip(FontAwesomeIcons.calendar, patient['lastVisit']),
              Row(
                children: [
                  _buildActionChip(FontAwesomeIcons.commentMedical, const Color(0xFF6C63FF)),
                  const SizedBox(width: 8),
                  _buildActionChip(FontAwesomeIcons.eye, const Color(0xFF00E676)),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildInfoChip(IconData icon, String text) {
    return Row(
      children: [
        Icon(icon, color: Colors.white.withOpacity(0.3), size: 12),
        const SizedBox(width: 6),
        Text(text, style: TextStyle(color: Colors.white.withOpacity(0.3), fontSize: 12)),
      ],
    );
  }

  Widget _buildActionChip(IconData icon, Color color) {
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Icon(icon, color: color, size: 14),
    );
  }

  Widget _buildGlassIconButton(IconData icon, Color color) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.05),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: Colors.white.withOpacity(0.1)),
      ),
      child: Icon(icon, color: color, size: 18),
    );
  }
}
