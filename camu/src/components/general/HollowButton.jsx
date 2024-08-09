import styles from './HollowButton.module.css'

export default function HollowButton({text, children}) {
    return (
        <button className={styles.hollowButton}>
            <section className={styles.contents}>
                <span className={styles.text}>{text}</span>
                {children}
            </section>
        </button>
    )
}