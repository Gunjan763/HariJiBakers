import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaHome, FaConciergeBell, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import "./header1.css";

export default function Header1() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "black",
        position: "sticky",
        top: 0,
        zIndex: 999,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container fluid className="d-flex justify-content-between align-items-center py-3">
        {/* Brand and logo */}
        <a href="/" className="d-flex align-items-center text-decoration-none">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.vevBbJHJcVuZWfZXOHB1cAHaHa&pid=Api&P=0&h=180"
            alt="Hari Ji Bakers Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
          <span
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "28px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #ffeaa7, #fab1a0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "1px",
            }}
          >
            Hari Ji Bakers
          </span>
        </a>

        {/* Toggle button */}
        <button
          className="d-lg-none"
          style={{
            backgroundColor: "#ffeaa7",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </Container>

      {/* Navigation Links */}
      <div
        className={`d-lg-flex flex-column flex-lg-row align-items-start align-items-lg-center ${
          menuOpen ? "d-block" : "d-none"
        } d-lg-block px-4 pb-3 pb-lg-0`}
        style={{
          gap: "22px",
          backgroundColor: "black",
        }}
      >
        <a href="/home" style={navStyle} onClick={() => setMenuOpen(false)}>
          <FaHome style={iconStyle} /> Home
        </a>
        <a href="/services" style={navStyle} onClick={() => setMenuOpen(false)}>
          <FaConciergeBell style={iconStyle} /> Services
        </a>
        <a href="/about" style={navStyle} onClick={() => setMenuOpen(false)}>
          <FaInfoCircle style={iconStyle} /> About Us
        </a>
        <a href="/contact" style={navStyle} onClick={() => setMenuOpen(false)}>
          <FaPhoneAlt style={iconStyle} /> Contact
        </a>
      </div>
    </div>
  );
}

const navStyle = {
  color: "#fffaf0",
  fontSize: "18px",
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  display: "flex",
  alignItems: "center",
  padding: "10px 0",
  textDecoration: "none",
};

const iconStyle = {
  marginRight: "8px",
  color: "#ffeaa7",
  fontSize: "20px",
};
