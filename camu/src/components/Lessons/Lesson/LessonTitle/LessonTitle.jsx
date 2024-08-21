import styles from "./LessonTitle.module.css";

/**
 * A component for the title of the lesson
 * @param title The title of the lesson
 * @param onHover A function to handle the hover event
 * @param hoveredIn A Boolean to determine whether the component is hovered in or not
 */
export default function LessonTitle({ title, onHover, hoveredIn }) {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <img className={hoveredIn ? styles.forwardIconHoveredIn : styles.forwardIcon}
                 src='../../../../assets/general/arrow_forward_black.svg'
                 alt='enter'
                 onMouseEnter={() => onHover(true)}
                 onMouseLeave={() => onHover(false)}
            />
        </div>
    )
}