import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Cakes",
    description:
"Celebrate your special moments with our custom cakes, made just the way you want! From birthdays to weddings, we create cakes that match your theme and taste perfectly. Choose your design, flavor, and size—we’ll bring it to life with love and care.Sweeten your celebrations with a cake as unique as you are!",
     image: "https://img.freepik.com/premium-photo/gourmet-chocolate-cake-with-chocolate-truffle-decoration-rustic-plate_999512-12.jpg",
    direction: "top",
  },
  {
    title: "Dine-In Café Experience",
    description:
      "Sit back, relax, and enjoy delicious food in a cozy atmosphere. Whether you're catching up with friends, celebrating special moments, or just treating yourself, our dine-in service is designed for your comfort and satisfaction. Great food, great vibes—served fresh every time.",
    image:
      "https://www.sincitycoffee.shop/wp-content/uploads/2020/09/AdobeStock_245396449-scaled.jpeg",
    direction: "right",
  },
  {
    title: "Dessert Platters & Gift Boxes",
    description:
      "Celebrate every occasion with our irresistible dessert platters and thoughtfully curated gift boxes. From indulgent treats to beautifully packaged delights, we have something special for everyone. Perfect for birthdays, weddings, festive celebrations, or just to show someone you care—because every moment deserves sweetness.",
    image:
      "https://images.harryanddavid.com/is/image/HarryandDavid/asiHighRez/1630_24448_01e-signature-bakery-basket.jpg",
    direction: "left",
  },
  {
    title: "Seasonal Specials & Pop-ups",
    description:
      "Savor the flavors of the season with our exclusive specials, crafted to celebrate the freshest ingredients and festive vibes. Keep an eye out for our pop-ups, bringing unique experiences and limited-time treats to your favorite places. Every season, there's something new to enjoy—don't miss out!",
    image: "https://i.pinimg.com/originals/ee/e0/8c/eee08cd669e71c202d66b2c52ba839a8.jpg",
    direction: "right",
  },
];

const features = [
  {
    title: "Locally Sourced Ingredients",
    description:
      "We support local farmers and use only the freshest, high-quality ingredients in all our creations.",
    icon: "🍓",
  },
  {
    title: "Made with Love",
    description:
      "Every treat is crafted with passion and care, just like homemade goodness from grandma’s kitchen.",
    icon: "❤️",
  },
  {
    title: "Unique Flavors",
    description:
      "From classics to creative twists, our flavor combinations keep your taste buds curious and delighted.",
    icon: "🎂",
  },
  {
    title: "Warm Atmosphere",
    description:
      "Our café offers a cozy, friendly space to enjoy dessert, sip coffee, and make sweet memories.",
    icon: "☕",
  },
];

const Dinein = () => {
  return (
    <div className="flex flex-col gap-20 p-8  bg-gradient-to-b from-[#F3FBEF] via-[#E7F9E5] to-[#FDFDF7]  min-h-screen font-sans">
     
     <motion.h1
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-12 font-extrabold bg-gradient-to-r from-pink-600 via-rose-400 to-pink-500 text-transparent bg-clip-text drop-shadow-xl tracking-wider"
  style={{
    fontSize: "56px",
    fontFamily: "'Dancing Script', cursive", // You can change this to Playfair Display, Pacifico, etc.
    textShadow: "2px 2px 4px rgba(255, 192, 203, 0.7)",
    lineHeight: "1.2",
  }}
>
  Our Services
</motion.h1>



      {/* Service Cards */}
      {services.map((service, index) => {
        const isImageFirst = index % 2 === 0;

        // Directional animation setup
        let initialAnimation = {};
        if (service.direction === "top") {
          initialAnimation = { opacity: 0, y: -60, scale: 0.9 };
        } else if (service.direction === "left") {
          initialAnimation = { opacity: 0, x: -80, scale: 0.9 };
        } else {
          initialAnimation = { opacity: 0, x: 80, scale: 0.9 };
        }

        return (
          <motion.div
            key={index}
            initial={initialAnimation}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            {isImageFirst && (
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 h-98 object-cover rounded-2xl shadow-lg transition-transform duration-300"
              />
              
            )}

            <div className="w-full md:w-1/2 text-center md:text-left px-2">
              <h2 className="text-2xl font-bold text-pink-800 mb-3 tracking-wide">
                {service.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {service.description}
              </p>
              
            </div>

            {!isImageFirst && (
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 h-98 object-cover rounded-2xl shadow-lg transition-transform duration-400"
              />
            )}
          </motion.div>
        );
      })}

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mt-10"
      >
        <h2 className="text-3xl font-extrabold text-pink-700 mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-md"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-pink-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
    </div>
  );
};

export default Dinein;
