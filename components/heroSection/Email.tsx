import { motion } from 'framer-motion';
import React from 'react'
import styles from './hero.module.css'
const Email = () => {
  return (
    <motion.svg
    className={styles.emailSvg}
      xmlns="http://www.w3.org/2000/svg"
      width="112" height="112" viewBox="0 0 48 48" id="b">
      {/* <defs>
      <style>.e{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;} */}
      {/* </style> */}
    {/* </defs> */}
    <path id="c" className="e" d="m24.9697,39.04v-3.7188c2.9742-2.9742,5.4671-3.9181,9.2651-3.9181h0c3.798,0,6.2909.9439,9.2651,3.9181v3.7188h-18.5303Z" /><circle className="e" cx="34.2349" cy="22.8928" r="4.9752" /><path id="d" className="e" d="m24.9697,39.04H4.5v-6.2886c5.0295-5.0295,9.2451-6.6257,15.6678-6.6257h0c5.7656,0,9.7526,1.2863,14.1465,5.188" /><circle className="e" cx="20.1678" cy="15.8085" r="6.8485" />
      </motion.svg>
      
  );
}

export default Email;