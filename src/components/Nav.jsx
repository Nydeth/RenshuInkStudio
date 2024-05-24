import React, { useState, useEffect } from "react";
import { Link } from "../Link";
import { Helmet } from "react-helmet";
import "../cssComponents/nav.css";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 50);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&amp;amp;family=Press+Start+2P&amp;amp;family=Sevillana&amp;amp;display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <header className="header-dark logoDiv">
        <img
          src="src/assets/img/OniPi.png"
          alt="Logo"
          className="logoNav"
          onClick={() => (window.location.href = "/")}
        />
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button
            className={`navbar-toggler ${isHidden ? "hidden" : ""} ${isOpen ? "collapsed" : ""}`}
            type="button"
            onClick={toggleMenu}
          >
            <span
              className="navbar-toggler-icon"
              style={{ fontSize: "0.75rem" }}
            ></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto navUl">
              <div className="navList links link1">
                <li className="nav-item navli">
                  <Link to="/" className="nav-link">
                    Inicio
                  </Link>
                </li>
                <li className="nav-itemm navli">
                  <Link to="/biblioteca" className="nav-link">
                    Biblioteca
                  </Link>
                </li>
                <li className="nav-itemm navli">
                  <Link to="/equipo" className="nav-link">
                    Equipo
                  </Link>
                </li>
              </div>
              <div className="navList navLogo">
                <img
                  src="src/assets/img/OniPi.png"
                  alt="Logo"
                  className="logoNav"
                  onClick={() => (window.location.href = "/")}
                />
              </div>
              <div className="navList links link2">
                <li className="nav-itemm navli">
                  <Link to="/bisuteria" className="nav-link">
                    Bisutería
                  </Link>
                </li>
                <li className="nav-itemm navli">
                  <Link to="/about" className="nav-link">
                    Conócenos
                  </Link>
                </li>
                <li className="nav-itemm navli">
                  <Link to="/contacto" className="nav-link">
                    Contacto
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
