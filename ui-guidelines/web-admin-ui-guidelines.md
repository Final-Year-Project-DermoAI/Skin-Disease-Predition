# SkinTermo Web Application UI Guidelines & Code Implementations

## 1. Location Picker Implementation (react-leaflet)
For the doctor's location marking, we use `react-leaflet` to ensure a consistent, interactive map experience without requiring immediate Google Maps API keys (though easily interchangeable).

```bash
npm install react-leaflet leaflet
npm install -D @types/leaflet
```

### `LocationPicker.jsx`
```jsx
// src/components/LocationPicker.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet marker icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
}

export default function LocationPicker({ defaultLocation, onLocationSelect }) {
  const [position, setPosition] = useState(defaultLocation || null);

  const handleSetPosition = (pos) => {
    setPosition(pos);
    if (onLocationSelect) onLocationSelect(pos);
  };

  return (
    <div style={{ height: '300px', width: '100%', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
      <MapContainer center={defaultLocation || [51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker position={position} setPosition={handleSetPosition} />
      </MapContainer>
    </div>
  );
}
```

---

## 2. Admin: Create Doctor & Doctor Form
This form collects all basic details, documents, profile picture, and exact location. 

```jsx
// src/pages/Admin/DoctorOnboardingForm.jsx
import React, { useState } from 'react';
import LocationPicker from '../../components/LocationPicker';

export default function DoctorOnboardingForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', // Basic Data for User creation
    licenceNumber: '', // Profile Data
  });
  
  const [files, setFiles] = useState({
    profilePicture: null,
    licenceDocument: null,
    aadhaarDocument: null
  });

  const [location, setLocation] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    // Append standard text data
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('password', formData.password);
    submitData.append('licenceNumber', formData.licenceNumber);
    if (location) {
      submitData.append('latitude', location.lat);
      submitData.append('longitude', location.lng);
    }
    
    // Append Media
    if (files.profilePicture) submitData.append('profilePicture', files.profilePicture);
    if (files.licenceDocument) submitData.append('licenceDocument', files.licenceDocument);
    if (files.aadhaarDocument) submitData.append('aadhaarDocument', files.aadhaarDocument);

    // Call Backend API
    const response = await fetch('/api/admin/doctor', {
      method: 'POST',
      body: submitData, // Note: no 'Content-Type' header so fetch can set boundary automatically
    });
    // Handle Response...
  };

  return (
    <div className="doctor-form-container">
      <h2>Register & Verify New Doctor</h2>
      <form onSubmit={handleSubmit} className="p-4 grid grid-cols-1 gap-4 bg-white shadow rounded">
        {/* Basic Information */}
        <input type="text" placeholder="Full Name" onChange={e => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email Address" onChange={e => setFormData({...formData, email: e.target.value})} />
        <input type="password" placeholder="Temporary Password" onChange={e => setFormData({...formData, password: e.target.value})} />
        <input type="text" placeholder="Licence Number" onChange={e => setFormData({...formData, licenceNumber: e.target.value})} />

        {/* Media Inputs */}
        <div>
          <label>Profile Picture</label>
          <input type="file" accept="image/*" onChange={e => setFiles({...files, profilePicture: e.target.files[0]})} />
        </div>
        <div>
          <label>Medical Licence (PDF)</label>
          <input type="file" accept="application/pdf" onChange={e => setFiles({...files, licenceDocument: e.target.files[0]})} />
        </div>
        <div>
          <label>Aadhaar Document (PDF)</label>
          <input type="file" accept="application/pdf" onChange={e => setFiles({...files, aadhaarDocument: e.target.files[0]})} />
        </div>

        {/* Location Picker */}
        <div>
          <label>Pin Clinic Location</label>
          <LocationPicker onLocationSelect={(pos) => setLocation(pos)} />
        </div>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Create Doctor</button>
      </form>
    </div>
  );
}
```

---

## 3. Auto-Generated Doctor ID Card Implementation
Generate a visual "ID Card" using the data retrieved from the `DoctorProfile` database schema.

