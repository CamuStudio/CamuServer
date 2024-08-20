import styles from './Lesson.module.css';
import {useState} from "react";
import {motion} from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function Lesson({lesson}) {

    const {previewImgSrc, title, tags, length} = lesson;
    const [hoveredIn, setHoveredIn] = useState(false)

    return (
        <div className={styles.container}>
            <section
                className={hoveredIn ? styles.imageContainerHoveredIn : styles.imageContainer}
                onMouseEnter={() => setHoveredIn(true)}
                onMouseLeave={() => setHoveredIn(false)}
            >
                <img className={styles.previewImage} src={previewImgSrc} alt={title}/>
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
            </section>
            <section className={styles.moduleContainer}>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>{title}</p>
                    <img className={hoveredIn ? styles.forwardIconHoveredIn : styles.forwardIcon}
                         src='src/assets/general/arrow_forward_black.svg'
                         alt='enter'
                         onMouseEnter={() => setHoveredIn(true)}
                         onMouseLeave={() => setHoveredIn(false)}
                    />
                </div>
                <div className={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                        <div key={index} className={styles.tag}>Render</div>
                    ))}
                </div>
            </section>
        </div>
    )
}