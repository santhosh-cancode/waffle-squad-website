import React from "react";
import { motion } from "framer-motion";

function Reviews() {
  const reviews = [
    {
      name: "Santhosh Kumar",
      rating: 5,
      date: "2 months ago",
      text: "Best waffles in Thanjavur! The no-maida recipe is a game changer. Highly recommend the Belgian Dark Chocolate.",
      avatar: "S"
    },
    {
      name: "Arun Vijay",
      rating: 5,
      date: "1 month ago",
      text: "Love the live kitchen concept. Very hygienic and transparent. Chennai branch is just as good. Must try their momos!",
      avatar: "A"
    },
    {
      name: "Priya Dharshini",
      rating: 5,
      date: "3 weeks ago",
      text: "Ordered a birthday special waffle and it was decorated beautifully! Great to have a healthy dessert option.",
      avatar: "P"
    }
  ];

  return (
    <section id="reviews">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag" style={{ paddingLeft: '0' }}>Social Proof</span>
          <h2 className="section-title">What Our Squad <span>Says</span></h2>
          <div style={{ color: 'var(--primary)', fontSize: '1.2rem', marginTop: '10px' }}>
            ★★★★★
          </div>
        </div>

        <div className="specialties-grid">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card review-card"
            >
              <div className="review-header">
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.1rem'
                }}>
                  {rev.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{rev.name}</h4>
                  <div style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>
                    {"★".repeat(rev.rating)}
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '25px', lineHeight: '1.6' }}>
                "{rev.text}"
              </p>

              <div className="review-footer">
                <img
                  src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                  alt="Google"
                  style={{ width: "20px", height: "20px" }}
                />
                <span>Verified Google Review</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://share.google/4s63ll1o0ZAiDEPvp"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            View 500+ Google Reviews
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;