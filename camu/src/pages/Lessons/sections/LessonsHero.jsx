import styles from './LessonsHero.module.css';
import SearchBar from "../../../components/Lessons/SearchBar.jsx";

export default function LessonsHero() {
    return (
        <div className={styles.container}>
            <div className={styles.contentsContainer}>
                <section className={styles.textContainer}>
                    <h1 className={styles.title}>Camu Lessons</h1>
                    <h5 className={styles.subtitle}>Join SuperHi 50,000+ learners worldwide and gain technical
                        skills through our practical courses.</h5>
                </section>
            </div>
            <div className={styles.searchBarContainer}>
                <SearchBar />
            </div>
        </div>
    )
}