import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { name } from "./hero";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-gradient-to-r from-[#d0f4e8] via-[#f1f9f1] to-[#e6ffe6] text-[#4f6d56] pt-16 pb-8 shadow-md"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Container>
        <Row className="mb-8 text-center text-md-left">
          {/* Brand Info */}
          <Col xs={12} md={4} className="mb-10 md:mb-0">
            <h4
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {name}
            </h4>
            <p className="mb-4 text-sm md:text-base">
              Where passion meets pastries. Visit us for custom cakes,
              delightful desserts, and cozy café vibes.
            </p>
            <p className="text-sm mt-2">
              📍 Suratgharia Bazaar, Street Old Committee Wali, Sirsa, Haryana
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4} className="mb-10 md:mb-0 flex flex-col items-center md:items-start">
            <h4
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", marginLeft:"100px" }}
            >
              Quick Links
            </h4>
            <ul className="list-none flex flex-col gap-2" style={{marginLeft:"100px"}}>
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item} >
                  <motion.a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:underline text-[#6b8e23] text-lg"
                    whileHover={{ scale: 1.1, color: "#4caf50" }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Social Media */}
          <Col xs={12} md={4} className="text-center">
            <h4
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ fontFamily: "'Playfair Display', serif"  }}
            >
              Follow Us
            </h4>
            <div className="flex justify-center gap-6 mt-2">
              <motion.a
                href="https://www.facebook.com/harijibakers/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3 }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/harijibakers/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3 }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </motion.a>
            </div>
          </Col>
        </Row>

        <hr className="border-t border-[#b3d9b3]" />
        <p className="text-center text-sm mt-4 text-[#6b8e23]">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </Container>
    </motion.footer>
  );
}
