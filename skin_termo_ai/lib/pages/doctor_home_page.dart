import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:animate_do/animate_do.dart';
import 'dart:ui';
import '../session_manager.dart';

class DoctorHomePage extends StatefulWidget {
  const DoctorHomePage({super.key});

  @override
  State<DoctorHomePage> createState() => _DoctorHomePageState();
}

class _DoctorHomePageState extends State<DoctorHomePage> {
  String _doctorName = "Doctor";

  @override
  void initState() {
    super.initState();
    _loadName();
  }

  Future<void> _loadName() async {
    final name = await SessionManager.getUserName();
    if (name != null) setState(() => _doctorName = name);
  }

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
          child: SingleChildScrollView(
            physics: const BouncingScrollPhysics(),
            padding: const EdgeInsets.all(24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _buildHeader(),
                const SizedBox(height: 32),
                _buildStatsGrid(),
                const SizedBox(height: 32),
                _buildSectionHeader("Recent Consultations", FontAwesomeIcons.clockRotateLeft),
                const SizedBox(height: 16),
                _buildActivityList(),
                const SizedBox(height: 100), // Space for bottom nav
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return FadeInDown(
      duration: const Duration(milliseconds: 600),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Welcome back,',
                    style: TextStyle(color: Colors.white.withOpacity(0.6), fontSize: 16),
                  ),
                  Text(
                    'Dr. $_doctorName',
                    style: const TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              _buildGlassIconButton(FontAwesomeIcons.solidBell, Colors.amber),
            ],
          ),
          const SizedBox(height: 24),
          _buildQuickActionsCard(),
        ],
      ),
    );
  }

  Widget _buildQuickActionsCard() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [const Color(0xFF6C63FF).withOpacity(0.8), const Color(0xFF3F3D56).withOpacity(0.8)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(24),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF6C63FF).withOpacity(0.3),
            blurRadius: 20,
            offset: const Offset(0, 10),
          )
        ],
      ),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Manage Your Appointments',
                  style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 8),
                Text(
                  'Review new medical reports and patient history seamlessly.',
                  style: TextStyle(color: Colors.white.withOpacity(0.8), fontSize: 13),
                ),
                const SizedBox(height: 16),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.white,
                    foregroundColor: const Color(0xFF6C63FF),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: const Text('View Patients', style: TextStyle(fontWeight: FontWeight.bold)),
                ),
              ],
            ),
          ),
          const SizedBox(width: 16),
          _buildIconCircle(FontAwesomeIcons.calendarCheck, Colors.white, Colors.white24),
        ],
      ),
    );
  }

  Widget _buildStatsGrid() {
    return FadeInUp(
      duration: const Duration(milliseconds: 800),
      child: GridView.count(
        crossAxisCount: 2,
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        crossAxisSpacing: 16,
        mainAxisSpacing: 16,
        childAspectRatio: 1.5,
        children: [
          _buildStatCard('Active Patients', '24', FontAwesomeIcons.userGroup, const Color(0xFF00E676)),
          _buildStatStat('Pending Reviews', '08', FontAwesomeIcons.fileLines, const Color(0xFFFFB347)),
          _buildStatCard('Consultations', '142', FontAwesomeIcons.stethoscope, const Color(0xFF00D2FF)),
          _buildStatStat('Consulting Hours', '32h', FontAwesomeIcons.clock, const Color(0xFFFF6B6B)),
        ],
      ),
    );
  }

  Widget _buildStatCard(String title, String value, IconData icon, Color color) {
    return _buildGlassCard(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, color: color, size: 24),
          const SizedBox(height: 8),
          Text(value, style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold)),
          Text(title, style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 11)),
        ],
      ),
    );
  }

  Widget _buildStatStat(String title, String value, IconData icon, Color color) {
    return _buildGlassCard(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, color: color, size: 24),
          const SizedBox(height: 8),
          Text(value, style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold)),
          Text(title, style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 11)),
        ],
      ),
    );
  }

  Widget _buildActivityList() {
    return ListView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: 4,
      itemBuilder: (context, index) {
        return FadeInLeft(
          delay: Duration(milliseconds: 100 * index),
          child: _buildActivityItem(
            name: "Rahul Sharma",
            condition: "Contact Dermatitis",
            time: "2h ago",
            icon: FontAwesomeIcons.user,
            color: const Color(0xFF00D2FF),
          ),
        );
      },
    );
  }

  Widget _buildActivityItem({required String name, required String condition, required String time, required IconData icon, required Color color}) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.03),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: Colors.white.withOpacity(0.05)),
      ),
      child: Row(
        children: [
          _buildIconCircle(icon, color, color.withOpacity(0.1)),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                Text(condition, style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 12)),
              ],
            ),
          ),
          Text(time, style: TextStyle(color: Colors.white.withOpacity(0.3), fontSize: 11)),
        ],
      ),
    );
  }

  Widget _buildSectionHeader(String title, IconData icon) {
    return Row(
      children: [
        Icon(icon, color: const Color(0xFF6C63FF), size: 18),
        const SizedBox(width: 10),
        Text(title, style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
      ],
    );
  }

  Widget _buildGlassCard({required Widget child}) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(22),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
        child: Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.04),
            borderRadius: BorderRadius.circular(22),
            border: Border.all(color: Colors.white.withOpacity(0.08)),
          ),
          child: child,
        ),
      ),
    );
  }

  Widget _buildIconCircle(IconData icon, Color color, Color bg) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: bg, shape: BoxShape.circle),
      child: Icon(icon, color: color, size: 18),
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
