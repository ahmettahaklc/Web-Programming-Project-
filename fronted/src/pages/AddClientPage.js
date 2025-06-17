import React, { useState, useEffect, useRef } from 'react';

function AddClientPage() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  });

  const formRef = useRef(null);

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
    <div className="container mt-4">
      <div ref={formRef} className="form-container">
        <h2>Yeni Müvekkil Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>İsim</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Soyisim</label>
            <input
              type="text"
              name="surname"
              className="form-control"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Telefon</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Kaydet</button>
        </form>
      </div>
    </div>
  );
}

export default AddClientPage;
