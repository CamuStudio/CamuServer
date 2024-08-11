import styles from './SolidButton.module.css';

export default function SolidButton({text, onClick, children}) {
    return (
        <button className={styles.solidButton} onClick={onClick}>
            <section className={styles.contents}>
                <span className={styles.text}>{text}</span>
                {children}
            </section>
        </button>
    )
}