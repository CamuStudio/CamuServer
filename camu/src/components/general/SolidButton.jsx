import styles from './SolidButton.module.css';

export default function SolidButton({text, children}) {
    return (
        <button className={styles.solidButton}>
            <section className={styles.contents}>
                <span className={styles.text}>{text}</span>
                {children}
            </section>
        </button>
    )
}