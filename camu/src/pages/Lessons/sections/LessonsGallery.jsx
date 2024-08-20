import styles from './LessonsGallery.module.css'
import Lesson from "../../../components/Lessons/Lesson.jsx";

const latestLessons = [
    {
        previewImgSrc: 'src/assets/Lessons/lessonsGallery/latest_lesson_1.png',
        title: 'What services do you offer?',
        tags: ['Render', 'Render', 'Render']
    },
    {
        previewImgSrc: 'src/assets/Lessons/lessonsGallery/latest_lesson_2.png',
        title: 'What services do you offer?',
        tags: ['Render', 'Render', 'Render']
    },
    {
        previewImgSrc: 'src/assets/Lessons/lessonsGallery/latest_lesson_3.png',
        title: 'What services do you offer?',
        tags: ['Render', 'Render', 'Render']
    }
]

export default function LessonsGallery() {
    return (
        <div className={styles.container}>
            <section className={styles.latestVideosContainer}>
                <h4>Latest</h4>
                <div className={styles.latestVideoContainer}>
                    <div className={styles.videoPreview}>
                        <img src='src/assets/Lessons/lessonsGallery/large_preview.png' alt='preview' />
                    </div>
                    <div className={styles.intro}>
                        <div className={styles.description}>
                            <h3>Gain technical skills through learning stuff</h3>
                        </div>
                        <div className={styles.tagsContainer}>
                            <div className={styles.tag}>Render</div>
                            <div className={styles.tag}>Render</div>
                            <div className={styles.tag}>Render</div>
                        </div>
                        <div className={styles.date}>
                            <p>June 7, 2024</p>
                        </div>
                    </div>
                </div>
                <div className={styles.lessonsRow}>
                    {latestLessons.map((lesson, index) => (
                        <div key={index} className={styles.lessonContainer}>
                            <Lesson lesson={lesson}/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
