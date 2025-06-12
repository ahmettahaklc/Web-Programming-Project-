// src/pages/EditClientPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditClientPage() {
  const { id } = useParams(); // URL'den id'yi al
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    caseTitle: '',
    client: '',
    court: '',
    startDate: '',
    caseSituation: ''
  });

  useEffect(() => {
    // Buraya gerçek backend çağrısı gelebilir.
    const clientFromServer = {
      id,
      name: "Mock İsim",
      surname: "Mock Soyisim",
      phone: "0555 111 22 33",
      email: "mock@example.com"
    };
    setFormData(clientFromServer);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Güncellenen müvekkil:", formData);
    alert("Müvekkil bilgileri güncellendi!");
    navigate('/ClientManagementPage');
  };

  return (
    <div className="container">
      <h2>Müvekkil Bilgilerini Düzenle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Case Title</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Client</label>
          <input type="text" name="surname" className="form-control" value={formData.surname} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Court</label>
          <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Start Date</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Case Situation</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Kaydet</button>
      </form>
    </div>
  );
}

export default EditClientPage;
