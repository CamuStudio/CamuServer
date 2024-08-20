import styles from './LessonsGallery.module.css'
import Lesson from "../../../components/Lessons/Lesson.jsx";
import {latestLessons, topLatestLesson} from "../../../utils/dummyData.js";

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
                            <h3>{topLatestLesson.title}</h3>
                        </div>
                        <div className={styles.tagsContainer}>
                            {topLatestLesson.tags.map((tag, index) => (
                                <div key={index} className={styles.tag}>Render</div>
                            ))}
                        </div>
                        <div className={styles.date}>
                            <p>{topLatestLesson.date}</p>
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
