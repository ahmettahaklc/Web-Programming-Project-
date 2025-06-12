// src/pages/AddClientPage.js edit page
import React, { useState } from 'react';

function AddClientPage() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yeni müvekkil:", formData);
    // Buraya API'ye POST işlemi eklenecek
    alert("Müvekkil başarıyla eklendi!");
  };

  return (
    <div className="container">
      <h2>Yeni Müvekkil Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>İsim</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Soyisim</label>
          <input type="text" name="surname" className="form-control" value={formData.surname} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Telefon</label>
          <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Kaydet</button>
      </form>
    </div>
  );
}

export default AddClientPage;
