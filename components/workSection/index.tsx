"use client"
import React, { useEffect, useState } from 'react'
import styles from './work.module.css'
import LargeProjectCard from './LargeProjectCard';
import SmallProjectCard from './SmallProjectCard';
import LinkArrow from './LinkArrow';
import Skeleton from './Skeleton';
import { motion } from 'framer-motion';
import Link from 'next/link';

const WorkSection = ({instance="home"}) => {
  const [projectData, setprojectData] = useState<any>(null)  
  const [isLoading, setIsLoading] = useState<any>(false)  
  useEffect(()=>{
    const fetchProject= async()=>{
      setIsLoading(true)
    const res = await fetch('api/projects',{next: { revalidate: 36000 },method:'GET'});
    const {data} = await res.json()
    setIsLoading(false)
    setprojectData(data)
    }
    fetchProject()
  },[])
  if(isLoading || !projectData) return <Skeleton/>;
  return (
    <>
    <div
    id='works'
    className={styles.main}>
      {
        projectData?.map((project:any)=>(
          project.id<4 ?
          <LargeProjectCard key={project.id} projectLink={project.projectLink} title={project.title} imageSrc={project.imageSrc} quickintro={project.quickIntro} intro={project.intro} />
          :null
        ))
      }
          <div className={styles.smallProjectContainer}>
        <SmallProjectCard card={1} projectLink={projectData[3].projectLink} title={projectData[3].title} imageSrc={projectData[3].imageSrc} quickintro={projectData[3].quickIntro} intro={projectData[3].intro} />
        <SmallProjectCard card={2} projectLink={projectData[4].projectLink} title={projectData[4].title} imageSrc={projectData[4].imageSrc} quickintro={projectData[4].quickIntro} intro={projectData[4].intro} />
      </div>
  
        
    </div>
     <motion.div
     initial={{ width:"auto" }}
     whileInView={{ width:"100%" }}
     viewport={{ once: true, amount: 0.1 }}
       transition={{ease: "linear", duration: 1   }}
     className={styles.moreProjects}
     >
     
     {instance === "home" ? <motion.div
     // motion
  // initial={{ opacity: 0, borderColor:"var(--accent-color)" }}
  // whileInView={{ opacity: 1, borderColor:"#272727" }}
  // viewport={{ once: true, amount: 0.1 }}
  //   transition={{ duration: 0.000000000000000000001, delay: 0.3    }}
 
  //motion
     className={styles.viewMore}>
       <Link href={'/projects'} className={styles.viewMoreText}>
      <motion.div
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      viewport={{ once: true, amount: 0.1 }}
        transition={{ease: "linear", duration: 1, delay:1   }}
      >
         view more.
       </motion.div>
       <div className={styles.viewMoreLink}>
         <LinkArrow />
       </div>
       </Link>
     </motion.div>
     :
     <div
    id='works'
    className={styles.main}>
      {
      projectData?.map((project:any)=>(
        project.id>4 ?
        <LargeProjectCard key={project.id} projectLink={project.projectLink} title={project.title} imageSrc={project.imageSrc} quickintro={project.quickIntro} intro={project.intro} />
        :null
      ))
}
      </div>
}
   </motion.div>
    </>
  );
}

export default WorkSection;