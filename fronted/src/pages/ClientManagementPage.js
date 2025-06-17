import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ClientManagementPage() {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();
  const pageRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const mockClients = [
        { id: 1, name: "Ahmet", surname: "Yılmaz", phone: "0555 123 45 67", email: "ahmet@example.com" },
        { id: 2, name: "Fatma", surname: "Kaya", phone: "0555 987 65 43", email: "fatma@example.com" }
      ];
      setClients(mockClients);
    };

    fetchData();

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
    const updatedClients = clients.filter(client => client.id !== id);
    setClients(updatedClients);
  };

  const handleAddClick = () => {
    navigate('/AddClient');
  };

  const handleEditClick = (id) => {
    navigate(`/EditClient/${id}`);
  };

  return (
    <div ref={pageRef} className="client-management-container container mt-4">
      <h2>Müvekkil Yönetimi</h2>
      <button className="btn btn-success my-2" onClick={handleAddClick}>Yeni Müvekkil Ekle</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Telefon</th>
            <th>Email</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.surname}</td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditClick(client.id)}>Düzenle</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(client.id)}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientManagementPage;
