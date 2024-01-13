"use client"
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css'
import { useRouter } from 'next/navigation';
import Logo from '@/app/Logo';
import DownloadIcon from './DownloadIcon';
import ThemeToggle from '../themeToggle';

const FloatingNav = ({isScrolling}:any) => {
  const router = useRouter()
  // console.log(isScrolling)
  const NavAnimations = {
    initial: {
      y: -50,
      // x: "-50%",
      opacity: 0,
    },
    animate: {
      y: 0,
      // x: "-50%",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
    },
  };
  return (
    <motion.div
      // motion
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      //motion
      className={styles.floatingMain}>
      <motion.div className={styles.logo}>
        <Link href={'/'}>
        <Logo />
        </Link>
        </motion.div>
      <AnimatePresence>
      <motion.ul 
      className={styles.floatingnavItemContainer}>
        <motion.li
        initial={{opacity: 0, y:-10}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeIn'}}
        className={styles.floatingnavItems}
        onClick={() => router.push("/#home")}
        >home.</motion.li>
        <motion.li
        initial={{opacity: 0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeIn', delay:0.3}}
        className={styles.floatingnavItems} 
        onClick={() => router.push("/#about")}

        >about.</motion.li>
        <motion.li 
        id="work_li"
        initial={{opacity: 0, y:-10}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeIn', delay: 0.5}}
        className={styles.floatingnavItems}>
             <Link className={styles.floatingworkLink} href={'/projects'}>
          works.
            </Link>
        </motion.li>
        <motion.li
        initial={{opacity: 0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeIn',  delay: 0.7}}
        className={styles.floatingnavItems}
        onClick={() => router.push("/#contact")}
        >contact.
        </motion.li>
        <motion.li>
        <ThemeToggle />
        </motion.li>

        <a className={styles.floatingnavItems} download
         href="/Arun_kumar.pdf"
         >  resume
          <DownloadIcon />
        </a>
      </motion.ul>
      </AnimatePresence>
    </motion.div>
  );
}
 
export default FloatingNav;

