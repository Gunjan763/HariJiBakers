import React, { useEffect, useRef } from 'react';
import './about.css'; // Make sure this exists

function useScrollAnimation() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
          }
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach(el => el && observer.observe(el));
    return () => elementsRef.current.forEach(el => el && observer.unobserve(el));
  }, []);

  return elementsRef;
}

function About() {
  const sectionsRef = useScrollAnimation();

  const setRef = (el, index) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="about-us-page">
      {/* Hero */}
      <div className="hero-banner">
        <img src="https://www.vegmadrid.es/wp-content/uploads/GreenFace1.jpg" alt="Hari Ji Bakers" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Baked with Passion, Served with Love</h1>
          <p className="hero-subtitle">Discover the Story of Hari Ji Bakers</p>
        </div>
      </div>

      <div className="about-us-content-wrapper">
        {/* Welcome Section */}
        <section ref={el => setRef(el, 0)} className="about-section welcome-section animate-on-scroll">
          <h2 className="section-title">Welcome to Hari Ji Bakers!</h2>
          <p className="welcome-text">
            Step into a world where the comforting aroma of freshly baked bread meets the sweet delight of handcrafted cookies...
          </p>
          <img src="https://png.pngtree.com/thumb_back/fw800/background/20241130/pngtree-warm-golden-bakery-aesthetic-with-assorted-pastries-image_16711409.jpg" alt="Freshly Baked Breads" className="about-image" />
        </section>

        {/* Our Story */}
        <section ref={el => setRef(el, 1)} className="about-section story-section animate-on-scroll layout-alternate">
          <div className="text-content">
            <h3 className="subsection-title">Our Story: Kneaded with Love</h3>
            <p>Hari Ji Bakers wasn't just built; it was lovingly kneaded into existence from cherished family recipes...</p>
            <p>From the crack of dawn, firing up the ovens, to the final dusting of sugar...</p>
          </div>
          <img src="https://eatability.com.au/wp-content/uploads/2022/10/Cakes-Black-Star-Pastry.jpg" alt="Pastries" className="about-image" />
        </section>

        {/* Our Philosophy */}
        <section ref={el => setRef(el, 2)} className="about-section philosophy-section animate-on-scroll">
          <h3 className="subsection-title">Our Philosophy</h3>
          <ul className="philosophy-list">
            <li><i className="fas fa-check-circle list-icon" /><strong>Freshness First:</strong> Baked fresh daily...</li>
            <li><i className="fas fa-leaf list-icon" /><strong>Quality Ingredients:</strong> Only the finest flour...</li>
            <li><i className="fas fa-hand-sparkles list-icon" /><strong>Handcrafted with Care:</strong> The touch of our skilled bakers...</li>
            <li><i className="fas fa-users list-icon" /><strong>Community Spirit:</strong> Your friendly neighbourhood bakery...</li>
          </ul>
          <img src="https://burncenters.com/wp-content/uploads/2022/01/NBAW22-Commercial-BLOG.jpg" alt="Philosophy" className="about-image" />
        </section>

        {/* Offerings */}
        <section ref={el => setRef(el, 3)} className="about-section offerings-section animate-on-scroll layout-alternate">
          <div className="text-content">
            <h3 className="subsection-title">Our Delicious Offerings</h3>
            <p>Indulge in our wide array of freshly baked goods:</p>
            <ul className="offerings-list">
              <li><i className="fas fa-stroopwafel" /> Cakes & Cupcakes</li>
              <li><i className="fas fa-seedling" /> Cookies & Biscuits</li>
              <li><i className="fas fa-pepper-hot" /> Savoury Snacks & Puffs</li>
              <li><i className="fas fa-star" /> Custom Orders & Specials</li>
            </ul>
          </div>
          <img src="https://i.iheart.com/v3/re/new_assets/622679f6f1396be576c31b0b?ops=contain(1480,0)" alt="Offerings" className="about-image" />
        </section>
      </div>
    </div>
  );
}

export default About;
