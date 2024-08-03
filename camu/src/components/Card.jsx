import styles from './Card.module.css';
import Button from "./Button.jsx";

export default function Card({title, subtitle}) {
    return (
        <div className={styles.container}>
            <section className={styles.leftContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <Button text={'Contact us'}/>
            </section>

            <section className={styles.rightContainer}>
                <img src='/public/portfolio_evaluation.svg' alt='portfolio_evaluation'/>
            </section>
        </div>
    )
}