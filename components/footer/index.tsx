import React from 'react'
import styles from './footer.module.css'
import HeartIcon from './HeartIcon';
import { motion } from 'framer-motion';

const Footer = () => {
  return ( 
    <motion.div
    // motion
    initial={{ opacity: 0.1, y: 20 }}
 whileInView={{ opacity: 1, y:0 }}
 viewport={{ once: true}}

   transition={{ duration: 1 }}
   
   //motion
    className={styles.main}>
    <div className={styles.fotterTitle}>
    arun kumar.
    </div>
    <div className={styles.fotterYear}>
    {`made with `}<HeartIcon/>{` & nextJs © ${new Date().getUTCFullYear()}`}
    </div>
  </motion.div> );
}
 
export default Footer;