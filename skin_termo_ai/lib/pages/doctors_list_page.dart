import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:animate_do/animate_do.dart';
import 'dart:ui';
import 'dart:convert';
import 'package:google_fonts/google_fonts.dart';
import '../models/doctor_model.dart';
import '../services/doctor_service.dart';

class DoctorsListPage extends StatefulWidget {
  const DoctorsListPage({super.key});

  @override
  State<DoctorsListPage> createState() => _DoctorsListPageState();
}

class _DoctorsListPageState extends State<DoctorsListPage> {
  List<Doctor> _allDoctors = [];
  List<Doctor> _filteredDoctors = [];
  bool _isLoading = true;
  String _searchQuery = "";
  final TextEditingController _searchController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _fetchDoctors();
  }

  Future<void> _fetchDoctors() async {
    setState(() => _isLoading = true);
    final doctors = await DoctorService.getDoctors();
    if (mounted) {
      setState(() {
        _allDoctors = doctors;
        _filteredDoctors = doctors;
        _isLoading = false;
      });
    }
  }

  void _filterDoctors(String query) {
    setState(() {
      _searchQuery = query;
      _filteredDoctors = _allDoctors.where((doc) {
        final name = doc.name.toLowerCase();
        final spec = doc.profile?.specialization?.toLowerCase() ?? "";
        return name.contains(query.toLowerCase()) || spec.contains(query.toLowerCase());
      }).toList();
    });
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0A0E21),
      drawerEnableOpenDragGesture: false,
      body: Stack(
        children: [
          _buildBackground(),
          SafeArea(
            child: Column(
              children: [
                _buildHeader(),
                _buildSearchBar(),
                Expanded(
                  child: _isLoading 
                    ? _buildLoadingState()
                    : _filteredDoctors.isEmpty 
                      ? _buildEmptyState()
                      : _buildDoctorList(),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBackground() {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF0A0E21), Color(0xFF131736), Color(0xFF0A0E21)],
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return FadeInDown(
      duration: const Duration(milliseconds: 600),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
        child: Row(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Expert Specialists',
                  style: GoogleFonts.outfit(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  'Find and consult verified doctors',
                  style: GoogleFonts.outfit(
                    fontSize: 14,
                    color: Colors.white.withOpacity(0.5),
                  ),
                ),
              ],
            ),
            const Spacer(),
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: const Color(0xFF6C63FF).withOpacity(0.1),
                shape: BoxShape.circle,
                border: Border.all(color: const Color(0xFF6C63FF).withOpacity(0.2)),
              ),
              child: const Icon(FontAwesomeIcons.userMd, color: Color(0xFF6C63FF), size: 20),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSearchBar() {
    return FadeInUp(
      duration: const Duration(milliseconds: 600),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 10),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(20),
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
            child: Container(
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.05),
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: Colors.white.withOpacity(0.08)),
              ),
              child: TextField(
                controller: _searchController,
                onChanged: _filterDoctors,
                style: const TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  hintText: 'Search by name or specialization...',
                  hintStyle: TextStyle(color: Colors.white.withOpacity(0.3), fontSize: 14),
                  prefixIcon: Icon(Icons.search, color: Colors.white.withOpacity(0.4)),
                  suffixIcon: _searchQuery.isNotEmpty 
                    ? IconButton(
                        icon: const Icon(Icons.clear, color: Colors.white54, size: 18),
                        onPressed: () {
                          _searchController.clear();
                          _filterDoctors("");
                        },
                      )
                    : null,
                  border: InputBorder.none,
                  contentPadding: const EdgeInsets.symmetric(vertical: 15),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildLoadingState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const CircularProgressIndicator(color: Color(0xFF6C63FF)),
          const SizedBox(height: 16),
          Text(
            'Retrieving specialists...',
            style: GoogleFonts.outfit(color: Colors.white.withOpacity(0.5)),
          ),
        ],
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(FontAwesomeIcons.userSlash, size: 60, color: Colors.white.withOpacity(0.1)),
          const SizedBox(height: 20),
          Text(
            'No specialists found',
            style: GoogleFonts.outfit(fontSize: 18, color: Colors.white.withOpacity(0.8), fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 8),
          Text(
            'Try adjusting your search query',
            style: GoogleFonts.outfit(color: Colors.white.withOpacity(0.4)),
          ),
          const SizedBox(height: 24),
          TextButton.icon(
            onPressed: _fetchDoctors,
            icon: const Icon(Icons.refresh, size: 18),
            label: const Text('Refresh'),
            style: TextButton.styleFrom(foregroundColor: const Color(0xFF6C63FF)),
          ),
        ],
      ),
    );
  }

  Widget _buildDoctorList() {
    return ListView.builder(
      padding: const EdgeInsets.fromLTRB(24, 10, 24, 100), // Extra bottom padding for floating nav
      itemCount: _filteredDoctors.length,
      physics: const BouncingScrollPhysics(),
      itemBuilder: (context, index) {
        final doctor = _filteredDoctors[index];
        return FadeInUp(
          delay: Duration(milliseconds: 100 * index),
          child: _buildDoctorCard(doctor),
        );
      },
    );
  }

  Widget _buildDoctorCard(Doctor doctor) {
    final profile = doctor.profile;
    final specialization = profile?.specialization ?? "General Practitioner";
    final experience = profile?.yearsExperience ?? 0;
    final location = profile?.cityLocation ?? "Remote";
    final fee = profile?.minFee ?? 0.0;

    return Container(
      margin: const EdgeInsets.only(bottom: 20),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(24),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
          child: Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(0.04),
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: Colors.white.withOpacity(0.08)),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Doctor Photo or Avatar
                Stack(
                  alignment: Alignment.bottomRight,
                  children: [
                    Container(
                      width: 80,
                      height: 100,
                      decoration: BoxDecoration(
                        color: const Color(0xFF6C63FF).withOpacity(0.1),
                        borderRadius: BorderRadius.circular(18),
                        image: profile?.profilePhoto != null 
                          ? DecorationImage(
                              image: MemoryImage(base64Decode(profile!.profilePhoto!)),
                              fit: BoxFit.cover,
                            )
                          : null,
                      ),
                      child: profile?.profilePhoto == null 
                        ? const Icon(FontAwesomeIcons.userMd, color: Color(0xFF6C63FF), size: 30)
                        : null,
                    ),
                    if (profile?.approvalStatus == 'Verified')
                      Container(
                        padding: const EdgeInsets.all(2),
                        decoration: const BoxDecoration(color: Color(0xFF00E676), shape: BoxShape.circle),
                        child: const Icon(Icons.check, size: 14, color: Colors.white),
                      ),
                  ],
                ),
                const SizedBox(width: 16),
                // Doctor Info
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Expanded(
                            child: Text(
                              doctor.name,
                              style: GoogleFonts.outfit(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: const Color(0xFF00E676).withOpacity(0.1),
                              borderRadius: BorderRadius.circular(6),
                            ),
                            child: Text(
                              '₹${fee.toInt()}',
                              style: const TextStyle(
                                color: Color(0xFF00E676),
                                fontWeight: FontWeight.bold,
                                fontSize: 13,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Text(
                        specialization,
                        style: TextStyle(
                          color: const Color(0xFF00D2FF).withOpacity(0.8),
                          fontSize: 13,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const SizedBox(height: 8),
                      Row(
                        children: [
                          Icon(FontAwesomeIcons.briefcase, size: 12, color: Colors.white.withOpacity(0.4)),
                          const SizedBox(width: 6),
                          Text(
                            '$experience Years Exp.',
                            style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 12),
                          ),
                          const SizedBox(width: 12),
                          Icon(FontAwesomeIcons.locationDot, size: 12, color: Colors.white.withOpacity(0.4)),
                          const SizedBox(width: 6),
                          Text(
                            location,
                            style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 12),
                          ),
                        ],
                      ),
                      const SizedBox(height: 16),
                      Row(
                        children: [
                          Expanded(
                            child: ElevatedButton(
                              onPressed: () {
                                // Navigate to booking or profile
                              },
                              style: ElevatedButton.styleFrom(
                                backgroundColor: const Color(0xFF6C63FF),
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                                elevation: 0,
                              ),
                              child: Text('Consult Now', style: GoogleFonts.outfit(fontWeight: FontWeight.bold, fontSize: 13)),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
