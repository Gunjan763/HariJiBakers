import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaConciergeBell, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

export default function Header1() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
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
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.vevBbJHJcVuZWfZXOHB1cAHaHa&pid=Api&P=0&h=180"
            alt="Hari Ji Bakers Logo"
            style={{
              height: "60px",
              width: "60px",
              borderRadius: "50%",
              marginRight: "16px",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            }}
          />
          <span
            style={{
              fontFamily: "'Poetsen One', sans-serif",
              fontWeight: "bold",
              fontSize: "clamp(26px, 4vw, 38px)",
              color: "whitesmoke",
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
              letterSpacing: "2px",
            }}
          >
            Hari Ji Bakers
          </span>
        </Navbar.Brand>

        {/* Toggle Button for mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{ gap: "20px", alignItems: "center" }}
            navbarScroll
          >
            <Nav.Link href="/home" style={navStyle}>
              <FaHome style={iconStyle} /> HOME
            </Nav.Link>
            <Nav.Link href="/services" style={navStyle}>
              <FaConciergeBell style={iconStyle} /> SERVICES
            </Nav.Link>
            <Nav.Link href="/about" style={navStyle}>
              <FaInfoCircle style={iconStyle} /> ABOUT US
            </Nav.Link>
            <Nav.Link href="/contact" style={navStyle}>
              <FaPhoneAlt style={iconStyle} /> CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Styles
const navStyle = {
  color: "#F5DEB3",
  fontSize: "18px",
  fontWeight: "600",
  fontFamily: "'Quicksand', sans-serif",
  display: "flex",
  alignItems: "center",
};

const iconStyle = {
  marginRight: "8px",
  color: "#FFD700",
  fontSize: "18px",
};
