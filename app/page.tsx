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
import FloatingNav from '@/components/navbar/FloatingNav'
import { useEffect, useState } from 'react'
import Awards from '@/components/awards'

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>
      {isScrolling ? <FloatingNav isScrolling={isScrolling} /> : <NavBar />}
      <HeroSection />
      <SocialLinks />
      <AboutSection />
      <SkillSection />
      <Awards/>
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
