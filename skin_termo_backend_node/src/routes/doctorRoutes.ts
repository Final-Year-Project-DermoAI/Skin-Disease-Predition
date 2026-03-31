import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { registerDoctor, getDoctorProfile } from '../controllers/doctorController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();
const doctorRouter = Router();

// Configure storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  }
});

const upload = multer({ storage: storage });

const doctorUploads = upload.fields([
  { name: 'profilePhoto', maxCount: 1 },
  { name: 'idProofDocument', maxCount: 1 },
  { name: 'medicalLicenseDoc', maxCount: 1 },
  { name: 'degreeCertificate', maxCount: 1 },
  { name: 'additionalCertificate', maxCount: 1 },
]);

// Registration (Open)
doctorRouter.post('/register', doctorUploads, registerDoctor);

// Authenticated Doctor profile access
doctorRouter.get('/me/profile', authenticateToken, getDoctorProfile);

export { router, doctorRouter };
