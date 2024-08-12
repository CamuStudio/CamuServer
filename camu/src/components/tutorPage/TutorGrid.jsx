import styles from './TutorGrid.module.css';
import NameCard from "./NameCard.jsx";

/**
 * An Extracted component for each tutors
 * @prop tutor the tutors object
 */
export default function TutorGrid({tutor, blank=false, onSelectTutor}) {

    const {imgSrc, subject, avatarSrc, name, qualification} = tutor

    return (
        <section className={styles.tutorGrid}>
            <section className={tutor === {} ? styles.imageContainer : styles['blankContainer']} onClick={onSelectTutor}>
                {blank ? (
                    <div className={styles.moreTutors}>
                        <img src='../../../public/arrow_forward.svg' alt='arrow_forward'/>
                        <span className={styles.moreTutorInfo}>View more tutors</span>
                    </div>
                ) : (
                    <>
                    <img className={styles.image} src={imgSrc} alt='tutor1'/>
                        <img className={styles.unselectedIcon}
                             src='/public/unselected-icon.svg'
                             alt='unselected-icon'/>
                    </>
                )
                }
            </section>
            <section className={styles.description}>
                {blank ?
                     null :
                    <>
                        <NameCard tutor={tutor} />
                    </>
                }
            </section>
        </section>
    )
}