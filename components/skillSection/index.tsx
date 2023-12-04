import React from 'react'
import styles from './skill.module.css'
import { motion } from 'framer-motion';
const SkillSection = () => {
  const skills = [
    'React.',
    'Redux.',
    'Zustand.',
    'TypeScript.',
    'Unleash.',
    'NoSQL.',
    'JavaScript.',
    'C.',
    'MongoDB.',
    'GraphQL.',
    'Node.',
    'Express.',
    'NextJs.',
    'webpack5.',
    'Github actions.',
    'GCP.',
    'Openshift 4.',
    'CI/CD.',
    'React Testing Library.',
    'Jest.',
    'Enzyme.',
    'Unit Testing.',
    'OOP.',
    'Unreal Engine 4.',
    'Game Development.',
    'Microservices.',
    'Micro-frontend.',
    'Frontend.',
    'Backend.',
    'Full-Stack.',
    'MERN.',
    'Storybook.',
    'Adobe analytics.',
    'English.',
    'Hindi.'

  ];
  return (
    <motion.div
    // motion
    initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y:0 }}
 viewport={{ once: true, amount: 0.5 }}
   transition={{ duration: 0.6 }}

 //motion
    // initial="hidden"
    //   whileInView="visible"
    //   viewport={{ once: true }}
    //   variants={{
    //     visible: { opacity: 1, y: 0 },
    //     hidden: { opacity: 0, y: 50 }
    //   }}
    className={styles.main}>
      <h1 className={styles.skillHeading1}>
        Skills
      </h1>
      <h1 className={styles.skillHeading2}>
        Skills
      </h1>
      <ul className={styles.skillContainer}>
        {skills.map((skill,
        index) => (
          <li key={index} className={styles.skillCard}>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SkillSection;