import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function CaseManagementPage() {
  const [cases, setCases] = useState([]);
  const navigate = useNavigate();
  const pageRef = useRef(null);

  useEffect(() => {
    const fetchCases = async () => {
      const mockCases = [
        {
          id: 1,
          title: "Kira İhtilafı",
          clientName: "Ahmet Yılmaz",
          court: "İstanbul 5. Sulh Hukuk",
          dateOpened: "2024-01-15",
          status: "Devam Ediyor",
        },
        {
          id: 2,
          title: "Trafik Kazası",
          clientName: "Fatma Koç",
          court: "Ankara 3. Asliye Hukuk",
          dateOpened: "2024-03-22",
          status: "Sonuçlandı",
        }
      ];
      setCases(mockCases);
    };

    fetchCases();

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting
          ? entry.target.classList.add("active")
          : entry.target.classList.remove("active");
      },
      { threshold: 0.3 }
    );

    const el = pageRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };

  }, []);

  const handleDelete = (id) => {
    setCases(cases.filter(c => c.id !== id));
  };

  const handleAddClick = () => {
    navigate('/AddCase');  
  };

  const handleEditClick = (id) => {
    navigate(`/EditCase/${id}`);
  };

  return (
    <div ref={pageRef} className="case-management-container container mt-4">
      <h2>Dava Yönetimi</h2>
      <button className="btn btn-success my-2" onClick={handleAddClick}>Yeni Dava Ekle</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Dava Başlığı</th>
            <th>Müvekkil</th>
            <th>Mahkeme</th>
            <th>Açılış Tarihi</th>
            <th>Durum</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c) => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.clientName}</td>
              <td>{c.court}</td>
              <td>{c.dateOpened}</td>
              <td>{c.status}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={handleEditClick}>Düzenle</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c.id)}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CaseManagementPage;
