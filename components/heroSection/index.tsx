import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return ( 
    <motion.div
    id='about'
    // motion
    initial={{ opacity: 0.1, y: 100 }}
 whileInView={{ opacity: 1, y:0 }}
 viewport={{ once: true}}

   transition={{ duration: 0.3 }}
   
   //motion
   className={styles.heroSection}>
      <motion.div
      // motion
      initial={{ opacity: 0.1, x: -100 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      //motion
      className={styles.heroLeft}>
        <div className={styles.myImage}>
          <Image src='/avatarr.jpg'
          alt={''} 
          width={120} 
          height={120}
          style={{
            objectFit: 'cover',
          }}
          />
        </div>
        <h1 className={styles.quickIntro}>
          Arun Kumar <br/>
          is a software engineer 
          <span className={styles.secIntro}>
          {` currently engineering at Telus.`}
          </span>
        </h1>
      </motion.div>
      <motion.div
      // motion
      initial={{ opacity: 0.1, x: 100 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    //motion
      className={styles.heroright}>
        <div className={styles.cardContent}>
          <div className={styles.cardIcon}>
          <Image
      priority
      width={112}
      height={112}
      src='/card.svg'
      alt="card icon"
    />
          </div>
          <h2 className={styles.cardText}>
          Have a project <br/>
in mind?
          </h2>
        </div>
        <a href="mailto:chaudharyarun5797@gmail.com" className={styles.emailButton}>chaudharyarun5797@gmail.com</a>
        </motion.div>
    </motion.div>
   );
}
 
export default HeroSection;