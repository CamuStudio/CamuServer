import styles from './Lessons.module.css';
import LessonsHero from "./sections/Lessons.jsx";

export default function Lessons() {
    return (
        <div className={styles.wrapper}>
            <LessonsHero />
        </div>
    )
}