import styles from './HollowButton.module.css'

export default function HollowButton({text, onClick, children}) {
    return (
        <button className={styles.hollowButton}>
            <section className={styles.contents} onClick={onClick}>
                <span className={styles.text}>{text}</span>
                {children}
            </section>
        </button>
    )
}