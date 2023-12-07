"use client"
import React from 'react'
import styles from '../page.module.css'
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import WorkSection from '@/components/workSection';
const Projects = () => {
  return ( 
    <main className={styles.main}>
    <NavBar />
    <WorkSection instance="projects" />
    <Footer/>
    </main>
    );
}
 
export default Projects;