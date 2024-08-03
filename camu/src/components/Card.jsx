import styles from './Card.module.css';

export default function Card({title, subtitle, children}) {
    return (
        <div className={styles.container}>
            <section className={styles.leftContainer}>
                <div className={styles.textContainer}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                {children}
            </section>
            <section className={styles.blankSection}>
            </section>
        </div>
    )
}