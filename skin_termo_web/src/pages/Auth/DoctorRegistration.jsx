import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Mail, Phone, Lock, Calendar, ClipboardList, 
  MapPin, Clock, Languages, Globe, BadgeInfo,
  ShieldCheck, Upload, ArrowRight, ArrowLeft 
} from 'lucide-react';
import { apiFetch, API_BASE_URL } from '../../services/api';

const DoctorRegistration = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '',
    dateOfBirth: '', gender: 'MALE',
    registrationNumber: '', specialization: 'Dermatology', subSpecialization: '',
    qualification: '', yearOfExperience: '', currentWorkplace: '', 
    designation: '', consultationFee: '',
    clinicName: '', clinicAddress: '', city: '', state: '', 
    pincode: '', country: 'India',
    idProofType: 'AADHAAR', idProofNumber: '',
    medicalLicenseNumber: '',
    availableDays: [], startTime: '09:00', endTime: '17:00',
    website: '', bio: '', languages: []
  });

  const [files, setFiles] = useState({
    profilePhoto: null,
    idProofDocument: null,
    medicalLicenseDoc: null,
    degreeCertificate: null,
    additionalCertificate: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles(prev => ({ ...prev, [name]: selectedFiles[0] }));
  };

  const toggleArrayItem = (name, item) => {
    setFormData(prev => {
      const arr = [...prev[name]];
      const idx = arr.indexOf(item);
      if (idx > -1) arr.splice(idx, 1);
      else arr.push(item);
      return { ...prev, [name]: arr };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = new FormData();
      // Append form fields
      Object.keys(formData).forEach(key => {
        if (Array.isArray(formData[key])) {
          data.append(key, JSON.stringify(formData[key]));
        } else {
          data.append(key, formData[key]);
        }
      });
      // Append files
      Object.keys(files).forEach(key => {
        if (files[key]) data.append(key, files[key]);
      });

      const response = await fetch(`${API_BASE_URL}/doctor/register`, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        navigate('/login', { state: { message: 'Registration submitted. Please wait for admin approval.' } });
      } else {
        const errData = await response.json();
        setError(errData.detail || 'Registration failed');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', padding: '40px 20px' }}>
      <div className="glass-card animate-fade-up" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Doctor Onboarding</h1>
          <p style={{ color: 'var(--text-dim)' }}>Step {step} of 4: {
            step === 1 ? 'Personal Information' : 
            step === 2 ? 'Professional Details' : 
            step === 3 ? 'Location & Presence' : 
            'Verification Documents'
          }</p>
          {error && <div style={{ background: 'rgba(255,107,107,0.1)', color: '#ff6b6b', padding: '12px', borderRadius: '8px', marginTop: '16px' }}>{error}</div>}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="animate-fade-up">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <InputGroup icon={<User size={18}/>} label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <InputGroup icon={<User size={18}/>} label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                <InputGroup icon={<Mail size={18}/>} label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
                <InputGroup icon={<Phone size={18}/>} label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                <InputGroup icon={<Lock size={18}/>} label="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
                <InputGroup icon={<Calendar size={18}/>} label="Date of Birth" type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                <SelectGroup icon={<BadgeInfo size={18}/>} label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={['MALE', 'FEMALE', 'OTHER']} />
              </div>
              <StepActions next={nextStep} />
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-up">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <InputGroup label="Registration Number" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required />
                <InputGroup label="Highest Qualification" name="qualification" value={formData.qualification} onChange={handleChange} required />
                <InputGroup label="Specialization" name="specialization" value={formData.specialization} onChange={handleChange} required />
                <InputGroup label="Sub-specialization" name="subSpecialization" value={formData.subSpecialization} onChange={handleChange} />
                <InputGroup label="Years of Experience" type="number" name="yearOfExperience" value={formData.yearOfExperience} onChange={handleChange} required />
                <InputGroup label="Consultation Fee (₹)" type="number" name="consultationFee" value={formData.consultationFee} onChange={handleChange} />
                <InputGroup label="Current Workplace" name="currentWorkplace" value={formData.currentWorkplace} onChange={handleChange} required />
                <InputGroup label="Designation" name="designation" value={formData.designation} onChange={handleChange} required />
              </div>
              <StepActions next={nextStep} back={prevStep} />
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-up">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <InputGroup icon={<MapPin size={18}/>} label="Clinic/Hospital Name" name="clinicName" value={formData.clinicName} onChange={handleChange} />
                <InputGroup icon={<MapPin size={18}/>} label="Clinic Address" name="clinicAddress" value={formData.clinicAddress} onChange={handleChange} required />
                <InputGroup label="City" name="city" value={formData.city} onChange={handleChange} required />
                <InputGroup label="State" name="state" value={formData.state} onChange={handleChange} required />
                <InputGroup label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
                <InputGroup icon={<Globe size={18}/>} label="Website URL" name="website" value={formData.website} onChange={handleChange} />
                <InputGroup icon={<Clock size={18}/>} label="Consultation Start" type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
                <InputGroup icon={<Clock size={18}/>} label="Consultation End" type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
              </div>
              <div style={{ marginTop: '20px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-dim)', marginBottom: '8px' }}>BIO / PROFESSIONAL SUMMARY</label>
                <textarea 
                  name="bio" value={formData.bio} onChange={handleChange}
                  style={{ width: '100%', background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: '12px', color: 'white', padding: '12px', minHeight: '100px' }}
                />
              </div>
              <StepActions next={nextStep} back={prevStep} />
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-up">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <FileUpload label="Profile Photo" name="profilePhoto" onChange={handleFileChange} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <SelectGroup label="ID Proof Type" name="idProofType" value={formData.idProofType} onChange={handleChange} options={['AADHAAR', 'PAN', 'PASSPORT', 'DL']} />
                  <InputGroup label="ID Number" name="idProofNumber" value={formData.idProofNumber} onChange={handleChange} required />
                  <FileUpload label="Upload ID Proof Doc" name="idProofDocument" onChange={handleFileChange} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <InputGroup label="Medical License Number" name="medicalLicenseNumber" value={formData.medicalLicenseNumber} onChange={handleChange} required />
                  <FileUpload label="Medical License Doc" name="medicalLicenseDoc" onChange={handleFileChange} />
                </div>
                <FileUpload label="MBBS/MD Degree Certificate" name="degreeCertificate" onChange={handleFileChange} />
              </div>
              <div style={{ marginTop: '40px' }}>
                <button 
                  type="submit" disabled={loading} className="btn-primary" 
                  style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
                >
                  {loading ? 'Submitting Details...' : <><ShieldCheck size={20}/> COMPLETE REGISTRATION</>}
                </button>
                <button type="button" onClick={prevStep} style={{ width: '100%', background: 'none', border: 'none', color: 'var(--text-dim)', marginTop: '16px', cursor: 'pointer' }}>Back to edit</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const InputGroup = ({ label, icon, ...props }) => (
  <div style={{ marginBottom: '16px' }}>
    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-dim)', marginBottom: '6px', fontWeight: 'bold' }}>{label.toUpperCase()}</label>
    <div style={{ background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
      {icon}
      <input 
        style={{ background: 'transparent', border: 'none', color: 'white', padding: '12px', width: '100%', outline: 'none' }}
        {...props}
      />
    </div>
  </div>
);

const SelectGroup = ({ label, icon, options, ...props }) => (
  <div style={{ marginBottom: '16px' }}>
    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-dim)', marginBottom: '6px', fontWeight: 'bold' }}>{label.toUpperCase()}</label>
    <div style={{ background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
      {icon}
      <select 
        style={{ background: 'var(--bg-dark)', border: 'none', color: 'white', padding: '12px', width: '100%', outline: 'none' }}
        {...props}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  </div>
);

const FileUpload = ({ label, name, onChange }) => (
  <div style={{ padding: '20px', border: '2px dashed var(--border)', borderRadius: '16px', textAlign: 'center' }}>
    <label style={{ cursor: 'pointer' }}>
      <Upload size={24} color="var(--primary)" style={{ marginBottom: '8px' }} />
      <p style={{ fontSize: '13px', fontWeight: '600' }}>{label}</p>
      <input type="file" name={name} onChange={onChange} hidden />
    </label>
  </div>
);

const StepActions = ({ next, back }) => (
  <div style={{ display: 'flex', gap: '16px', marginTop: '30px' }}>
    {back && (
      <button type="button" onClick={back} className="btn-secondary" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <ArrowLeft size={18}/> BACK
      </button>
    )}
    <button type="button" onClick={next} className="btn-primary" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
      CONTINUE <ArrowRight size={18}/>
    </button>
  </div>
);

export default DoctorRegistration;
