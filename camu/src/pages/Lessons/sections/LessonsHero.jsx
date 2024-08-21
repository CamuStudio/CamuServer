import styles from './LessonsHero.module.css';
import SearchBar from "../../../components/Lessons/Lesson/SearchBar/SearchBar.jsx";
import {forwardRef} from "react";

export default forwardRef(function LessonsHero(props, ref) {
    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.contentsContainer}>
                <section className={styles.textContainer}>
                    <h1 className={styles.title}>Camu Lessons</h1>
                    <h5 className={styles.subtitle}>Join SuperHi 50,000+ learners worldwide and gain technical
                        skills through our practical courses.</h5>
                </section>
                <section className={styles.rectangle}>
                </section>
            </div>
            <div className={styles.searchBarContainer}>
                <SearchBar />
            </div>
        </div>
    )
})