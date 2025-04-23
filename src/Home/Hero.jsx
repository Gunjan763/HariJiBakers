import { motion } from "framer-motion";
import {
  FaHome,
  FaBirthdayCake,
  FaInfoCircle,
  FaEnvelope,
  FaConciergeBell,
} from "react-icons/fa";
import "./Hero.css";
import footerBg from "./harijipic.jpg";
import React, { useState } from "react";

export const name = "Hari Ji Bakers";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: "500",
    fontFamily: "inherit",
    fontSize: "20px",
    padding: "8px 12px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  const iconStyle = {
    color: "#FFD700",
  };

  return (
    <div className="hero-container" style={{ margin: 0, padding: 0 }}>
      <div
        style={{
          backgroundImage: `url('${footerBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          zIndex: 0,
          filter: "brightness(0.7) contrast(1)",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(15, 23, 42, 0.6), rgba(0, 0, 0, 0.5))",
          }}
        />

        {/* Header */}
        <header
          className="w-full px-6 sm:px-10 py-4 flex items-center justify-between z-10"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            color: "white",
          }}
        >
          <div className="flex items-center gap-3">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.vevBbJHJcVuZWfZXOHB1cAHaHa&pid=Api&P=0&h=180"
              alt="Logo"
              style={{
                height: "80px",
                width: "90px",
                borderRadius: "50%",
              }}
            />
            <h2
              style={{
                fontFamily: "'Poetsen One', sans-serif",
                fontSize: "34px",
                color: "#FFD700",
                textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
              }}
            >
              {name}
            </h2>
          </div>

          <button
            className="hamburger sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "30px",
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
          <nav
  className={`nav-links ${menuOpen ? "open" : ""} sm:flex hidden gap-6`}
  style={{
    alignItems: "center",
  }}
>
  <a href="/home" style={navLinkStyle}>
    <FaHome style={iconStyle} /> HOME
  </a>
  <a href="/services" style={navLinkStyle}>
    <FaConciergeBell style={iconStyle} /> SERVICES
  </a>
  <a href="/about" style={navLinkStyle}>
    <FaInfoCircle style={iconStyle} /> ABOUT US
  </a>
  <a href="/contact" style={navLinkStyle}>
    <FaEnvelope style={iconStyle} /> CONTACT US
  </a>
</nav>

        </header>

        {/* Hero Text */}
        <motion.div
          className="relative z-10 text-center w-full px-4 mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide mb-6"
            style={{
              color: "#a4510f",
              textShadow:
                "2px 2px 6px rgba(0, 0, 0, 0.6), 0 0 10px rgba(255, 215, 0, 0.4)",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "2px",
              position: "relative",
              display: "inline-block",
              paddingBottom: "10px",
              fontSize: "55px",
              marginTop: "80px",
            }}
          >
            Baked to Perfection
            <span
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "4px",
                background: "linear-gradient(to right, #d9a060, #a4510f)",
                borderRadius: "2px",
                opacity: 0.8,
              }}
            />
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[#E3C099] mb-8 font-medium"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontFamily: "cursive",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Where Every Bite is a Delight
          </motion.p>
        </motion.div>

        {/* Slogan */}
        <motion.div
          className="absolute bottom-8 w-full text-center z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <p
            style={{
              color: "#F5F5DC",
              fontFamily: "'Dancing Script', cursive",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
              marginTop: "150px",
              fontSize: "35px",
            }}
          >
            “Flavours of Tradition, Baked with Passion”
          </p>
          <p
            style={{
              color: "#EAD6C2",
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: "600",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
              fontSize: "25px",
            }}
          >
            From Our Oven to Your Heart.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
