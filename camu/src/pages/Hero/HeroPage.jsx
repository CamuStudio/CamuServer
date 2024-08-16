import styles from './HeroPage.module.css'
import SolidButton from "../../components/general/SolidButton.jsx";
import {forwardRef} from "react";

/**
 * The hero component containing text, contact button, and a hero image
 */
export default forwardRef(function HeroPage() {
    return (
        <main className={styles.container}>
            <section className={styles.leftContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Curate your own creative career</h1>
                    <p className={styles.subtitle}>{`Let's become close friends as we move 
                forward together, not just teacher and student working toward a goal.`}</p>
                </div>
                <SolidButton>
                    <span>Contact us</span>
                </SolidButton>
            </section>
            <section className={styles.rightContainer}>
                <img src='/src/assets/hero/hero.png' alt='hero'/>
            </section>
        </main>
    )
})
