import styles from './Button.module.css';

export default function Button({text, className, children}) {
    return (
        <button className={styles[className]}>
            <section className={styles.contents}>
                <span className={styles.text}>{text}</span>
                {children}
            </section>
        </button>
    )
}