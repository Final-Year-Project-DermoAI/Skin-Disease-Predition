import { Request, Response } from 'express';
import { User, DoctorProfile } from '../models';
import { getPasswordHash } from '../utils/auth';

export const registerDoctor = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      dateOfBirth,
      gender,
      registrationNumber,
      specialization,
      subSpecialization,
      qualification,
      yearOfExperience,
      currentWorkplace,
      designation,
      consultationFee,
      clinicName,
      clinicAddress,
      city,
      state,
      pincode,
      country,
      latitude,
      longitude,
      idProofType,
      idProofNumber,
      medicalLicenseNumber,
      availableDays,
      startTime,
      endTime,
      website,
      bio,
      languages
    } = req.body;

    // 1. Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ detail: 'Email already registered' });
    }

    // 2. Map file URLs if they exist
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const profilePhoto = files['profilePhoto'] ? `/uploads/${files['profilePhoto'][0].filename}` : null;
    const idProofDocument = files['idProofDocument'] ? `/uploads/${files['idProofDocument'][0].filename}` : null;
    const medicalLicenseDoc = files['medicalLicenseDoc'] ? `/uploads/${files['medicalLicenseDoc'][0].filename}` : null;
    const degreeCertificate = files['degreeCertificate'] ? `/uploads/${files['degreeCertificate'][0].filename}` : null;
    const additionalCertificate = files['additionalCertificate'] ? `/uploads/${files['additionalCertificate'][0].filename}` : null;

    // 3. Create User
    const hashedPassword = getPasswordHash(password);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role: 'DOCTOR',
      status: 'PENDING',
      isVerified: false
    });

    // 4. Create Doctor Profile
    await DoctorProfile.create({
      userId: newUser.id,
      profilePhoto,
      dateOfBirth,
      gender,
      registrationNumber,
      specialization,
      subSpecialization,
      qualification,
      yearOfExperience,
      currentWorkplace,
      designation,
      consultationFee,
      clinicName,
      clinicAddress,
      city,
      state,
      pincode,
      country,
      latitude,
      longitude,
      idProofType,
      idProofNumber,
      idProofDocument,
      medicalLicenseNumber,
      medicalLicenseDoc,
      degreeCertificate,
      additionalCertificate,
      availableDays: availableDays ? JSON.parse(availableDays) : null,
      startTime,
      endTime,
      website,
      bio,
      languages: languages ? JSON.parse(languages) : null
    });

    return res.status(201).json({ message: 'Doctor registration successful. Awaiting admin verification.' });
  } catch (error: any) {
    console.error('Doctor Registration Error:', error);
    return res.status(500).json({ detail: error.message });
  }
};

export const getDoctorProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const profile = await DoctorProfile.findOne({
      where: { userId },
      include: [{ model: User, as: 'user' }]
    });
    if (!profile) {
      return res.status(404).json({ detail: 'Profile not found' });
    }
    return res.json(profile);
  } catch (error: any) {
    return res.status(500).json({ detail: error.message });
  }
};
