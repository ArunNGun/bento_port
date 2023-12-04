import React from 'react'
import styles from './work.module.css'
import Image from 'next/image';
import LinkArrow from './LinkArrow';
import { motion } from 'framer-motion';
const SmallProjectCard = ({card,title,imageSrc,quickintro,intro, projectLink}:any) => {
  return ( 
  <motion.div
  // motion
  initial={{ opacity: 0.1, x: card === 1? 50: -50 }}
  whileInView={{ opacity: 1, x:0 }}
  viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6 }}
 
  //motion
  className={styles.largeProjectMain}>
    <div className={styles.smallProjectContent}>
      <div className={styles.smallProjectCardTitleContainer}>
        <h4 className={styles.smallProjectCardTitle}>
          {title}
        </h4>
        <div className={styles.largeProjectSubTitle}>
          {quickintro}
        </div>
      </div>
      <div className={styles.smallProjectCardIntro}>
        <a href={projectLink} target='_blank' className={styles.smallProjectCardLink}>
          <LinkArrow/>
        </a>
      </div>
      
    </div>
    <div className={styles.smallProjectImage}>
      <Image
       src={imageSrc} 
       alt="projectImage"
       fill
      style={{objectFit:"cover"}}
       />
    </div>
  </motion.div> 
  );
}
 
export default SmallProjectCard;