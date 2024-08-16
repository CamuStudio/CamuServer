import styles from './Hero.module.css'
import Button from "./Button.jsx";

/**
 * The hero component containing text, contact button, and a hero image
 */
export default function Hero() {
    return (
        <main className={styles.container}>
            <section className={styles.leftContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Curate your own creative career</h1>
                    <p className={styles.subtitle}>{`Let's become close friends as we move 
                forward together, not just teacher and student working toward a goal.`}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button text={'Contact us'}/>
                </div>
            </section>
            <section className={styles.rightContainer}>
                <img src='../../public/hero.png' alt='hero'/>
            </section>
        </main>
    )
}
