import React from 'react';
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.8 
        } 
    }
};

const iconVariants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

function Specialties() {
    const items = [
        {
            title: "Birthday Waffles",
            desc: "Custom-made festive waffles with premium chocolate decorations. Pre-booking via call is required for personalization.",
            icon: "🎂"
        },
        {
            title: "Savory Momos",
            desc: "Handcrafted steamed momos with fresh fillings and signature spicy chutney. Live Kitchen freshness in every bite.",
            icon: "🥟"
        },
        {
            title: "Brownies & Lava",
            desc: "Signature molten lava cakes and artisanal brownies baked fresh daily. 100% Maida-free and decadently rich.",
            icon: "🍪"
        },
        {
            title: "No Maida Promise",
            desc: "The only squad bringing a 100% Maida-free menu to Thanjavur & Chennai. Healthy alternatives, perfect crunch.",
            icon: "🌿"
        },
        {
            title: "Franchise Available",
            desc: "Join the Squad! We are opening franchise opportunities for passionate entrepreneurs across Tamil Nadu. Partner with the No-Maida pioneers.",
            icon: "🤝"
        },
        {
            title: "Premium Quality",
            desc: "Crafted with the finest imported cocoa powder and 100% pure whole wheat. No artificial powders, just pure quality in every bite.",
            icon: "🍫"
        }
    ];

    return (
        <section id="specialties">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring" }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <span className="section-tag" style={{ paddingLeft: '0', textAlign: 'center' }}>The Crafts</span>
                    <h2 className="section-title">Beyond the Golden <span>Crunch.</span></h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.7 }}
                        transition={{ delay: 0.5 }}
                        style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}
                    >
                        We take pride in our artisanal approach, ensuring every bite is a masterpiece of flavor and health.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="specialties-grid"
                >
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.05,
                                rotateY: 5,
                                rotateX: 5,
                                boxShadow: "0 20px 40px rgba(255, 215, 0, 0.15)"
                            }}
                            className="glass-card"
                            style={{ 
                                textAlign: 'center',
                                perspective: '1000px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 215, 0, 0.05)'
                            }}
                        >
                            <motion.div 
                                variants={iconVariants}
                                animate="animate"
                                style={{ fontSize: '3.5rem', marginBottom: '25px', display: 'inline-block' }}
                            >
                                {item.icon}
                            </motion.div>
                            
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '15px', fontWeight: '800' }}>
                                {item.title}
                            </h3>
                            
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                                {item.desc}
                            </p>
                            
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "60px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                style={{ height: '3px', background: 'var(--primary)', margin: '30px auto 0', borderRadius: '10px' }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Specialties;
