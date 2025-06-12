// src/pages/AddCasePage.js
import React, { useState } from 'react';

function AddCasePage() {
  const [formData, setFormData] = useState({
    caseTitle: '',
    client: '',
    court: '',
    startDate: '',
    caseSituation: '' 
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
    console.log("New Lawsuit:", formData);
    // Buraya API'ye POST işlemi eklenecek
    alert("Case is created succesfully");
  };

  return (
    <div className="container">
      <h2>New Case Create</h2>
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
        <button type="submit" className="btn btn-success">Kaydet</button>
      </form>
    </div>
  );
}

export default AddCasePage;
