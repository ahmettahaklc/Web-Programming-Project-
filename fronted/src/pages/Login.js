import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

const Login = () => {
  //const [user, setUser] = useState(null);  Giriş yapan kullanıcıyı tutar
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const targetRef = useRef(null); // Reference to the wrapper div

  useEffect(() => {
    const targetElement = targetRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting
            ? entry.target.classList.add("active")
            : entry.target.classList.remove("active");
        });
      },
      { threshold: 0.3 }
    );

    if (targetElement) observer.observe(targetElement);

    return () => {
      if (targetElement) observer.unobserve(targetElement);
    };
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Giriş başarılı (demo)");
  };

  return (
    <div className="background">
      <div
        ref={targetRef}
        className="container login-container d-flex justify-content-center align-items-center vh-100"
      >
        <div
          className="card p-4 shadow"
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 className="text-center mb-4">Giriş Yap</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-posta</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@eposta.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Şifre</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
