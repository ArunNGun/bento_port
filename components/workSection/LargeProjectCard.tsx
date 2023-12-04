
import React from 'react'
import styles from './work.module.css'
import Image from 'next/image';
import LinkArrow from './LinkArrow';
import { motion } from 'framer-motion';
const LargeProjectCard = ({title,imageSrc,quickintro,intro, projectLink}:any) => {
 
  return ( 
  <motion.div
  // motion
  initial={{ opacity: 0.1, y: 50 }}
  whileInView={{ opacity: 1, y:0 }}
  viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6 }}
      
        // onMouseEnter={handleHover}
        // onMouseLeave={handleHoverExit}
    
 
  //motion
  className={styles.largeProjectMain}>
    <div className={styles.largeProjectContent}>
      <div className={styles.largeProjectCardTitleContainer}>
        <h4 className={styles.largeProjectCardTitle}>
          {title}
        </h4>
        <div className={styles.largeProjectSubTitle}>
          {quickintro}
        </div>
      </div>
      <div className={styles.largeProjectCardIntro}>
        <h6 className={styles.largeProjectCardIntroText}>
          {intro}
        </h6>
        <a href={projectLink} target='_blank' className={styles.largeProjectCardLink}>
          <LinkArrow/>
        </a>
      </div>
      
    </div>
    <motion.div className={styles.largeProjectImage}>
      <Image
       src={imageSrc} 
       alt="projectImage"
       fill
      style={{objectFit:"cover"}}
       />
    </motion.div>
  </motion.div> 
  );
}
 
export default LargeProjectCard;