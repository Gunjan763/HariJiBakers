import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaConciergeBell, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";  // Use Link instead of href
import "./first.css";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <Container
        fluid
        style={{
          width: "100%",
          backgroundColor: "rgba(10, 10, 10, 0.9)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          boxShadow: "0 2px 15px rgba(0, 0, 0, 0.6)",
          position: "sticky",
          top: 0,
          zIndex: 999,
          padding: "10px 30px",
        }}
      >
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.vevBbJHJcVuZWfZXOHB1cAHaHa&pid=Api&P=0&h=180"
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "50%",
              marginRight: "16px",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            }}
            alt="Hari Ji Bakers Logo"
          />
        </Navbar.Brand>

        {/* Brand Name */}
        <Navbar.Brand
          as={Link}
          to="/"  // Use Link for navigation
          style={{
            fontFamily: "'Poetsen One', sans-serif",
            fontWeight: "bold",
            fontSize: "clamp(30px, 4.5vw, 42px)",
            color: "whitesmoke",
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
            letterSpacing: "2px",
            marginRight: "auto",
          }}
        >
          Hari Ji Bakers
        </Navbar.Brand>

        {/* Toggle Button for mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", gap: "20px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" style={navStyle}>
              <FaHome style={iconStyle} /> HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/services" style={navStyle}>
              <FaConciergeBell style={iconStyle} /> SERVICES
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={navStyle}>
              <FaInfoCircle style={iconStyle} /> ABOUT US
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={navStyle}>
              <FaPhoneAlt style={iconStyle} /> CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Custom nav link style
const navStyle = {
  color: "#F5DEB3",
  fontSize: "18px",
  fontWeight: "600",
  letterSpacing: "1px",
  fontFamily: "'Quicksand', sans-serif",
  display: "flex",
  alignItems: "center",
  transition: "color 0.3s, text-shadow 0.3s",
  padding: "8px 16px",
};

const iconStyle = {
  marginRight: "8px",
  color: "#FFD700",
  fontSize: "18px",
};

@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
  }
  .navbar-nav .nav-link {
    padding: 10px;
  }
}