```jsx
// src/components/DoctorIDCard.jsx
import React from 'react';

const DoctorIDCard = ({ doctor }) => {
  return (
    <div className="flex bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-sm m-4 relative">
      <div className="w-1/3 bg-blue-500 relative flex flex-col justify-center items-center p-4">
        {doctor.profile.profilePictureUrl ? (
          <img 
            src={`http://localhost:3000${doctor.profile.profilePictureUrl}`} 
            alt="Doctor Profile" 
            className="w-24 h-24 rounded-full border-4 border-white object-cover" 
          />
        ) : (
           <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center">N/A</div>
        )}
      </div>
      <div className="w-2/3 p-4">
        <h3 className="text-xl font-bold text-gray-800 uppercase leading-none mb-1">{doctor.name}</h3>
        <p className="text-sm font-semibold text-blue-600 mb-2">{doctor.profile?.specialization || 'Medical Specialist'}</p>
        
        <div className="text-xs text-gray-600 space-y-1">
          <p><strong>Licence No:</strong> {doctor.profile?.licenceNumber || 'Pending'}</p>
          <p><strong>Status:</strong> 
            <span className={`ml-1 px-2 py-0.5 rounded text-white ${doctor.profile?.verificationStatus === 'verified' ? 'bg-green-500' : 'bg-yellow-500'}`}>
               {doctor.profile?.verificationStatus?.toUpperCase()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorIDCard;
```

---

## 4. Patient-Doctor Real-time Chat with Media Viewer
Implementation relies on `react-viewer` for images and an HTML `<object>` for PDFs directly embedded in the chat log.

```bash
npm install react-viewer
```

```jsx
// src/components/ConsultationChat.jsx
import React, { useState, useEffect } from 'react';
import Viewer from 'react-viewer'; // Image Viewer package

export default function ConsultationChat({ patientId, doctorId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  
  // Image Viewer State
  const [isViewerVisible, setIsViewerVisible] = useState(false);
  const [viewerImage, setViewerImage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text && !mediaFile) return;

    const formData = new FormData();
    formData.append('content', text);
    if (mediaFile) {
        formData.append('media', mediaFile);
    }
    
    // Example POST endpoint to Node.js
    const response = await fetch(`/api/chat/consultations`, {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    setMessages([...messages, result]);
    setText('');
    setMediaFile(null);
  };

  return (
    <div className="chat-container border rounded h-96 flex flex-col bg-gray-50">
      <div className="messages-area flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-3 rounded-lg max-w-xs ${msg.senderRole === 'patient' ? 'bg-blue-100 self-end' : 'bg-white self-start shadow'}`}>
            <p>{msg.content}</p>
            
            {/* INLINE MEDIA VIEWER */}
            {msg.mediaType === 'image' && (
              <img 
                src={`http://localhost:3000${msg.mediaUrl}`} 
                alt="Attachment" 
                className="w-full mt-2 rounded cursor-pointer"
                onClick={() => {
                  setViewerImage(`http://localhost:3000${msg.mediaUrl}`);
                  setIsViewerVisible(true);
                }} 
              />
            )}

            {/* INLINE PDF VIEWER */}
            {msg.mediaType === 'pdf' && (
               <a href={`http://localhost:3000${msg.mediaUrl}`} target="_blank" rel="noreferrer" className="flex items-center text-blue-600 underline mt-2">
                 📄 View PDF Document
               </a>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="p-3 bg-white border-t flex items-center space-x-2">
        <input type="file" onChange={e => setMediaFile(e.target.files[0])} accept="image/*,application/pdf" className="text-sm w-32" />
        <input 
          type="text" 
          value={text} 
          onChange={e => setText(e.target.value)} 
          placeholder="Type a message..." 
          className="flex-1 p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>

      {/* REACT VIEWER OVERLAY FOR IMAGES */}
      <Viewer
        visible={isViewerVisible}
        onClose={() => setIsViewerVisible(false)}
        images={[{src: viewerImage, alt: 'Chat attachment'}]}
      />
    </div>
  );
}
```
