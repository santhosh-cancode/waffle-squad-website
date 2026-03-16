import React, { useRef } from "react";

const swiggyLink = "https://www.swiggy.com/menu/984090?source=sharing";
const zomatoLink = "https://zomato.onelink.me/xqzv/jkwt0g87";

const menu = [
  {
    category: "Classic Waffle",
    items: ["Lovely Coffee", "Peanut Choco"]
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
            <div className="menu-card" key={i} style={{ minWidth: '280px' }}>
              <h3>{item}</h3>
              <div className="order-buttons">
                <a href={swiggyLink} target="_blank" rel="noreferrer" className="order-btn-link">
                  <button className="order-btn swiggy">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                      alt="Swiggy"
                      width="20"
                    />
                    <span>Order</span>
                  </button>
                </a>
                <a href={zomatoLink} target="_blank" rel="noreferrer" className="order-btn-link">
                  <button className="order-btn zomato">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
                      alt="Zomato"
                      width="20"
                    />
                    <span>Order</span>
                  </button>
                </a>
              </div>
            </div>
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
