import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const thanjavurSwiggy = "https://www.swiggy.com/menu/984090?source=sharing";
const thanjavurZomato = "https://zomato.onelink.me/xqzv/jkwt0g87";
const chennaiSwiggy = "https://www.swiggy.com/menu/1125865?source=sharing";
const chennaiZomato = "https://zomato.onelink.me/xqzv/l1393sx4";

const menu = [
  {
    category: "Classic Waffle",
    items: ["Lovely Coffee", "Peanut Choco", "Bubble Gum Waffle"]
  },
  {
    category: "Regular Waffle",
    items: [
      "Dark Choco",
      "Milk Choco",
      "Snow White Choco",
      "Caramel Dream Delight",
      "Cream & Cookies",
      "Crunchy Butter Scotch"
    ]
  },
  {
    category: "Supreme",
    items: ["Kitkat Break", "Oreo Crunch"]
  },
  {
    category: "Supreme Delight",
    items: [
      "Nutella Overload",
      "Creamy Nutella",
      "Double Choco",
      "Triple Choco",
      "Lotus Biscoff"
    ]
  },
  {
    category: "Pancakes",
    items: [
      "Dark Choco",
      "Milk Choco",
      "Snow White Choco",
      "Kitkat Break",
      "Oreo Crunch",
      "Nutella Overload",
      "Creamy Nutella",
      "Double Choco",
      "Triple Choco"
    ]
  },
  {
    category: "Veg Momo",
    items: [
      "Cheese Corn Momo",
      "Paneer Momo",
      "Paneer Tikka Momo",
      "Veg Momo",
      "Veg Schezwan Momo",
      "Mushroom Momo"
    ]
  },
  {
    category: "Chicken Momo",
    items: [
      "Chicken Cheese Momo",
      "Chicken Momo",
      "Chicken Peri Peri Momo",
      "Chicken Tikka Momo",
      "Chicken Barbeque Momo"
    ]
  }
];

const MenuCard = ({ item }) => {
  const [step, setStep] = useState('initial'); // 'initial', 'location', 'platform'
  const [location, setLocation] = useState(null); // 'thanjavur', 'chennai'

  const handleOrderClick = () => setStep('location');
  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setStep('platform');
  };
  const handleBack = () => {
    if (step === 'platform') setStep('location');
    else setStep('initial');
  };

  const getLinks = () => {
    if (location === 'thanjavur') {
      return { swiggy: thanjavurSwiggy, zomato: thanjavurZomato };
    }
    return { swiggy: chennaiSwiggy, zomato: chennaiZomato };
  };

  const links = getLinks();

  return (
    <div className="menu-card" style={{ minWidth: '280px', position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        {step === 'initial' && (
          <motion.div
            key="initial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ textAlign: 'center' }}
          >
            <h3 style={{ marginBottom: '20px' }}>{item}</h3>
            <button className="btn-primary" onClick={handleOrderClick} style={{ width: '100%', fontSize: '0.8rem' }}>
              ORDER NOW
            </button>
          </motion.div>
        )}

        {step === 'location' && (
          <motion.div
            key="location"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ fontSize: '0.7rem', color: 'var(--primary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Select Location</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button 
                className="btn-outline" 
                onClick={() => handleLocationSelect('thanjavur')} 
                style={{ 
                  fontSize: '0.75rem', 
                  padding: '12px', 
                  transition: '0.3s',
                  display: 'block',
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 215, 0, 0.15)';
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.color = '#fff';
                }}
              >Thanjavur</button>
              <button 
                className="btn-outline" 
                onClick={() => handleLocationSelect('chennai')} 
                style={{ 
                  fontSize: '0.75rem', 
                  padding: '12px', 
                  transition: '0.3s',
                  display: 'block',
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 120, 255, 0.15)';
                  e.target.style.borderColor = '#0078ff';
                  e.target.style.color = '#0078ff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.color = '#fff';
                }}
              >Chennai</button>
              <button onClick={handleBack} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.65rem', cursor: 'pointer', marginTop: '5px' }}>← Back</button>
            </div>
          </motion.div>
        )}

        {step === 'platform' && (
          <motion.div
            key="platform"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ fontSize: '0.7rem', color: 'var(--primary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Order from {location}</p>
            <div className="order-buttons" style={{ marginTop: '0' }}>
              <a href={links.swiggy} target="_blank" rel="noreferrer" className="order-btn-link">
                <button className="order-btn swiggy" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>SWIGGY</span>
                </button>
              </a>
              <a href={links.zomato} target="_blank" rel="noreferrer" className="order-btn-link">
                <button className="order-btn zomato" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>ZOMATO</span>
                </button>
              </a>
              <button onClick={handleBack} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.65rem', cursor: 'pointer', width: '100%', marginTop: '5px' }}>← Change Location</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuSection = ({ section }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 400;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="menu-section-wrapper">
      <h2 className="menu-title">{section.category}</h2>
      <div className="menu-section-container">
        <button className="side-scroll-btn left" onClick={() => scroll('left')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="scroll-wrapper" ref={scrollRef}>
          {section.items.map((item, i) => (
            <MenuCard key={i} item={item} />
          ))}
        </div>

        <button className="side-scroll-btn right" onClick={() => scroll('right')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

function List() {
  return (
    <div className="list-section">
      <div className="container">
        {menu.map((section, index) => (
          <MenuSection key={index} section={section} />
        ))}
      </div>
    </div>
  );
}

export default List;
