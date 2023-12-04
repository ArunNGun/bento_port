import React from 'react'
import styles from './work.module.css'
const Skeleton = () => {
  return (
  <div className={styles.main}>
  <div className={styles.largeProjectMain}>
    <div className={styles.largeProjectContent}>
      <div className={styles.largeProjectCardTitleContainer}>
        <h4 className={styles.largeProjectCardTitle}>

        </h4>
        <div className={styles.largeProjectSubTitle}>

        </div>
      </div>
      <div className={styles.largeProjectCardIntro}>
        <h6 className={styles.largeProjectCardIntroText}>

        </h6>
      </div>

    </div>
    <div className={styles.largeProjectImageSkeleton}>
      <div className={styles.container}>
        <div className={styles.loader}>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.largeProjectMain}>
    <div className={styles.largeProjectContent}>
      <div className={styles.largeProjectCardTitleContainer}>
        <h4 className={styles.largeProjectCardTitle}>

        </h4>
        <div className={styles.largeProjectSubTitle}>

        </div>
      </div>
      <div className={styles.largeProjectCardIntro}>
        <h6 className={styles.largeProjectCardIntroText}>

        </h6>
      </div>

    </div>
    <div className={styles.largeProjectImageSkeleton}>
      <div className={styles.container}>
        <div className={styles.loader}>
        </div>
      </div>
    </div>
  </div>
  </div>

  );
}

export default Skeleton;