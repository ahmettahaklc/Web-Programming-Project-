import React, { useState, useRef, useEffect } from 'react';

function AddCasePage() {
  const [formData, setFormData] = useState({
    caseTitle: '',
    client: '',
    court: '',
    startDate: '',
    caseSituation: '' 
  });

  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
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
    console.log("New Case:", formData);
    alert("Dava başarıyla oluşturuldu!");
    // Buraya API'ye POST işlemi eklenecek
  };

  return (
    <div className="container mt-4">
      <div ref={formRef} className="form-container">
        <h2>Yeni Dava Oluştur</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">  
            <label>Dava Başlığı</label>
            <input
              type="text"
              name="caseTitle"
              className="form-control"
              value={formData.caseTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Müvekkil</label>
            <input
              type="text"
              name="client"
              className="form-control"
              value={formData.client}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Mahkeme</label>
            <input
              type="text"
              name="court"
              className="form-control"
              value={formData.court}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Açılış Tarihi</label>
            <input
              type="date"
              name="startDate"
              className="form-control"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Dava Durumu</label>
            <input
              type="text"
              name="caseSituation"
              className="form-control"
              value={formData.caseSituation}
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

export default AddCasePage;
