import styles from "./LessonCategoryList.module.css";

/**
 * A component that displays all retrieved categories
 * @param categories All the categories in the list
 * @constructor
 */
export default function LessonCategoryList({categories}) {
    return (
        <div className={styles.categoryContainer}>
            <p>Category</p>
            <ul className={styles.categoryList}>
                {categories.map((category, index) => (
                    <li key={index}>
                        <div key={index} className={styles.tag}>{category}</div>
                    </li>
                ))}
                <img src='src/assets/Lessons/lessonsGallery/restart_alt.svg' alt='restart'/>
            </ul>
        </div>
    )
}