import { motion, AnimatePresence } from "framer-motion";
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
    gap: "10px",
    fontWeight: "500",
    fontSize: "20px",
    padding: "8px 12px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  const iconStyle = { color: "#FFD700" };

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
            background: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.6), rgba(0, 0, 0, 0.5))",
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
            zIndex: 50,
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.vevBbJHJcVuZWfZXOHB1cAHaHa&pid=Api&P=0&h=180"
              alt="Logo"
              style={{
                height: "70px",
                width: "80px",
                borderRadius: "50%",
              }}
            />
            <h2
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "32px",
                color: "#FFD700",
                textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
                letterSpacing: "2px",
                fontWeight: "700",
              }}
            >
              Hari Ji Bakers
            </h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            <a href="/home" style={navLinkStyle}><FaHome style={iconStyle} /> HOME</a>
            <a href="/services" style={navLinkStyle}><FaConciergeBell style={iconStyle} /> SERVICES</a>
            <a href="/about" style={navLinkStyle}><FaInfoCircle style={iconStyle} /> ABOUT</a>
            <a href="/contact" style={navLinkStyle}><FaEnvelope style={iconStyle} /> CONTACT</a>
          </nav>

          {/* Hamburger */}
          <button
            className="block md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 60,
            }}
          >
            ☰
          </button>
        </header>

        {/* Mobile Nav (Animated) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed top-0 right-0 w-2/3 sm:w-1/3 h-full bg-[#0a0a23] flex flex-col items-start gap-8 p-8 z-40"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  alignSelf: "flex-end",
                  background: "transparent",
                  border: "none",
                  fontSize: "30px",
                  color: "#FFD700",
                  cursor: "pointer",
                }}
              >
                ✖
              </button>

              <a href="/home" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
                <FaHome style={iconStyle} /> HOME
              </a>
              <a href="/services" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
                <FaConciergeBell style={iconStyle} /> SERVICES
              </a>
              <a href="/about" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
                <FaInfoCircle style={iconStyle} /> ABOUT
              </a>
              <a href="/contact" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
                <FaEnvelope style={iconStyle} /> CONTACT
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center w-full px-4 mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
         
         <motion.h1
    className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide mb-4"
    style={{
      color: "#a4510f", // Your earlier brownish color
      fontFamily: "'Playfair Display', serif",
      fontSize: "50px",
   
      position: "relative", // To position the underline
      display: "inline-block", // Important for the underline
      paddingBottom: "10px", // Space for the underline
      marginTop:"-100px"
    }}
  >
    Baked to Perfection
    <motion.div
      style={{
        content: "''",
        position: "absolute",
        bottom: "-5px", // Adjusting to position just below the text
        left: "50%",
        transform: "translateX(-50%)", // Centering the line
        height: "2px", // Line thickness
        width: "40%", // Line width (percentage of the text)
        backgroundColor: "#FFD700", // Matching the color of the text
      }}
      animate={{
        width: "50%", // Gradually increase the width for effect
      }}
      transition={{
        duration: 1.5, // Animation duration
        type: "spring", // Smooth spring animation
        stiffness: 120,
        damping: 20,
      }}
    />
  </motion.h1>



          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[#E3C099] mb-8 font-medium"
            style={{
              fontFamily: "cursive",
              fontSize: "30px",
              fontWeight: "600",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
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
              marginTop: "100px",
              fontSize: "45px",
            }}
          >
            “Flavours of Tradition, Baked with Passion”
          </p>
          <p
            style={{
              color: "#EAD6C2",
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: "600",
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
