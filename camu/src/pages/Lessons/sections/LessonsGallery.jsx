import styles from './LessonsGallery.module.css'
import {latestLessons, defaultCategories, allLessons} from "../../../utils/dummyData.js";
import LessonsTable from "../../../components/Lessons/Lesson/LessonTable/LessonsTable.jsx";
import LessonCategoryList from "../../../components/Lessons/Lesson/LessonCategoryList/LessonCategoryList.jsx";
import TopRow from "../../../components/Lessons/Lesson/TopRow/TopRow.jsx";
import LatestLesson from "../../../components/Lessons/Lesson/LatestLesson/LatestLesson.jsx";

export default function LessonsGallery() {
    return (
        <div className={styles.container}>
            <section className={styles.latestLessonsContainer}>
                <h4>Latest</h4>
                <LatestLesson />
                <LessonsTable lessons={latestLessons} />
            </section>
            <section className={styles.allLessonsContainer}>
                <div className={styles.topContainer}>
                    <TopRow />
                    <LessonCategoryList categories={defaultCategories} />
                </div>
                <LessonsTable lessons={allLessons} />
            </section>
        </div>
    )
}
