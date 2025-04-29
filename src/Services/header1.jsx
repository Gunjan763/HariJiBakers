import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaConciergeBell, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import "./header1.css";

export default function Header1() {
  return (
    <Navbar
      expand="lg"
      style={{
        width: "100%",
        backgroundColor: "black",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        top: 0,
        zIndex: 999,
        padding: "14px 30px",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      <Container fluid>
      <Navbar.Brand href="/" className="d-flex align-items-center">
  <img
    src="https://tse1.mm.bing.net/th?id=OIP.vevBbJHJcVuZWfZXOHB1cAHaHa&pid=Api&P=0&h=180"
    alt="Hari Ji Bakers Logo"
    className="logo-img"
    style={{ height: "50px", marginRight: "10px" }}
  />
  <span
    className="brand-name"
    style={{
      fontFamily: "'Great Vibes', cursive",
      fontSize: "28px",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #ffeaa7, #fab1a0)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "1px",
      textShadow: "1px 1px 1px rgba(0,0,0,0.1)",
    }}
  >
    Hari Ji Bakers
  </span>
</Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "#ffeaa7" }} />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ gap: "22px", alignItems: "center" }} navbarScroll>
            <Nav.Link href="/home" style={navStyle}>
              <FaHome style={iconStyle} /> Home
            </Nav.Link>
            <Nav.Link href="/services" style={navStyle}>
              <FaConciergeBell style={iconStyle} /> Services
            </Nav.Link>
            <Nav.Link href="/about" style={navStyle}>
              <FaInfoCircle style={iconStyle} /> About Us
            </Nav.Link>
            <Nav.Link href="/contact" style={navStyle}>
              <FaPhoneAlt style={iconStyle} /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const navStyle = {
  color: "#fffaf0",
  fontSize: "18px",
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  display: "flex",
  alignItems: "center",
  transition: "color 0.3s ease",
};

const iconStyle = {
  marginRight: "8px",
  color: "#ffeaa7",
  fontSize: "20px",
};
