import React from 'react';
import styles from './social.module.css';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const staggerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust the stagger duration as needed
        staggerDirection: 1, // 1 for forward, -1 for backward
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={styles.main}
    >
        <motion.a
          className={styles.socialLinks}
          href='https://www.linkedin.com/in/akumar97/'
          target='_blank'
          variants={staggerVariants}
        >
          LinkedIn.
        </motion.a>
        <motion.a
          className={styles.socialLinks}
          href='https://github.com/ArunNGun'
          target='_blank'
          variants={staggerVariants}
        >
          GitHub.
        </motion.a>
        <motion.a className={styles.socialLinks}
        href='https://instagram.com/arun_irl'
        target='_blank'
        variants={staggerVariants}>
          Instagram.
        </motion.a>
        <motion.a className={styles.socialLinks} 
             href='https://twitter.com/'
             target='_blank'
        variants={staggerVariants}>
          Twitter.
        </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
