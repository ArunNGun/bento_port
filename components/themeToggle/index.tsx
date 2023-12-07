"use Client"
//@ts-nocheck
import styles from './themetoggle.module.css';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ThemeToggle = () => {
  const [dark, setDark] = useState<boolean>(true)
  const buttonControls = useAnimation();

  const buttonVariants = {
    normal: {border: '2px solid var(--border-color)' },
    glow: { border: '2px solid var(--accent-color)' },
  };

  useEffect(() => {
    buttonControls.start('glow');
    const timeoutId = setTimeout(() => {
      buttonControls.start('normal');
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [buttonControls]);


  // useEffect(() => {
  //   const savedTheme = window.localStorage.getItem("theme");
  //   savedTheme && setDark(savedTheme === 'dark');
  // }, []);

  useEffect(() => {
    const theme = dark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem("theme", theme);
  }, [dark])
  

  return (<motion.div
    variants={buttonVariants}
    initial={{border: '2px solid transparent'}}
    animate={buttonControls}
    transition={{duration:2, ease:'easeIn', delay: 0.9}}
    // initial={{ border: '2px solid transparent' }}
    // animate={{ border: '2px solid var(--border-color)' }}
    // 
    onClick={() => setDark(!dark)} className={styles.toggleContainer}>
    <input id="toggle" className={styles.toggle} checked={!dark} type="checkbox" />
    </motion.div>
  );
};

export default ThemeToggle;