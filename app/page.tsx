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

export default function Home() {
  return (
    <main className={styles.main}><NavBar/><HeroSection/><SocialLinks/><AboutSection/><SkillSection/><WorkSection/><ContactSection/><Footer/></main>
  )
}
