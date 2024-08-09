import styles from "./SectionTitle.module.css";


export default function SectionTitle({title, subtitle, centered = true}) {
    return (
        <section className={centered ? styles.centerAlignTitleContainer : styles.leftAlignTitleContainer}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
        </section>
    )
}