import styles from './LessonsGallery.module.css'
import Lesson from "../../../components/Lessons/Lesson.jsx";
import {latestLessons, topLatestLesson, defaultCategories, allLessons} from "../../../utils/dummyData.js";
import SearchBar from "../../../components/Lessons/SearchBar.jsx";
import LessonsTable from "../../../components/Lessons/Lesson/LessonsTable.jsx";

export default function LessonsGallery() {
    return (
        <div className={styles.container}>
            <section className={styles.latestVideosContainer}>
                <h4>Latest</h4>
                <div className={styles.latestVideoContainer}>
                    <div className={styles.videoPreview}>
                        <img src='src/assets/Lessons/lessonsGallery/large_preview.png' alt='preview' />
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
                <div className={styles.lessonsRow}>
                    {latestLessons.map((lesson, index) => (
                        <div key={index} className={styles.lessonContainer}>
                            <Lesson lesson={lesson}/>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.allLessonsContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.topRow}>
                        <h4>All Lessons(32)</h4>
                        <div className={styles.searchBarContainer}>
                            <SearchBar
                                style={{borderRadius: 'var(--Corner-radius-Small, 12px)',
                                border: '1px solid rgba(28, 27, 31, 0.40)'}}
                                hasClearButton={false}
                            />
                        </div>
                    </div>
                    <div className={styles.categoryContainer}>
                        <p>Category</p>
                        <ul className={styles.categoryList}>
                            {defaultCategories.map((category, index) => (
                                <li key={index}>
                                    <div key={index} className={styles.tag}>{category}</div>
                                </li>
                            ))}
                            <img src='src/assets/Lessons/lessonsGallery/restart_alt.svg' alt='restart' />
                        </ul>
                    </div>
                </div>
                <LessonsTable lessons={allLessons} />
            </section>
        </div>
    )
}
