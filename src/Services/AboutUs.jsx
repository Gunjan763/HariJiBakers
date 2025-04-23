import React from 'react';
import './AboutUs.css'; // Enhanced styles

const reelsData = [
  {
    id: 1,
    thumbnailUrl: 'https://www.instagram.com/reel/DDWxP-zT7Cs/',
    description: 'Watch us make our signature flaky croissants!',
    instagramUrl: 'https://www.instagram.com/harijibakers/',
  },
  {
    id: 2,
    thumbnailUrl: '/path/to/reel-thumbnail-cake.jpg',
    description: 'A peek into our cake decorating process!',
    instagramUrl: 'https://www.instagram.com/reel/your_reel_id_2/',
  },
  {
    id: 3,
    thumbnailUrl: '/path/to/reel-thumbnail-bread.jpg',
    description: 'Early morning bread baking - the best aroma!',
    instagramUrl: 'https://www.instagram.com/reel/your_reel_id_3/',
  },
];

function AboutUs() {
  const instagramProfileUrl = "https://www.instagram.com/harijibakers/";

  return (
    <div className="about-us-page">
      <div className="hero-banner">
        <img src="https://www.vegmadrid.es/wp-content/uploads/GreenFace1.jpg" alt="Hari Ji Bakers Delicious Spread" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Baked with Passion, Served with Love</h1>
          <p className="hero-subtitle">Discover the Story of Hari Ji Bakers</p>
        </div>
      </div>

      <div className="about-us-content-wrapper">
        {/* Welcome Section */}
        <section className="about-section welcome-section text-center">
          <h2 className="section-title">Welcome to Hari Ji Bakers!</h2>
          <p className="welcome-text">
            Step into a world where the comforting aroma of freshly baked bread meets the sweet delight of handcrafted cookies. We're more than just a bakery; we're a part of your daily moments of joy.
          </p>
          <img src="https://png.pngtree.com/thumb_back/fw800/background/20241130/pngtree-warm-golden-bakery-aesthetic-with-assorted-pastries-image_16711409.jpg" alt="Freshly Baked Breads" className="about-image" />
        </section>

        {/* Our Story */}
        <section className="about-section story-section">
          <div className="section-icon">
            <i className="fas fa-book-open"></i>
          </div>
          <h3 className="subsection-title">Our Story: Kneaded with Love</h3>
          <p>
            Hari Ji Bakers wasn't just built; it was lovingly kneaded into existence from cherished family recipes and a deep-seated passion for the art of traditional baking. Our journey began with a simple dream: to share authentic, high-quality baked goods that warm the heart and bring smiles to our community.
          </p>
          <p>
            From the crack of dawn, firing up the ovens, to the final dusting of sugar, every loaf, pastry, and cake is infused with dedication and care. We believe baking connects us, creating delicious memories one bite at a time.
          </p>
          <img src="https://eatability.com.au/wp-content/uploads/2022/10/Cakes-Black-Star-Pastry.jpg" alt="Handcrafted Pastries" className="about-image" />
        </section>

        {/* Our Philosophy */}
        <section className="about-section philosophy-section">
          <div className="section-icon">
            <i className="fas fa-heart"></i>
          </div>
          <h3 className="subsection-title">Our Philosophy</h3>
          <ul className="philosophy-list">
            <li>
              <i className="fas fa-check-circle list-icon"></i>
              <div>
                <strong>Freshness First:</strong> Baked fresh daily, bright and early, because you deserve the best.
              </div>
            </li>
            <li>
              <i className="fas fa-leaf list-icon"></i>
              <div>
                <strong>Quality Ingredients:</strong> Only the finest flour, real butter, fresh eggs, and premium additions make the cut.
              </div>
            </li>
            <li>
              <i className="fas fa-hand-sparkles list-icon"></i>
              <div>
                <strong>Handcrafted with Care:</strong> The touch of our skilled bakers makes all the difference you can taste.
              </div>
            </li>
            <li>
              <i className="fas fa-users list-icon"></i>
              <div>
                <strong>Community Spirit:</strong> We cherish being your friendly neighbourhood bakery, a place for connection and comfort.
              </div>
            </li>
          </ul>
          <img src="https://burncenters.com/wp-content/uploads/2022/01/NBAW22-Commercial-BLOG.jpg" alt="Our Bakery Philosophy" className="about-image" />
        </section>

        {/* Delicious Offerings */}
        <section className="about-section offerings-section">
          <div className="section-icon">
            <i className="fas fa-birthday-cake"></i>
          </div>
          <h3 className="subsection-title">Our Delicious Offerings</h3>
          <p>Indulge in our wide array of freshly baked goods:</p>
          <ul className="offerings-list">

         
            <li><i className="fas fa-stroopwafel"></i> Cakes & Cupcakes</li>
            <li><i className="fas fa-seedling"></i> Cookies & Biscuits</li>
            <li><i className="fas fa-pepper-hot"></i> Savoury Snacks & Puffs</li>
            <li><i className="fas fa-star"></i> Custom Orders & Specials</li>
          </ul>
          <img src="https://i.iheart.com/v3/re/new_assets/622679f6f1396be576c31b0b?ops=contain(1480,0)" alt="Our Delicious Offerings" className="about-image" />
        </section>

         

          
      </div>
    </div>
  );
}

export default AboutUs;
