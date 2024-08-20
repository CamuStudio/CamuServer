import styles from './LessonsGallery.module.css'
import {latestLessons, topLatestLesson, defaultCategories, allLessons} from "../../../utils/dummyData.js";
import SearchBar from "../../../components/Lessons/SearchBar.jsx";
import LessonsTable from "../../../components/Lessons/Lesson/LessonsTable.jsx";
import CategoryList from "../../../components/Lessons/Lesson/CategoryList.jsx";
import TopRow from "../../../components/Lessons/Lesson/TopRow/TopRow.jsx";

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
                <LessonsTable lessons={latestLessons} />
            </section>
            <section className={styles.allLessonsContainer}>
                <div className={styles.topContainer}>
                    <TopRow />
                    <CategoryList categories={defaultCategories} />
                </div>
                <LessonsTable lessons={allLessons} />
            </section>
        </div>
    )
}
