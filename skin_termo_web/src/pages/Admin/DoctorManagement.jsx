import { apiFetch, API_BASE_URL } from '../../services/api';
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Mail, Phone, User, RefreshCw, Trash2, 
  Search, Filter, CheckCircle2, XCircle, Eye, FileText, 
  MapPin, Calendar, Briefcase, GraduationCap 
} from 'lucide-react';

const DoctorManagement = () => {
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [filter, setFilter] = useState('ALL'); // ALL, PENDING, APPROVED, REJECTED

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const response = await apiFetch('/admin/doctors');
      if (response.ok) {
        const data = await response.json();
        setDoctors(data);
      }
    } catch (err) {
      console.error("Failed to fetch doctors:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleVerify = async (doctorId, status, reason = '') => {
    try {
      const response = await apiFetch(`/admin/doctor/${doctorId}/verify`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, rejectionReason: reason }),
      });

      if (response.ok) {
        fetchDoctors();
        setSelectedDoctor(null);
      }
    } catch (err) {
      alert("Verification failed. Check console.");
    }
  };

  const filteredDoctors = doctors.filter(doc => 
    filter === 'ALL' ? true : doc.status === filter
  );

  return (
    <div className="animate-fade-up">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', margin: 0 }}>Professional Verification</h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '14px' }}>Review and authorize medical personnel access</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', background: 'var(--glass)', padding: '6px', borderRadius: '14px' }}>
          {['ALL', 'PENDING', 'APPROVED', 'REJECTED'].map(m => (
            <button 
              key={m}
              onClick={() => setFilter(m)}
              style={{ 
                padding: '8px 16px', borderRadius: '10px', fontSize: '12px', fontWeight: '700',
                background: filter === m ? 'var(--primary)' : 'transparent',
                color: filter === m ? 'white' : 'var(--text-dim)'
              }}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selectedDoctor ? '1fr 1fr' : '1fr', gap: '32px', transition: 'all 0.5s ease' }}>
        {/* List View */}
        <div className="glass-card" style={{ padding: '32px', minHeight: '600px' }}>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}><RefreshCw className="animate-spin" size={40} /></div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {filteredDoctors.map((doc) => (
                <div 
                  key={doc.id} 
                  onClick={() => setSelectedDoctor(doc)}
                  className="animate-fade-up" 
                  style={{ 
                    padding: '24px', borderRadius: '20px', background: selectedDoctor?.id === doc.id ? 'rgba(108, 99, 255, 0.1)' : 'rgba(255,255,255,0.02)', 
                    border: `1px solid ${selectedDoctor?.id === doc.id ? 'var(--primary)' : 'var(--border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.3s', cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ position: 'relative' }}>
                      <img 
                        src={doc.profile?.profilePhoto ? `${API_BASE_URL}${doc.profile.profilePhoto}` : `https://ui-avatars.com/api/?name=${doc.firstName}+${doc.lastName}&background=6c63ff&color=fff`} 
                        alt="Profile" 
                        style={{ width: '60px', height: '60px', borderRadius: '18px', objectFit: 'cover' }} 
                      />
                      <div style={{ 
                        position: 'absolute', bottom: '-5px', right: '-5px', width: '20px', height: '20px', borderRadius: '50%',
                        background: doc.status === 'APPROVED' ? 'var(--accent)' : doc.status === 'REJECTED' ? '#ff6b6b' : '#ffd600',
                        border: '3px solid var(--bg-dark)'
                      }} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>Dr. {doc.firstName} {doc.lastName}</h4>
                      <p style={{ margin: '4px 0 8px', fontSize: '13px', color: 'var(--text-dim)' }}>{doc.email}</p>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{ fontSize: '10px', background: 'rgba(108,99,255,0.1)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '6px', fontWeight: 'bold' }}>{doc.profile?.specialization || 'GENERAL'}</span>
                        <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-dim)', padding: '2px 8px', borderRadius: '6px' }}>EXP: {doc.profile?.yearOfExperience || '0'}yr</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', fontWeight: '800', color: doc.status === 'APPROVED' ? 'var(--accent)' : doc.status === 'REJECTED' ? '#ff6b6b' : '#ffd600' }}>{doc.status}</span>
                      <p style={{ margin: 0, fontSize: '10px', color: 'var(--text-dim)' }}>ID: {doc.id.split('-')[0]}</p>
                    </div>
                    <ArrowRight size={20} color="var(--border)" />
                  </div>
                </div>
              ))}
              {filteredDoctors.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-dim)', marginTop: '100px' }}>No professionals matching criteria.</p>}
            </div>
          )}
        </div>

        {/* Detail Inspection View */}
        {selectedDoctor && (
          <div className="glass-card animate-scale" style={{ padding: '40px', position: 'sticky', top: '20px', height: 'fit-content', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
               <h3 style={{ fontSize: '24px', fontWeight: '800' }}>Credential Review</h3>
               <button onClick={() => setSelectedDoctor(null)} style={{ background: 'var(--glass)', padding: '8px', borderRadius: '50%' }}><XCircle size={20}/></button>
            </div>

            <section style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px', letterSpacing: '1px' }}>PERSONAL & ACADEMIC</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <DetailItem icon={<Calendar size={16}/>} label="DOB" value={selectedDoctor.profile?.dateOfBirth} />
                <DetailItem icon={<User size={16}/>} label="Gender" value={selectedDoctor.profile?.gender} />
                <DetailItem icon={<GraduationCap size={16}/>} label="Qualifications" value={selectedDoctor.profile?.qualification} />
                <DetailItem icon={<Briefcase size={16}/>} label="Designation" value={selectedDoctor.profile?.designation} />
              </div>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px', letterSpacing: '1px' }}>PROFESSIONAL IDENTITY</p>
              <DetailItem label="Reg Number" value={selectedDoctor.profile?.registrationNumber} />
              <DetailItem label="Current Workplace" value={selectedDoctor.profile?.currentWorkplace} />
              <DetailItem label="Clinic Address" value={`${selectedDoctor.profile?.clinicAddress}, ${selectedDoctor.profile?.city}, ${selectedDoctor.profile?.state}`} />
            </section>

            <section style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px', letterSpacing: '1px' }}>DOCUMENT VERIFICATION</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {['idProofDocument', 'medicalLicenseDoc', 'degreeCertificate'].map(docKey => (
                  <button 
                    key={docKey}
                    onClick={() => window.open(`${API_BASE_URL}${selectedDoctor.profile?.[docKey]}`, '_blank')}
                    style={{ 
                      padding: '16px', background: 'var(--glass)', borderRadius: '16px', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', gap: '12px', color: 'white', fontSize: '13px', fontWeight: '600'
                    }}
                  >
                    <FileText size={20} color="var(--secondary)"/> {docKey.replace(/([A-Z])/g, ' $1').toUpperCase()}
                  </button>
                ))}
              </div>
            </section>

            {selectedDoctor.status === 'PENDING' && (
              <div style={{ display: 'flex', gap: '16px' }}>
                <button 
                  onClick={() => handleVerify(selectedDoctor.id, 'APPROVED')}
                  className="btn-primary" style={{ flex: 1, padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                >
                  <CheckCircle2 size={20} /> APPROVE ACCESS
                </button>
                <button 
                  onClick={() => {
                    const reason = prompt("Enter rejection reason:");
                    if (reason) handleVerify(selectedDoctor.id, 'REJECTED', reason);
                  }}
                  className="btn-secondary" style={{ flex: 1, padding: '16px', border: '1px solid #ff6b6b', color: '#ff6b6b', background: 'transparent' }}
                >
                   REJECT APPLICATION
                </button>
              </div>
            )}
            
            {selectedDoctor.status !== 'PENDING' && (
              <div style={{ padding: '20px', borderRadius: '16px', background: selectedDoctor.status === 'APPROVED' ? 'rgba(0, 230, 118, 0.05)' : 'rgba(255, 107, 107, 0.05)', border: `1px solid ${selectedDoctor.status === 'APPROVED' ? 'var(--accent)' : '#ff6b6b'}` }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: selectedDoctor.status === 'APPROVED' ? 'var(--accent)' : '#ff6b6b' }}>
                  DECISION: {selectedDoctor.status}
                </p>
                {selectedDoctor.profile?.rejectionReason && <p style={{ fontSize: '13px', marginTop: '10px', color: 'var(--text-dim)' }}>Reason: {selectedDoctor.profile.rejectionReason}</p>}
                <p style={{ fontSize: '11px', marginTop: '10px', color: 'rgba(255,255,255,0.3)' }}>PROCESSED AT: {new Date(selectedDoctor.profile?.verifiedAt).toLocaleString()}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const DetailItem = ({ icon, label, value }) => (
  <div style={{ marginBottom: '16px' }}>
    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-dim)', marginBottom: '4px', textTransform: 'uppercase' }}>
      {icon} {label}
    </label>
    <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: 'white' }}>{value || 'N/A'}</p>
  </div>
);

export default DoctorManagement;
