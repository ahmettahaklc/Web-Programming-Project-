import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

const TopBar = () => {
  const [user, setUser] = useState(null);
  const targetRef = useRef(null);

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
      { threshold: 0.01 }
    );
    if (targetElement) observer.observe(targetElement);
    return () => {
      if (targetElement) observer.unobserve(targetElement);
    };
  }, []);

  

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="wrapper target" ref={targetRef}>
        <div class="left">
                <a href="https://www.instagram.com/mmaliklc?igsh=MWl0ejI1aHBiczFrZQ==" target="_blank">
                    <i class="fa-brands fa-square-x-twitter"></i>
                </a>

                <a href="https://www.instagram.com/mmaliklc?igsh=MWl0ejI1aHBiczFrZQ==" target="_blank">
                    <i class="fa-brands fa-square-instagram"></i>
                </a>

                <a href="https://www.instagram.com/mmaliklc?igsh=MWl0ejI1aHBiczFrZQ==" target="_blank">
                    <i class="fa-brands fa-square-facebook"></i>
                </a>

                <a href="https://www.instagram.com/mmaliklc?igsh=MWl0ejI1aHBiczFrZQ==" target="_blank">
                    <i class="fa-brands fa-square-pinterest"></i>
                </a>
            </div>

          <div className="center">
            <a href="/">HOME</a>
            <a href="/CaseManagementPage">CASES</a>
            <a href="/ClientManagementPage">CLIENTS</a>
            
            { user && (
              <>
              <a href="/CaseManagementPage">CASES</a>
              <a href="/ClientManagementPage">CLIENTS</a>
              </>
            )}
            <a href="/Comunication">CONTACT</a>
            {user ? (
              <>
                <a href="#" onClick={() => setUser(null)}>LOGOUT</a>
              </>
            ) : ( 
            <>    
              <a href="/Login" >LOGIN</a>
              <a href="/SignIn">SIGN IN</a>
            </>
            )}
          </div>

          <div className="right">
            <div className="searchEngine" id="searchEngine">
              <input type="text" placeholder="..." />
              <i className="fa-solid fa-magnifying-glass" id="searchIcon"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
