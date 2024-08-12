import styles from './HollowButton.module.css'

export default function HollowButton({text, onClick, children}) {
    return (
        <button className={styles.hollowButton} onClick={onClick}>
            <section className={styles.contents}>
                <span className={styles.text}>{text}</span>
                {children}
            </section>
        </button>
    )
}