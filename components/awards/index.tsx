'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './awards.module.css'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg",
  "1.jpg"
]

const Awards = () => {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.6])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.7])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.3])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.8])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time: any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
      <motion.h1 style={
        {
          y:y3,
          rotateZ: -90
        }
        } className={styles.awardHeading}>
        Awards
      </motion.h1>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        {/* <Column images={[images[6], images[7], images[8]]} y={y3}/> */}
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      <div className={styles.spacer}></div>
    </div>
  )
}

const Column = ({images, y}: any) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src:any, i:any) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}
 
export default Awards;