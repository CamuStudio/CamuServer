import styles from "./LessonPreview.module.css";
import {motion} from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

/**
 * A component for the preview of the lesson
 * @param lesson The lesson object
 * @param onHover A function to handle the hover event
 * @param hoveredIn A Boolean to determine whether the component is hovered in or not
 */
export default function LessonPreview({ lesson, onHover, hoveredIn }) {

    const {previewImgSrc, title, length} = lesson;

    return (
        <div className={styles.container}>
            <img
                className={styles.previewImage}
                src={previewImgSrc}
                alt={title}
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
            />
            <section className={styles.lessonLengthContainer}>
                <p>{length}</p>
            </section>
            <motion.img
                className={styles.playIcon}
                src='src/assets/Lessons/lessonsGallery/play_arrow.svg'
                alt='play'
                animate={hoveredIn ? 'visible' : 'hidden'}
                variants={variants}
                transition={{duration: 0.3}}
                initial="hidden"
            />
        </div>
    )
}