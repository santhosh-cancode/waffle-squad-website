import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/name.png"
              alt="Waffle Squad"
              className="footer-logo-img"
              style={{ height: '60px', marginBottom: '20px', display: 'block' }}
              onError={(e) => e.target.style.display = 'none'}
            />
            <p className="footer-text">
              Serving Thanjavur and Chennai with premium,
              <b> maida-free waffles.</b> Experience the art of
              transparent dessert making today. Every bite is crafted
              with love and the finest ingredients.
            </p>

            <div className="footer-socials">
              {[
                { icon: <FaInstagram />, link: " https://www.instagram.com/waffle_squad_thanjavur01?igsh=MWp5M2E1dGptejdoZg==&utm_source=ig_contact_invite" },
                { icon: <FaFacebookF />, link: "https://facebook.com" },
                { icon: <FaWhatsapp />, link: "https://wa.me/917904919397" }
              ].map((s, idx) => (
                <a key={idx} href={s.link} target="_blank" rel="noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>

            <div
              className="footer-delivery"
              style={{ display: "flex", gap: "20px", marginTop: "30px", alignItems: "center" }}
            >
              {/* ZOMATO */}
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
                  alt="Order on Zomato"
                  style={{
                    height: "40px",
                    cursor: "pointer",
                    transition: "transform 0.3s"
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </a>

              {/* SWIGGY */}
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                  alt="Order on Swiggy"
                  style={{
                    height: "40px",
                    cursor: "pointer",
                    transition: "transform 0.3s"
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </a>
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Direct Contact</h3>

            <div className="contact-item" style={{ marginBottom: '35px' }}>
              <span style={{ fontSize: '1.5rem', opacity: 0.8 }}>📧</span>
              <div>
                <p className="contact-label" style={{ marginBottom: '5px' }}>Email Address</p>
                <a href="mailto:wafflesquadthanjavur@gmail.com" style={{ fontSize: '0.95rem' }}>
                  wafflesquadthanjavur@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item" style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '1.5rem', opacity: 0.8 }}>📞</span>
              <div>
                <p className="contact-label" style={{ marginBottom: '3px' }}>Thanjavur (Pre-booking)</p>
                <a href="tel:+917904919397" style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--primary)' }}>
                  +91 7904919397
                </a>
              </div>
            </div>



            <div className="contact-item">
              <span style={{ fontSize: '1.5rem', opacity: 0.8 }}>📞</span>
              <div>
                <p className="contact-label" style={{ marginBottom: '3px' }}>Chennai (Pre-booking)</p>
                <a href="tel:+918838051336" style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--primary)' }}>
                  +91 8838051336
                </a>
              </div>
            </div>

            <div style={{
              marginTop: '40px',
              padding: '24px',
              background: 'linear-gradient(145deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              <p style={{ 
                color: 'var(--primary)', 
                fontSize: '0.9rem', 
                fontWeight: '800', 
                letterSpacing: '2px', 
                marginBottom: '8px',
                textTransform: 'uppercase'
              }}>
                Franchise Available 🚀
              </p>
              <p style={{ 
                fontSize: '0.85rem', 
                opacity: 0.9, 
                marginBottom: '18px', 
                lineHeight: '1.5',
                color: '#eee'
              }}>
                Be a part of our <b>No-Maida Revolution</b> across TN!
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:+917904919397" style={{ 
                  background: 'var(--primary)', 
                  color: '#000', 
                  fontSize: '0.8rem', 
                  textDecoration: 'none', 
                  fontWeight: '700',
                  padding: '10px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  display: 'block',
                  transition: '0.3s'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  📞 Call +91 7904919397
                </a>
                <a href="mailto:wafflesquadthanjavur@gmail.com" style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  color: '#fff', 
                  fontSize: '0.8rem', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  padding: '10px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'block',
                  transition: '0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
                >
                  ✉️ Email for Details
                </a>
              </div>
            </div>


          </motion.div>

          {/* BRANCHES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Our Branches</h3>

            {/* THANJAVUR */}
            <div className="branch-card" style={{
              background: 'var(--bg-glass)',
              borderRadius: '16px',
              padding: '20px',
              borderLeft: '4px solid var(--primary)'
            }}>
              <h4 style={{ fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '8px' }}>THANJAVUR</h4>
              <p style={{ margin: '0 0 4px', opacity: 0.9, fontSize: '0.85rem' }}>91, N Main St, Thanjavur, 613009</p>
              <p style={{ margin: '0 0 10px', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>📞 +91 7904919397</p>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                <a href="https://share.google/4s63ll1o0ZAiDEPvp" target="_blank" rel="noreferrer" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', color: 'var(--primary)', fontWeight: '700', opacity: 0.8 }}>
                  View Maps →
                </a>
                <a 
                  href="https://www.google.com/search?q=Waffle+squad+Reviews#lrd=0x3baab9a7e32d9821:0xa15735fa0b539f1b,3,,,," 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    fontSize: '0.65rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    textDecoration: 'none', 
                    color: 'var(--primary)', 
                    background: 'rgba(255,215,0,0.05)', 
                    padding: '6px 14px', 
                    borderRadius: '50px', 
                    border: '1px solid rgba(255,215,0,0.4)',
                    fontWeight: '800',
                    transition: '0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--primary)';
                    e.target.style.color = '#000';
                    e.target.style.boxShadow = '0 0 15px rgba(255,215,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,215,0,0.05)';
                    e.target.style.color = 'var(--primary)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  KINDLY RATE US ⭐
                </a>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <a href="https://zomato.onelink.me/xqzv/jkwt0g87" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" alt="Zomato" style={{ height: "30px", cursor: "pointer", transition: "0.3s" }} onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                </a>
                <a href="https://www.swiggy.com/menu/984090?source=sharing" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Swiggy" style={{ height: "30px", cursor: "pointer", transition: "0.3s" }} onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                </a>
              </div>
            </div>

            {/* CHENNAI */}
            <div className="branch-card" style={{
              background: 'var(--bg-glass)',
              borderRadius: '16px',
              padding: '20px',
              borderLeft: '4px solid var(--primary)',
              marginTop: '20px'
            }}>
              <h4 style={{ fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '8px' }}>CHENNAI (ANNA NAGAR)</h4>
              <p style={{ margin: '0 0 4px', opacity: 0.9, fontSize: '0.85rem' }}>11th Main Rd, Anna Nagar, 600040</p>
              <p style={{ margin: '0 0 10px', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>📞 +91 8838051336</p>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                <a href="https://maps.app.goo.gl/2zaXsF8pgidhBsJn7" target="_blank" rel="noreferrer" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', color: 'var(--primary)', fontWeight: '700', opacity: 0.8 }}>
                  View Maps →
                </a>
                <a 
                  href="https://www.google.com/search?q=WAFFLE+SQUAD+Reviews#lrd=0x3a52650032c4e211:0x9dda117b0743bde9,3,,,," 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    fontSize: '0.65rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    textDecoration: 'none', 
                    color: 'var(--primary)', 
                    background: 'rgba(255,215,0,0.05)', 
                    padding: '6px 14px', 
                    borderRadius: '50px', 
                    border: '1px solid rgba(255,215,0,0.4)',
                    fontWeight: '800',
                    transition: '0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--primary)';
                    e.target.style.color = '#000';
                    e.target.style.boxShadow = '0 0 15px rgba(255,215,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,215,0,0.05)';
                    e.target.style.color = 'var(--primary)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  KINDLY RATE US ⭐
                </a>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <a href="https://zomato.onelink.me/xqzv/l1393sx4" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" alt="Zomato" style={{ height: "30px", cursor: "pointer", transition: "0.3s" }} onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                </a>
                <a href="https://www.swiggy.com/menu/1125865?source=sharing" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Swiggy" style={{ height: "30px", cursor: "pointer", transition: "0.3s" }} onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>



        <div className="footer-bottom">
          <p style={{ opacity: 0.6 }}>© {new Date().getFullYear()} Waffle Squad. </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;