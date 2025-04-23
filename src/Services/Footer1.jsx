import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer1() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-gradient-to-r from-[#d0f4e8] via-[#f1f9f1] to-[#e6ffe6] text-[#4f6d56] pt-16 pb-8 shadow-md"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Container>
        <Row className="mb-8">
          <Col md={4} className="mb-6">
            <h4 className="text-3xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Hari Ji Bakers
            </h4>
            <p className="mb-4">
              Where passion meets pastries. Visit us for custom cakes, delightful desserts, and cozy café vibes.
            </p>
            <p className="mt-4 text-sm">
              📍 Suratgardhia Bazaar, Street Old Committee Wali, Sirsa, Haryana
            </p>
          </Col>

          <Col md={4} className="mb-6">
            <h4 className="text-3xl font-semibold mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quick Links
            </h4>
            <ul className="list-unstyled space-y-2 text-center">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
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

          <Col md={4} className="mb-6 text-center">
            <h4 className="text-3xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Follow Us
            </h4>
            <div className="flex justify-center gap-8 mt-4">
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
          &copy; {new Date().getFullYear()} Hari Ji Bakers. All rights reserved.
        </p>
      </Container>
    </motion.footer>
  );
}
