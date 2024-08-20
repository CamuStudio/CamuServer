import styles from './Lesson.module.css';
import {useState} from "react";

export default function Lesson({lesson}) {

    const {previewImgSrc, title, tags, length} = lesson;

    return (
        <div className={styles.container}>
            <section className={styles.imageContainer}>
                <img className={styles.previewImage} src={previewImgSrc} alt={title}/>
                <section className={styles.lessonLengthContainer}>
                    <p>{length}</p>
                </section>
                <img className={styles.playIcon} src='src/assets/Lessons/lessonsGallery/play_arrow.svg' alt='play'/>
            </section>
            <section className={styles.moduleContainer}>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>{title}</p>
                    <img src='src/assets/general/arrow_forward_black.svg' alt='enter'/>
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