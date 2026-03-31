import sequelize from '../config/database';
import User from './User';
import DoctorProfile from './DoctorProfile';
import AnalysisHistory from './AnalysisHistory';
import ChatSession from './ChatSession';
import ChatMessage from './ChatMessage';
import ConsultationChatSession from './ConsultationChatSession';
import ConsultationMessage from './ConsultationMessage';

export {
  sequelize,
  User,
  DoctorProfile,
  AnalysisHistory,
  ChatSession,
  ChatMessage,
  ConsultationChatSession,
  ConsultationMessage,
};
