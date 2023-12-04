import React from 'react'
import styles from './contact.module.css'
import { motion } from 'framer-motion';
const ContactSection = () => {
  
  return (
    <motion.div
    id='contact'
    className={styles.main}>
      <motion.div
      // motion
    initial={{ opacity: 0.1, x: -100 }}
    whileInView={{ opacity: 1, x:0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6 }}
    //motion
      className={styles.socials}>
       <div className={styles.socialTitle}>
         Reach Out Via Socials<span className={styles.submitDot}>.</span>
        </div>
        <ul className={styles.socialList}>
          <li>website:<a href='' target='_blank' className={styles.socialLinks}> a-k-ivory.vercel.app</a></li>
          <li>email: <a href='' target='_blank' className={styles.socialLinks}>thechaudharyarun@gmail.com</a></li>
          <li>github: <a href='' target='_blank' className={styles.socialLinks}>arunNgun</a></li>
          <li>linkedin: <a href='' target='_blank' className={styles.socialLinks}>akumar97</a></li>
          <li>instagram: <a href='' target='_blank' className={styles.socialLinks}>arun_irl</a></li>
          <li>telegram: <a href='' target='_blank' className={styles.socialLinks}>iamarunchaudhary</a></li>
        </ul>
      </motion.div>
      <motion.div
      // motion
    initial={{ opacity: 0.1, x: 100 }}
    whileInView={{ opacity: 1, x:0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6 }}
    //motion
       className={styles.contactForm}>
      <div className={styles.formTitle}>
        Or Fill Out This Form<span className={styles.submitDot}>.</span>
        </div>
        {/* //////////////////// */}
        <form className={styles.form}
        // onSubmit={submitForm}
        >
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">name.</label>
              <input
                type="text"
                name="name"
                id="name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">email.</label>
              <input
                type="email"
                name="email"
                id="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          {/* <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              // value={subject}
              // onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div> */}
          <div>
            <label htmlFor="message">message.</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className={styles.submitContainer}>
            {/* <img className={submitted ? styles.submitAck : styles.submitAckHidden} src="/fly-cat.png" alt="" /> */}
            <button type="submit">
              submit<span className={styles.submitDot}>.</span>
            </button>
          </div>
        </form>

        {/* ////////////// */}
        </motion.div>
    </motion.div>
  );
}

export default ContactSection;