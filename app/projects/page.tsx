"use client"
import React, { useEffect, useState } from 'react'
import styles from '../page.module.css'
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import WorkSection from '@/components/workSection';
import FloatingNav from '@/components/navbar/FloatingNav';

const Projects = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(window.scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return ( 
    <main className={styles.main}>
      {isScrolling && <FloatingNav isScrolling={isScrolling} />}
       <NavBar />
    <WorkSection instance="projects" />
    <Footer/>
    </main>
    );
}
 
export default Projects;