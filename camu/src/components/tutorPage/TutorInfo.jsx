import styles from "./TutorInfo.module.css";

/**
 * The component of tutor information
 * images are to be updated from Figma
 * @param tutor the tutor object
 */
export default function TutorInfo({tutor, onCloseTutorInfo}) {
    return (
       <div className={styles.container}>
           <img
               src="src/assets/general/plus.svg"
               alt="close"
               onClick={onCloseTutorInfo}
           />
           <section className={styles.imagesContainer}>
               <div className={styles.largeImg}>Placeholder</div>
               <div className={styles.smallImgContainer}>
                   <div className={styles.smallImg}></div>
                   <div className={styles.smallImg}></div>
                   <div className={styles.smallImg}></div>
               </div>
           </section>
           <section className={styles.infoContainer}>
               <h1>{tutor.name}</h1>
           </section>
       </div>
    )
}