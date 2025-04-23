import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Chocolate Fudge Cake",
    description: "Rich, moist, and indulgent—chocolate fudge cake is the ultimate treat for chocolate lovers, with every bite melting into pure decadence.",
    image:
      "https://www.wiltshirecountryfayre.co.uk/wp-content/uploads/2024/09/Chocolate-fudge-cake-1.png",
  },
  {
    title: "Veg Wrap",
    description: "Indulge in the goodness of our veg wraps—crafted with fresh, vibrant vegetables, wholesome ingredients, and a burst of flavors to satisfy your cravings and nourish your day.",
    image:
      "https://hurrythefoodup.com/wp-content/uploads/2022/11/20-Vegetarian-Wraps-Super-Tasty-title-Image-524x524.jpg",
  },
  {
    title: "Blue Lagoon Mocktail",
    description: "Escape into the refreshing vibes of our Blue Lagoon mocktail—vibrant, citrusy, and perfect for every occasion. Sip the serenity in every dazzling blue swirl!",
    image:
      "https://www.connollycove.com/wp-content/uploads/2023/08/Blue-Lagoon-Mocktail-14-scaled.jpg",
  },
  {
    title: "Peri Peri Fries",
    description: " Crispy, golden perfection with a fiery kick of bold spices. The ultimate snack to tantalize your taste buds",
    image:
      "https://www.rppizzeria.com/web/image/product.template/206/image_1024?unique=142cabe",
  },
  {
    title: "Truffle Pastry",
    description: "Indulge in the rich decadence of our Truffle Pastry—layers of moist chocolate sponge paired with velvety truffle ganache, crafted to perfection for every chocolate lover's delight!",
    image:
      "https://media.bakingo.com/ferrero-rocher-chocolate-truffle-past0160choc-A.jpg",
  },
  {
    title: "Tandoori Urban Pizza",
    description: "Savor the fusion of bold tandoori flavors and cheesy goodness with our Tandoori Pizza—a unique culinary adventure in every bite",
    image:
      "https://allmyrecipe.com/wp-content/uploads/2020/10/homemade-veg-pizza.jpg",
  },
];

export default function CollectionPage() {
  const insta = () => {
    window.open(
      "https://www.zomato.com/sirsa/hari-ji-bakers-sirsa-locality-sirsa/order",
      "_blank"
    );
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#F3FBEF] via-[#E7F9E5] to-[#FDFDF7] min-h-screen font-[Poppins]">
      {/* Intro */}
      <section className="bg-gradient-to-r from-[#E9F7EF] to-[#FFF2EC] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-5xl font-bold text-[#6B4226] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quality You Can Taste
            </h2>
            <div className="w-20 h-1 bg-[#A47148] mb-6 rounded"></div>
            <p className="text-lg text-[#5C4B3B] leading-relaxed mb-6">
              From the very first bite, you'll feel the warmth and care baked
              into every treat. We don’t just bake — we craft experiences.
            </p>
            <p className="text-base text-[#7A5E4B] leading-relaxed">
              With handpicked ingredients, heritage recipes, and a dash of
              love, each product reflects our promise of unmatched quality.
            </p>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://i.pinimg.com/originals/49/62/e9/4962e91d1d28082ee048055e90843bae.jpg"
              alt="Fresh Pastry Display"
              className="w-full h-[350px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-r from-[#ECF8F3] to-[#FFF3EC] py-24 px-6 md:px-20 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Fresh Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-start bg-white/70 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <motion.img
              src="https://cdn-icons-png.flaticon.com/128/10546/10546017.png"
              alt="Fresh Ingredients"
              className="w-28 h-28 md:w-32 md:h-32 object-contain mr-6"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-left">
              <h3
                className="text-3xl font-semibold text-[#5C3D2E] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Fresh Ingredients
              </h3>
              <p className="text-[#4A372E] text-lg leading-relaxed max-w-lg">
                We choose only the best — rich butter, organic flour, seasonal
                fruits. Every bite begins with real, premium ingredients you can
                taste.
              </p>
            </div>
          </motion.div>

          {/* Handmade Goodness */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-start bg-white/70 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <motion.img
              src="https://cdn-icons-png.flaticon.com/128/7522/7522567.png"
              alt="Handmade Goodness"
              className="w-28 h-28 md:w-32 md:h-32 object-contain mr-6"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-left">
              <h3
                className="text-3xl font-semibold text-[#5C3D2E] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Handmade Goodness
              </h3>
              <p className="text-[#4A372E] text-lg leading-relaxed max-w-lg">
                No machines, just experienced hands. Every cake, puff, and
                pastry is baked with care — from scratch, fresh every day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collection Section */}
      
        <h1 className="text-5xl font-bold text-center text-[#6B4226] mb-12" style={{fontFamily:"cursive",fontSize:"40px",fontWeight:"bold",textShadow:"4px 4px white"}}>
          Our Signature Delights
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-4 w-full bg-[#F3FBEF] py-16 mt-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl relative pt-20 pb-10 px-6 border border-[#f2e7de] hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {/* Floating Image */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="text-center mt-6">
                <h2
                  className="text-2xl font-semibold text-[#5A3921] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h2>
                <p className="text-sm text-[#6B4C36] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
    

      <div className="text-center mt-10 pb-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#A47148] hover:bg-[#8B5E3C] text-white text-lg font-semibold py-3 px-8 rounded-2xl shadow-lg transition-all duration-300"
          onClick={insta}
        >
          Order Now
        </motion.button>
      </div>

    </div>
  );
}
