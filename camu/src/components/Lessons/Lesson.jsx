import styles from './Lesson.module.css';
import {useState} from "react";
import LessonTitle from "./Lesson/LessonTitle/LessonTitle.jsx";
import LessonTagsList from "./Lesson/LessonTagsList/LessonTagsList.jsx";
import LessonPreview from "./Lesson/LessonPreview/LessonPreview.jsx";

/**
 * The component for each lesson
 * @param lesson the lesson object
 */
export default function Lesson({lesson}) {

    const {title, tags} = lesson;
    const [hoveredIn, setHoveredIn] = useState(false)

    /**
     * A function to handle setting the hoveredIn state
     * @param hovered A boolean to determine whether a component is hovered in or not.
     */
    function handleHover(hovered) {
        setHoveredIn(hovered)
    }

    return (
        <div className={styles.container}>
            <section className={hoveredIn ? styles.imageContainerHoveredIn : styles.imageContainer}>
                <LessonPreview lesson={lesson} onHover={handleHover} hoveredIn={hoveredIn} />
            </section>
            <section className={styles.lessonInfoContainer}>
                <LessonTitle title={title} onHover={handleHover} hoveredIn={hoveredIn}/>
                <LessonTagsList tags={tags}/>
            </section>
        </div>
    )
}