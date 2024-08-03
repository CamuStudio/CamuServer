import styles from "./SectionTitle.module.css";


export default function SectionTitle({title, subtitle}) {
    return (
        <section className={styles.titleContainer}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
        </section>
    )
}