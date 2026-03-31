class Doctor {
  final int id;
  final String name;
  final String email;
  final DoctorProfile? profile;

  Doctor({
    required this.id,
    required this.name,
    required this.email,
    this.profile,
  });

  factory Doctor.fromJson(Map<String, dynamic> json) {
    return Doctor(
      id: json['id'],
      name: json['name'],
      email: json['email'],
      profile: json['profile'] != null ? DoctorProfile.fromJson(json['profile']) : null,
    );
  }
}

class DoctorProfile {
  final String? fullName;
  final String? specialization;
  final int? yearsExperience;
  final String? medicalDegree;
  final String? bio;
  final String? profilePhoto;
  final String? cityLocation;
  final List<String>? languagesSpoken;
  final Map<String, dynamic>? consultationFees;
  final String? approvalStatus;

  DoctorProfile({
    this.fullName,
    this.specialization,
    this.yearsExperience,
    this.medicalDegree,
    this.bio,
    this.profilePhoto,
    this.cityLocation,
    this.languagesSpoken,
    this.consultationFees,
    this.approvalStatus,
  });

  factory DoctorProfile.fromJson(Map<String, dynamic> json) {
    return DoctorProfile(
      fullName: json['full_name'],
      specialization: json['specialization'],
      yearsExperience: json['years_experience'],
      medicalDegree: json['medical_degree'],
      bio: json['bio'],
      profilePhoto: json['profile_photo'],
      cityLocation: json['city_location'],
      languagesSpoken: json['languages_spoken'] != null ? List<String>.from(json['languages_spoken']) : null,
      consultationFees: json['consultation_fees'],
      approvalStatus: json['approval_status'],
    );
  }

  double get minFee {
    if (consultationFees == null || consultationFees!.isEmpty) return 0.0;
    try {
      final fees = consultationFees!.values.map((v) => double.tryParse(v.toString()) ?? 0.0).toList();
      if (fees.isEmpty) return 0.0;
      return fees.reduce((a, b) => a < b ? a : b);
    } catch (_) {
      return 0.0;
    }
  }
}
