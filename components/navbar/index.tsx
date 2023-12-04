import React from 'react'
import styles from './navbar.module.css'
import Logo from '@/app/Logo';
import DownloadIcon from './DownloadIcon';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <motion.div
    // motion
    initial={{ opacity: 0.1, y: 10 }}
 whileInView={{ opacity: 1, y:0 }}
 viewport={{ once: true}}

   transition={{ duration: 0.3 }}
   
   //motion
    className={styles.main}>
      <motion.div className={styles.logo}><Logo /></motion.div>
      <ul className={styles.navItemContainer}>
        <li className={styles.navItems}>home.</li>
        <li className={styles.navItems}>about.</li>
        <li className={styles.navItems}>works.</li>
        <li className={styles.navItems}>contact.</li>
        <a className={styles.navItems} download href="/Arun_Kumar.pdf">
          resume
          <DownloadIcon />
        </a>
      </ul>
    </motion.div>
  );
}

export default NavBar;