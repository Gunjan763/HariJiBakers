import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaConciergeBell, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./first.css";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="bg-body-tertiary"
      style={{
        width: "100%",
        boxSizing: "border-box",
        zIndex: 999,
        padding: "10px 20px",
        backgroundColor: "rgba(10, 10, 10, 0.9)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        boxShadow: "0 2px 15px rgba(0, 0, 0, 0.6)",
      }}
    >
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center brand-container"
        >
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.vevBbJHJcVuZWfZXOHB1cAHaHa&pid=Api&P=0&h=180"
            className="brand-logo"
            alt="Hari Ji Bakers Logo"
            style={{ height: "48px", marginRight: "10px" }}
          />
          <span className="brand-text" style={brandTextStyle}>Hari Ji Bakers</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="ms-auto custom-toggler"
          style={toggleButtonStyle}
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 d-flex flex-column flex-lg-row align-items-start align-items-lg-center text-center py-3 py-lg-0"
            style={{ gap: "10px", paddingLeft: "15px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" style={navStyle}>
              <FaHome style={iconStyle} /> HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" style={navStyle}>
              <FaConciergeBell style={iconStyle} /> SERVICES
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={navStyle}>
              <FaInfoCircle style={iconStyle} /> ABOUT US
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" style={navStyle}>
              <FaPhoneAlt style={iconStyle} /> CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const navStyle = {
  color: "#F5DEB3",
  fontSize: "17px",
  fontWeight: "600",
  fontFamily: "'Quicksand', sans-serif",
  display: "flex",
  alignItems: "center",
  padding: "8px 12px",
  width: "100%", // ensures full clickable width on mobile
};

const iconStyle = {
  marginRight: "8px",
  color: "#FFD700",
  fontSize: "17px",
};

const brandTextStyle = {
  fontFamily: "'Great Vibes', cursive",
  fontSize: "26px",
  fontWeight: "bold",
  background: "linear-gradient(90deg, #ffeaa7, #fab1a0)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "1px",
};

const toggleButtonStyle = {
  border: "2px solid #ccc",
  padding: "6px 10px",
  backgroundColor: "#f8f9fa",
  borderRadius: "6px",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease",
  cursor: "pointer",
};
