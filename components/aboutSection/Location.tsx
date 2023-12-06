import React from 'react'
import styles from './about.module.css'
import { motion } from 'framer-motion';

const Location = () => {
  return ( 
    <motion.svg width="112" height="112" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path className={styles.outerPath} d="M104.199 215.4C100.399 203.7 98.1992 191.3 98.1992 178.4C98.1992 111.3 154.699 57.4999 222.799 61.8999C280.499 65.5999 327.399 112.2 331.499 169.8C332.599 184.8 330.699 199.3 326.699 212.8C307.899 275.7 214.999 368.4 214.999 368.4C214.999 368.4 127.599 287.8 104.199 215.4Z" stroke-width="12" stroke-miterlimit="14" stroke-linecap="round" stroke-linejoin="round"/>
<motion.path className={styles.innerPath} d="M270 178.4C270 208.8 245.4 233.4 215 233.4C184.6 233.4 160 208.8 160 178.4C160 148 184.6 123.4 215 123.4C245.4 123.4 270 148 270 178.4Z" stroke="#08A88A" strokeWidth="12" strokeMiterlimit="14" strokeLinecap="round" strokeLinejoin="round"/>
</motion.svg>
   );
}
 
export default Location;