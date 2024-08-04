import styles from './TutorPage.module.css'
import SectionTitle from "../components/SectionTitle.jsx";

/**
 * The hero component containing text, contact button, and a hero image
 */
export default function TutorPage() {
    return (
        <div className={styles.container}>
            <SectionTitle title='Meet Our Tutors'
                          subtitle='All teachers have architectural backgrounds and advanced studies in multiple fields'
            />
            <section className={styles.tutorGridContainer}>
                <section className={styles.tutorGrid}>
                    <section className={styles.imageContainer}>
                        <img className={styles.image} src='/public/tutor1.png' alt='tutor1'/>
                        <img className={styles.unselectedIcon} src='/public/unselected-icon.svg' alt='unselected-icon' />
                    </section>
                    <section className={styles.description}>
                    <h6 className={styles.subject}>Generative design</h6>
                        <div className={styles.nameCard}>
                            <img src='/public/tina.png' alt='tina'/>
                            <div className={styles.textContainer}>
                                <p className={styles.name}>Tina W.</p>
                                <p className={styles.qualification}>Graduate from Upenn</p>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}