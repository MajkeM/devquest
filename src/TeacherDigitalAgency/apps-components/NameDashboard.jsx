import "../Dashboard/dashboard.css";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function NameDashboard({ name = "NAME" }) {
  const seq = [
    `Vítejte zpět!\n${name} 👋`, 5500,
    "Projděte si materiály a zkuste aktivitu dne 📚", 1500,
    `Vítejte zpět!\n${name} 👋`, 5500,
    "Malé kroky vedou k velkým výsledkům 🚀", 1500,
    `Vítejte zpět!\n${name} 👋`, 5500,
    "Sledujte svůj postup a hodnocení kurzu 📝", 1500,
    `Vítejte zpět!\n${name} 👋`, 5500,
    `Vítejte zpět!\n${name} 👋`, 5500,
    "Vzdělávání je společná cesta — bavte se při učení 📖", 1500,
    `Vítejte zpět!\n${name} 👋`, 5500,
    `Vítejte zpět!\n${name} 👋`, 5500,
    "Oslavte pokrok, i když je malý 🎉", 1500,
    `Vítejte zpět!\n${name} 👋`, 5500,
    "Připravte se na další aktivitu — vyrostete každý den 🌱", 1500,
  ];

  return (
    <div style={{ height: "29vh" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="welcome-back"
      >
        <div style={{ whiteSpace: "pre-line", lineHeight: "1.3em" }}>
          <TypeAnimation
            sequence={seq}
            speed={50}
            deletionSpeed={40}
            repeat={Infinity}
            cursor={true}
            wrapper="span"
          />
        </div>
      </motion.div>
    </div>
  );
}