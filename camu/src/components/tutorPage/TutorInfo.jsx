import styles from "./TutorInfo.module.css";
import NameCard from "./NameCard.jsx";

export default function TutorInfo({tutor}) {
    return (
       <div className={styles.container}>
           <img src="src/assets/general/plus.svg" alt="close" />
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