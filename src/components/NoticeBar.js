import React from "react";
import { motion } from "framer-motion";

function NoticeBar() {

  const notices = [
    "⚠️ PRE-BOOKING AVAILABLE – CALL ONLY",
    "🌿 100% MAIDA FREE RECIPE",
    "✨ LIVE KITCHEN TRANSPARENCY",
    "🏙️ THANJAVUR LOCATION – NORTH MAIN STREET",
    "🏙️ CHENNAI LOCATION – 11th Main Rd, Anna Nagar, Block AE, Anna Nagar, Chennai"
  ];

  return (
    <div className="notice-bar">

      <motion.div
        className="notice-track"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >

        {/* duplicate for seamless loop */}
        {[...notices, ...notices].map((text, i) => (
          <span key={i} className="notice-item">
            {text}
          </span>
        ))}

      </motion.div>

    </div>
  );
}

export default NoticeBar;