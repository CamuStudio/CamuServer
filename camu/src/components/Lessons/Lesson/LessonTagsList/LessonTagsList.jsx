import styles from "./LessonTagsList.module.css";

/**
 * A component for the tags of the lesson
 * @param tags An array of the lesson's tags
 */
export default function LessonTagsList({ tags }) {
    return (
        <div className={styles.container}>
            {tags.map((tag, index) => (
                <div key={index} className={styles.tag}>Render</div>
            ))}
        </div>
    )
}