import styles from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <div className={styles.container}>
            <img src='src/assets/Lessons/lessonHero/search.svg' alt='Search'/>
            <input
                type='text'
                placeholder='Search all lessons'
            />
            <img src='src/assets/Lessons/lessonHero/cancel.svg' alt='Cancel'/>
        </div>
    )
}