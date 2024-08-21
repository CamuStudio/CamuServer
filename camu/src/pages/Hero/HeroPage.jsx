import styles from './HeroPage.module.css'
import SolidButton from "../../components/general/SolidButton.jsx";
import {forwardRef} from "react";

const tutorAvatars = [
    "../src/assets/tutors/tina.png",
    "../src/assets/tutors/tina.png",
    "../src/assets/tutors/tina.png",
    "../src/assets/tutors/tina.png",
    "../src/assets/tutors/tina.png",
    "../src/assets/tutors/tina.png"
]

const portfolioImages = [
    "../src/assets/hero/portfolio_img_1.png",
    "../src/assets/hero/portfolio_img_2.png",
    "../src/assets/hero/portfolio_img_3.png",
]

const brandImages = [
    "../src/assets/hero/Vector.svg",
    "../src/assets/hero/Vector (1).svg",
    "../src/assets/hero/Vector (2).svg",
    "../src/assets/hero/Vector (3).svg",
    "../src/assets/hero/Vector (4).svg",
    "../src/assets/hero/Vector (5).svg",
    "../src/assets/hero/Vector (6).svg",
    "../src/assets/hero/Vector (7).svg",
]

/**
 * The hero component containing text, contact button, and a hero image
 */
export default forwardRef(function Hero(props, ref) {
    return (
        <main className={styles.wrapper} ref={ref}>
            <div className={styles.container}>
                <div className={styles.heroContainer}>
                    <section className={styles.tutorsContainer}>
                        <div className={styles.introContainer}>
                            <span>👋  → You + Our Tutors → Rocket Portfolio  🚀</span>
                        </div>
                        <div className={styles.tutorIconsContainer}>
                            {tutorAvatars.map((imgSrc, index) => (
                                <div key={index} className={styles.tutorIconContainer}>
                                    <img src={imgSrc} alt='tutor'/>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className={styles.textContainer}>
                        <h1 className={styles.title}>Your Ultimate Creative Partner for Innovative Architectural
                            Designs</h1>
                        <h5 className={styles.subtitle}>Expertly crafted design solutions tailored to your vision and
                            budget, ensuring you stay ahead in a dynamic market.</h5>
                    </section>
                    <section className={styles.buttonContainer}>
                        <SolidButton>
                            <span>Let&apos;s talk</span>
                        </SolidButton>
                    </section>
                </div>
                <div className={styles.bottomContainer}>
                    <section className={styles.imagesContainer}>
                        {portfolioImages.map((imgSrc, index) => (
                            <div key={index} className={styles.imageContainer}>
                                <img src={imgSrc} alt={imgSrc}/>
                            </div>
                        ))}
                    </section>
                    <section className={styles.studentsSourceContainer}>
                        <div className={styles.studentsFromContainer}>
                            <span>Students from</span>
                        </div>
                        <div className={styles.brandsContainer}>
                            {brandImages.map((imgSrc, index) => (
                                <img key={index} src={imgSrc} alt={imgSrc}/>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
})
