import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function Menu() {
  const products = [
    {
      title: "Special No-Maida Waffle",
      sub: "SIGNATURE HEALTH CRAFT",
      img: "/waffle1.jpg",
    },
    {
      title: "Artisan Chocolate",
      sub: "DARK CHOCOLATE",
      img: "/chocochip.jpg",
    },
    {
      title: "COFFEE WAFFLE",
      sub: "PREMIUM COFFEE",
      img: "/coffee.jpg",
    },
    {
      title: "CHOCOLATE WAFFLE",
      sub: "PREMIUM CHOCOLATE",
      img: "/choco.jpg",
    },
    {
      title: "Molten Lava Cake",
      sub: "INDULGENT DESSERT",
      img: "/lava.jpg",
    },
    {
      title: "Classic Steamed Momos",
      sub: "SPICY & SAVORY",
      img: "/momos.jpg",
    },

    {
      title: "Pre-booked Brownie Box",
      sub: "CUSTOM GIFTING",
      img: "/box.jpg",
    },
    {
      title: "WAFFLE STICK",
      sub: "STICK SPECIAL",
      img: "/stick.jpg",
    },
    {
      title: "Birthday Party Waffle",
      sub: "PERSONALIZED DECOR",
      img: "/birthday.jpg",
    }
  ];

  return (
    <section id="menu">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span className="section-tag" style={{ paddingLeft: '0' }}>Collection</span>
          <h2 className="section-title">
            The <span>Squad</span> Menu
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="specialties-grid"
        >
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card"
              style={{ padding: '0', overflow: 'hidden' }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <motion.img
                  src={p.img}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600";
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'var(--primary)',
                  color: '#000',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: '700'
                }}>
                  FRESH
                </div>
              </div>

              <div style={{ padding: '25px', textAlign: 'center' }}>
                <p style={{
                  fontSize: '0.7rem',
                  letterSpacing: '2px',
                  color: 'var(--primary)',
                  marginBottom: '8px',
                  fontWeight: '700'
                }}>
                  {p.sub}
                </p>
                <h4 style={{ fontSize: '1.1rem', color: '#fff' }}>
                  {p.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Menu;