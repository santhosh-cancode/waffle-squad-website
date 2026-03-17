import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({ from, to, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-images">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="about-img-wrapper"
          >
            <img
              src="/pic1.png"
              alt="Live Kitchen"
              className="about-img1"
              onError={(e) => e.target.src = "https://images.unsplash.com/photo-1541167760496-1628856ab772"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-img-wrapper"
          >
            <img
              src="/pic2.png"
              alt="Waffle Making"
              className="about-img2"
              onError={(e) => e.target.src = "https://images.unsplash.com/photo-1573821663912-56990544c382"}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Our Story</span>
          <h2 className="section-title">
            Hariharan's Vision <span>Transparent & Pure</span>
          </h2>

          <p className="hero-text">
            Waffle Squad was founded by <b>Hariharan</b> and Co-founded by <b>Brath Kisore</b> to bring honesty to dessert making. 
            Our kitchen is fully open so customers see everything live. We believe 
            in transparency—from the ingredients we use to the way we serve.
          </p>

          <p className="hero-text" style={{ marginTop: '-20px' }}>
            We redesigned waffles with a <b>100% No-Maida recipe</b>, ensuring 
            better health without compromising on the iconic golden crunch you love.
          </p>

          <div className="about-stats" style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
            <div className="stat-card">
              <h3 className="gold-text" style={{ fontSize: '2.5rem' }}>
                <Counter from={0} to={2} />
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>BRANCHES</p>
            </div>

            <div className="stat-card">
              <h3 className="gold-text" style={{ fontSize: '2.5rem' }}>
                <Counter from={0} to={100} suffix="%" />
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>MAIDA FREE</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;