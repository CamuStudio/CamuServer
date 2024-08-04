import styles from './TutorPage.module.css'
import SectionTitle from "../components/SectionTitle.jsx";
import TutorGrid from "../components/tutorPage/TutorGrid.jsx";

const tutors = [
    {
        imgSrc: '../src/assets/tutors/tutor1.png',
        subject: 'Generative design',
        avatarSrc: '../src/assets/tutors/tina.png',
        name: 'Tina.W',
        qualification: 'Graduate from Upenn'
    },
    {
        imgSrc: '../src/assets/tutors/tutor2.png',
        subject: 'Generative design',
        avatarSrc: '../src/assets/tutors/andy.png',
        name: 'Andy C.',
        qualification: 'Work at HJS'
    },
    {
        imgSrc: '../src/assets/tutors/tutor3.png',
        subject: 'Generative design',
        avatarSrc: '../src/assets/tutors/steve.png',
        name: 'Steve J.',
        qualification: 'Work at Apple'
    },
    {
        imgSrc: '../src/assets/tutors/tutor4.png',
        subject: 'Generative design',
        avatarSrc: '../src/assets/tutors/lawrence.png',
        name: 'Laurence L.',
        qualification: 'Graduate from USC'
    },
]

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
                {tutors.map((tutor) => (
                    <TutorGrid key={tutor.imgSrc} tutor={tutor} />
                ))}
            </section>
        </div>
    )
}