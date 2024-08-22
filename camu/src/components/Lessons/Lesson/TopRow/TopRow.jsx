import styles from './TopRow.module.css'
import SearchBar from "../SearchBar/SearchBar.jsx";

/**
 * A component that consists of the top row of "All Lessons" section
 * @returns {JSX.Element}
 * @constructor
 */
export default function TopRow() {
    return (
        <div className={styles.container}>
            <h4>All Lessons(32)</h4>
            <div className={styles.searchBarContainer}>
                <SearchBar
                    style={{
                        borderRadius: 'var(--Corner-radius-Small, 12px)',
                        border: '1px solid rgba(28, 27, 31, 0.40)'
                    }}
                    hasClearButton={false}
                />
            </div>
        </div>
    )
}
