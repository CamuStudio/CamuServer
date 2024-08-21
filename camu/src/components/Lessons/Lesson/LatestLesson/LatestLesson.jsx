import styles from './LatestLesson.module.css'
import {topLatestLesson} from "../../../../utils/dummyData.js";
import {motion} from "framer-motion";
import {useState} from "react";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

/**
 * A component that shows the latest lesson
 * @constructor
 */
export default function LatestLesson() {

    const [hoveredIn, setHoveredIn] = useState(false)

    return (
        <div className={styles.latestLessonContainer}>
            <div className={hoveredIn ? styles.videoPreviewHoveredIn : styles.videoPreview}
                 style={{
                     backgroundImage: hoveredIn ?
                         `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url(${topLatestLesson.previewImgSrc})` :
                         `url(${topLatestLesson.previewImgSrc})`,
                     transition: 'all 0.3s ease-out'
                 }}
                 onMouseEnter={() => setHoveredIn(true)}
                 onMouseLeave={() => setHoveredIn(false)}
            >
                <section className={styles.lessonLengthContainer}>
                    <p>{topLatestLesson.length}</p>
                </section>
                <div className={styles.playIconContainer}>
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
            </div>
            <div className={styles.intro}>
                <div className={styles.description}>
                    <h3>{topLatestLesson.title}</h3>
                </div>
                <div className={styles.tagsContainer}>
                    {topLatestLesson.tags.map((tag, index) => (
                        <div key={index} className={styles.tag}>{tag}</div>
                    ))}
                </div>
                <div className={styles.date}>
                    <p>{topLatestLesson.date}</p>
                </div>
            </div>
        </div>
    )
}
