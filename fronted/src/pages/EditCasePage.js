import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditClientPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    const clientFromServer = {
      id,
      name: "Mock İsim",
      surname: "Mock Soyisim",
      phone: "0555 111 22 33",
      email: "mock@example.com"
    };
    setFormData(clientFromServer);
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.3 }
    );

    const el = formRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

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
    <div className="container mt-4">
      <div ref={formRef} className="form-container">
        <h2>Müvekkil Bilgilerini Düzenle</h2>
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
          <button type="submit" className="btn btn-primary">Kaydet</button>
        </form>
      </div>
    </div>
  );
}

export default EditClientPage;
