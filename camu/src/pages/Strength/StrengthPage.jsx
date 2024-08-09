import styles from './StrengthPage.module.css';
import Button from "../../components/general/Button.jsx";
import SectionTitle from "../../components/general/SectionTitle.jsx";
import {forwardRef} from "react";

/**
 * The page about CamuStudio's strength
 */
export default forwardRef(function StrengthPage(props, ref) {
    return (
        <div className={styles.container} ref={ref}>
            <SectionTitle title='Our Strength'
                          subtitle='Comprehensive portfolio guidance, application and follow-up planning'
            />
            <section className={styles.cardsContainer}>
                <div className={styles.portfolioCardContainer}>
                    <section className={styles.imageContainer}>
                        <img src='/src/assets/strengths/portfolio_and_research.svg' alt="Portfolio & Research" />
                    </section>
                    <section className={styles.textContainer}>
                        <h6 className={styles.title}>Portfolio & Research</h6>
                        <p className={styles.subtitle}>Gradually multidisciplinary concepts and knowledge in portfolio tutoring</p>
                    </section>
                </div>
                <div className={styles.applicationCardContainer}>
                    <section className={styles.imageContainer}>
                        <img src='/src/assets/strengths/application_and_career.svg' alt="Application & Career"/>
                    </section>
                    <section className={styles.textContainer}>
                        <h6 className={styles.title}>Application & Career</h6>
                        <p className={styles.subtitle}>Pay attention to your academic and career development after admission</p>
                    </section>
                </div>
            </section>
            <section className={styles.buttonContainer}>
                <Button text='Contact us' className='solidButton'/>
            </section>
        </div>
    )
})