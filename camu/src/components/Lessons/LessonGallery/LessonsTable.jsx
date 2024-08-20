import styles from "../../../pages/Lessons/sections/LessonsGallery.module.css";
import Lesson from "../Lesson.jsx";

export default function LessonsTable({lessons}) {
    return (
        <div className={styles.container}>
            {lessons.map((lesson, index) => (
                <div key={index} className={styles.lessonContainer}>
                    <Lesson lesson={lesson}/>
                </div>
            ))}
        </div>
    )
}