"use client"
import NavBar from '@/components/navbar'
import styles from './page.module.css'
import HeroSection from '@/components/heroSection'
import SocialLinks from '@/components/socialLinks'
import AboutSection from '@/components/aboutSection'
import SkillSection from '@/components/skillSection'
import WorkSection from '@/components/workSection'
import Footer from '@/components/footer'
import ContactSection from '@/components/contactSection'
import { motion,stagger, useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'


export default function Home() {

  return (
    <motion.main 
    
    className={styles.main}><NavBar /><HeroSection/><SocialLinks/><AboutSection/><SkillSection/><WorkSection/><ContactSection/><Footer/></motion.main>
  )
}
