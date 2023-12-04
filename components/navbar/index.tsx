"use client"
//@ts-ignore

import React from 'react'
import styles from './navbar.module.css'
import Logo from '@/app/Logo';
import DownloadIcon from './DownloadIcon';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter()
  
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
        <li className={styles.navItems} onClick={() => router.push("/#home")}>home.</li>
        <li className={styles.navItems} onClick={() => router.push("/#about")}>about.</li>
        <li className={styles.navItems} onClick={() => router.push("/#works")}>works.</li>
        <li className={styles.navItems} onClick={() => router.push("/#contact")}>contact.</li>
        <a className={styles.navItems} download href="/Arun_Kumar.pdf">
          resume
          <DownloadIcon />
        </a>
      </ul>
    </motion.div>
  );
}

export default NavBar;