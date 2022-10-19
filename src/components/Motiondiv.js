import React from 'react'
import { AnimatePresence, motion } from "framer-motion";

// https://github.com/Darth-Knoppix/react-router-page-transitions/blob/master/src/App.js

const pageVariants = {
    initial: {
      opacity: 1,
      y: "100vh",
      scale: 1
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 1,
      y: "-100vh",
      scale: 1
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.2
  };
  
  const pageStyle = {
    // position: "absolute"
  };

export default function Motiondiv({children}) {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
        {children}
    </motion.div>
  )
}
