import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaConciergeBell, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import "./header1.css";

export default function Header1() {
  return (
    <Navbar expand="lg" className="custom-navbar">
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
          <Nav
            className="ms-auto my-2 my-lg-0 navbar-links"
            style={{ gap: "22px", alignItems: "center" }}
            navbarScroll
          >
            <Nav.Link href="/home" className="nav-link">
              <FaHome style={iconStyle} /> Home
            </Nav.Link>
            <Nav.Link href="/services" className="nav-link">
              <FaConciergeBell style={iconStyle} /> Services
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link">
              <FaInfoCircle style={iconStyle} /> About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link">
              <FaPhoneAlt style={iconStyle} /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const iconStyle = {
  marginRight: "8px",
  color: "white", // Ensure icons are visible
  fontSize: "20px",
};
