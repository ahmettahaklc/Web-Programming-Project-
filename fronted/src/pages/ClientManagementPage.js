import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

function ClientManagementPage() {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  // Sayfa ilk açıldığında çalışır
  useEffect(() => {
    // Mock veri (backend'den axios ile alınabilir)
    const fetchData = async () => {
      // Buraya ileride axios ile API çağrısı eklenebilir
      const mockClients = [
        { id: 1, name: "Ahmet", surname: "Yılmaz", phone: "0555 123 45 67", email: "ahmet@example.com" },
        { id: 2, name: "Fatma", surname: "Kaya", phone: "0555 987 65 43", email: "fatma@example.com" }
      ];
      setClients(mockClients);
    };

    fetchData();
  }, []);

  // Silme örneği
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
    <div>
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
                <button className="btn btn-sm btn-primary me-2" onClick={()=> handleEditClick(client.id)}>Düzenle</button>
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
