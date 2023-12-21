"use client"
//@ts-ignore

import React from 'react'
import styles from './navbar.module.css'
import Logo from '@/app/Logo';
import DownloadIcon from './DownloadIcon';
import { AnimatePresence, motion, stagger } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ThemeToggle from '../themeToggle';
import Link from 'next/link';

const NavBar = () => {
  const router = useRouter()

  return (
    <motion.div
      // motion
      initial={{ opacity: 0.1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      //motion
      className={styles.main}>
      <motion.div className={styles.logo}>
        <Link href={'/'}>
        <Logo />
        </Link>
        </motion.div>
      <AnimatePresence>
      <motion.ul 
      className={styles.navItemContainer}>
        <motion.li
        initial={{opacity: 0, y:-10}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeIn'}}
        className={styles.navItems} 
        onClick={() => router.push("/#home")
        }>home.</motion.li>
        <motion.li
        initial={{opacity: 0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeIn', delay:0.3}}
        className={styles.navItems} 
        onClick={() => router.push("/#about")}
        >about.</motion.li>
        <motion.li 
        initial={{opacity: 0, y:-10}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeIn', delay: 0.5}}
        className={styles.navItems}>
             <Link className={styles.workLink} href={'/projects'}>
          works.
            </Link>
        </motion.li>
        <motion.li
        initial={{opacity: 0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeIn',  delay: 0.7}}
        className={styles.navItems} onClick={() => router.push("/#contact")}>contact.
        </motion.li>
        <ThemeToggle />
        <a className={styles.navItems} 
        target="_blank"
        rel="noopener noreferrer"
        download 
        // @ts-nocheck
        // @ts-ignore
        locale={false}
        href={'public/Arun_Kumar.pdf'}>
          resume
          <DownloadIcon />
        </a>
      </motion.ul>
      </AnimatePresence>
    </motion.div>
  );
}

export default NavBar;