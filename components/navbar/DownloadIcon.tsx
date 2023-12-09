import React from 'react'
import styles from './navbar.module.css'
import { motion } from 'framer-motion';
const DownloadIcon = () => {
const transitionPath1 = { duration: 2.5, ease: "easeInOut" }
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
      initial={{ x:0,pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={transitionPath1}
        className={styles.downloadIcon}
        d="M20 15V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 15M8 11L12 15M12 15L16 11M12 15V3"  
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
      </motion.path>
    </svg>
  );
}

export default DownloadIcon;