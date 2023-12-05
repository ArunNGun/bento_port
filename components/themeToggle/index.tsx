"use Client"
//@ts-nocheck
import Image from 'next/image';
import styles from './themetoggle.module.css';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState<boolean>(true)
  // useEffect(() => {
  //   const savedTheme = window.localStorage.getItem("theme");
  //   savedTheme && setDark(savedTheme === 'dark');
  // }, []);

  useEffect(() => {
    const theme = dark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem("theme", theme);
  }, [dark])
  

  return (
    <div onClick={() => setDark(!dark)} className={styles.toggleContainer}>
      {/* <div className={styles.circle}> */}
        {/* <p onClick={() => setDark(!dark)}>{dark ? 'light' : 'dark'}</p> */}
        <input id="toggle" className={styles.toggle} checked={!dark} type="checkbox" />
      {/* </div> */}
    </div>
  );
};

export default ThemeToggle;