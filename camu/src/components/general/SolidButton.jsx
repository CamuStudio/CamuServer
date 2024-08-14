import styles from './SolidButton.module.css';

export default function SolidButton({text, onClick, enabled=true}) {
    return (
        <button className={enabled ? styles.button : styles.disabledButton} onClick={onClick}>
            <section className={styles.contents}>
                <span>{text}</span>
            </section>
        </button>
    )
}