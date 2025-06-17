
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const target = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      },
      { threshold: 0.3 }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const stats = [
    { title: "Toplam Dava", count: 14, bg: "primary" },
    { title: "Aktif Dava", count: 6, bg: "success" },
    { title: "Müvekkil Sayısı", count: 10, bg: "warning" },
  ];

  const recentCases = [
    { id: 1, name: "Ahmet Yılmaz", client: "Ali Veli", court: "İstanbul", date: "2025-05-21", status: "Aktif" },
    { id: 2, name: "Mehmet Demir", client: "Zeynep Kara", court: "Ankara", date: "2025-05-20", status: "Kapalı" },
  ];

  return (
    <div ref={containerRef} className="container mt-4 dashboard-container">
      <h2>Dashboard</h2>

      {/* İstatistik Kartları */}
      <div className="row mb-4">
        {stats.map((stat, idx) => (
          <div className="col-md-4" key={idx}>
            <div className={`card text-white bg-${stat.bg} mb-3`}>
              <div className="card-body">
                <h5 className="card-title">{stat.title}</h5>
                <p className="card-text fs-4">{stat.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Son Davalar Tablosu */}
      <div className="card">
        <div className="card-header">Son Davalar</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Dava Adı</th>
                <th>Müvekkil</th>
                <th>Mahkeme</th>
                <th>Tarih</th>
                <th>Durum</th>
              </tr>
            </thead>
            <tbody>
              {recentCases.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.client}</td>
                  <td>{item.court}</td>
                  <td>{item.date}</td>
                  <td>
                    <span
                      className={`badge bg-${item.status === "Aktif" ? "success" : "secondary"}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;








