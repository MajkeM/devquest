import "./../Dashboard/dashboard.css";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function NameDashboard({ name = "NAME" }) {
  const seq = [
    `Welcome back!\n${name} 👋`, 5500,
    "Keep grinding on your DevQuest ⚔️", 1500,
    `Welcome back!\n${name} 👋`, 5500,
    "Level up those skills and earn titles 🚀", 1500,
    `Welcome back!\n${name} 👋`, 5500,
    "Compete with others in leaderboard 🏆", 1500,
    `Welcome back!\n${name} 👋`, 5500,
    "Be a dev that AI cannot replace 🤖", 1500,
    `Welcome back!\n${name} 👋`, 5500,
    "Your coding journey continues here 💻", 1500,
    `Welcome back!\n${name} 👋`, 5500,
    "Debugging is just part of the adventure 🐞", 1500,
    `Welcome back!\n${name} 👋`, 5500,
    "Every line of code gets you closer to mastery 🎯", 1500,
    `Welcome back!\n${name} 👋`, 5500,
    "Celebrate small wins on your DevQuest 🎉", 1500,
    `Welcome back!\n${name} 👋`, 5500,
    "Your next challenge awaits! Get ready to code. ⚔️", 1500,
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