import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaConciergeBell, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./first.css";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        width: "100%",
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
        zIndex: 999,
        padding: "10px 30px",
        backgroundColor: "rgba(10, 10, 10, 0.9)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        boxShadow: "0 2px 15px rgba(0, 0, 0, 0.6)",
      }}
    >
      <Container fluid>
        {/* Logo + Brand */}
        <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.vevBbJHJcVuZWfZXOHB1cAHaHa&pid=Api&P=0&h=180"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            }}
            alt="Hari Ji Bakers Logo"
          />
          <span
            style={{
              fontFamily: "'Poetsen One', sans-serif",
              fontWeight: "bold",
              fontSize: "32px",
              color: "whitesmoke",
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
            }}
          >
            Hari Ji Bakers
          </span>
        </Navbar.Brand>

        {/* Toggle button positioned to right */}
        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />

        {/* Nav links */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{
              gap: "20px",
              alignItems: "center",
              textAlign: "center",
            }}
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

// Nav link style
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

// Icon style
const iconStyle = {
  marginRight: "8px",
  color: "#FFD700",
  fontSize: "18px",
};
