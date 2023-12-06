import React from 'react'
import styles from './about.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Location from './Location';

const AboutSection = () => {
  return (
    <motion.div
    id='about'
    // motion
    initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y:0 }}
 viewport={{ once: true, amount: 0.1 }}
   transition={{ duration: 0.6 }}
   
   //motion
   className={styles.aboutSection}>
      <motion.div
      // motion
      initial={{ opacity: 0.1, x: -100 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      //motion
      className={styles.aboutLeft}>
        <div className={styles.cardContent}>
          <div className={styles.cardIcon}>
            <Location/>
          </div>
          <h2 className={styles.cardText}>
            Based in <br />
            Noida,<br />
            India <br />
            ‍<span className={styles.secColor}>
              GMT+5:30
            </span>
          </h2>
        </div>
      </motion.div>
      <motion.div
      // motion
      initial={{ opacity: 0.1, x: 100 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    //motion
      className={styles.aboutRight}>
        <h3 className={styles.myIntro}>
          As a software engineer,<br />
           I excel in building cutting-edge solutions. I believe in the power of shared principles,

          <span className={styles.secColor}>
            {`  clear communication, and a deep understanding of user needs to create exceptional software.`}
          </span>
        </h3>
      </motion.div>
    </motion.div>
  );
}

export default AboutSection;