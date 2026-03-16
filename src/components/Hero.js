import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, animate } from "framer-motion";

function RatingCounter({ from, to, duration = 2 }) {

  const [count, setCount] = useState(from);

  useEffect(() => {

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        setCount(value.toFixed(1));
      }
    });

    return () => controls.stop();

  }, [from, to, duration]);

  return <span>{count}</span>;

}

function Hero() {

  const { scrollY } = useScroll();

  const yParallax = useTransform(scrollY, [0, 600], [0, -120]);
  const rotateParallax = useTransform(scrollY, [0, 600], [0, 5]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0.7]);

  return (

    <section className="hero-section">


      {/* GOLD BACKGROUND GLOW */}

      <motion.div
        className="hero-glow"
        style={{ y: yParallax }}
      />


      <div className="container hero-grid">


        {/* LEFT TEXT */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="section-tag">
            Original Crunch
          </span>


          <h1 className="hero-title">

            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Heavenly
            </motion.span>

            <br />

            <motion.span
              className="gold-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Waffles
            </motion.span>

          </h1>


          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Crafted with our secret <b>No Maida</b> recipe.
            Founded by <b>Hari</b>, we bring a transparent
            live-making dessert experience to every squad member.
          </motion.p>



          {/* GOOGLE RATING */}

          <motion.div
            className="rating-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >

            <span className="rating-number">

              <RatingCounter
                from={0}
                to={4.9}
                duration={2.5}
              />

            </span>

            <span className="stars">
              ⭐⭐⭐⭐⭐
            </span>

            <span className="rating-label">
              Google Rating
            </span>

          </motion.div>



          {/* BUTTONS */}

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >

            <motion.a
              href="#menu"
              className="btn-primary"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
            </motion.a>


            <motion.a
              href="tel:+917904919397"
              className="btn-outline"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Squad
            </motion.a>

          </motion.div>

          <motion.div
            className="hero-orders"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            style={{ 
              marginTop: '40px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '25px'
            }}
          >
            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '2px' }}>ORDER ONLINE:</span>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href="https://zomato.onelink.me/xqzv/jkwt0g87" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  padding: '8px 18px',
                  borderRadius: '100px',
                  background: 'rgba(235, 53, 56, 0.1)',
                  color: '#eb3538',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  border: '1px solid rgba(235, 53, 56, 0.2)',
                  transition: '0.3s ease'
                }}
              >ZOMATO</a>
              <a 
                href="https://www.swiggy.com/menu/984090?source=sharing" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  padding: '8px 18px',
                  borderRadius: '100px',
                  background: 'rgba(252, 128, 25, 0.1)',
                  color: '#fc8019',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  border: '1px solid rgba(252, 128, 25, 0.2)',
                  transition: '0.3s ease'
                }}
              >SWIGGY</a>
            </div>
          </motion.div>

        </motion.div>



        {/* RIGHT WAFFLE IMAGE */}

        <motion.div
          className="hero-image-wrapper"
          style={{
            y: yParallax,
            rotate: rotateParallax,
            opacity: opacityHero
          }}
        >

          <motion.img
            src="/hero_waffle.png"
            alt="Waffle"
            className="hero-image"

            animate={{
              y: [0, -25, 0],
              rotate: [0, 4, 0]
            }}

            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}

            onError={(e) =>
              e.target.src =
              "https://images.unsplash.com/photo-1562376552-0d160a2f9fa4"
            }

          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;