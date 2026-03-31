import { Request, Response } from 'express';
import { ConsultationChatSession, ConsultationMessage, User, DoctorProfile } from '../models';

export const createConsultationSession = async (req: Request, res: Response) => {
  try {
    const { doctorId } = req.body;
    // Assuming req.user is populated by authenticateToken middleware
    const patientId = (req as any).user.id; 
    
    // Check if session already exists
    let session = await ConsultationChatSession.findOne({ where: { patientId, doctorId }});
    if (!session) {
      session = await ConsultationChatSession.create({ patientId, doctorId, status: 'active' });
    }
    return res.status(201).json(session);
  } catch (error: any) {
    return res.status(500).json({ detail: error.message });
  }
};

export const getConsultationSessions = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const role = (req as any).user.role;
    
    let sessions;
    if (role === 'doctor') {
      const profile = await DoctorProfile.findOne({ where: { userId }});
      sessions = await ConsultationChatSession.findAll({
        where: { doctorId: profile?.id },
        include: [{ model: User, as: 'patient' }]
      });
    } else {
      sessions = await ConsultationChatSession.findAll({
        where: { patientId: userId },
        include: [{ model: DoctorProfile, as: 'doctor', include: [{ model: User, as: 'user' }] }]
      });
    }
    return res.json(sessions);
  } catch (error: any) {
    return res.status(500).json({ detail: error.message });
  }
};

export const addConsultationMessage = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const { content } = req.body;
    const senderId = (req as any).user.id;
    const senderRole = (req as any).user.role;
    
    let mediaUrl = null;
    let mediaType = null;
    
    // multer stores uploaded file in req.file
    if (req.file) {
      mediaUrl = `/uploads/${req.file.filename}`;
      mediaType = req.file.mimetype.startsWith('image/') ? 'image' : 'pdf';
    }

    const message = await ConsultationMessage.create({
      sessionId: parseInt(sessionId as string, 10),
      senderId,
      senderRole: senderRole === 'doctor' ? 'doctor' : 'patient',
      content: content || '',
      mediaUrl,
      mediaType
    });

    return res.status(201).json(message);
  } catch (error: any) {
    return res.status(500).json({ detail: error.message });
  }
};

export const getConsultationMessages = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const messages = await ConsultationMessage.findAll({
      where: { sessionId: parseInt(sessionId as string, 10) },
      order: [['createdAt', 'ASC']]
    });
    return res.json(messages);
  } catch (error: any) {
    return res.status(500).json({ detail: error.message });
  }
};
