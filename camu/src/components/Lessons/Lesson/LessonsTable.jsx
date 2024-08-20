import styles from './LessonsTable.module.css'
import Lesson from "../../../components/Lessons/Lesson.jsx";

/**
 * A component that displays all retrieved lessons in a table
 * @param lessons All the lessons retrieved
 * @constructor
 */
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
