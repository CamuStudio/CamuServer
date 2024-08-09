import styles from './ContactPage.module.css';
import Button from "../../components/general/Button.jsx";
import {forwardRef} from "react";

export default forwardRef(function ContactPage({onSelectSection}, ref) {
    return (
        <main className={styles.container} ref={ref}>
            <div className={styles.wrapper}>
                <section className={styles.topContainer}>
                    <section className={styles.leftContainer}>
                        <p className={styles.subtitle}>Join the club</p>
                        <h4 className={styles.title}>
                            Talk to our advisor to see if Camu Design fits you!
                        </h4>
                        <section className={styles.buttonsContainer}>
                            <Button text={'Let\'s arrange a call'} className='solidButton'/>
                            <Button text={'Send a message'} className='hollowButton'>
                                <img src='/src/assets/general/arrow_forward.svg' alt='arrow_forward'/>
                            </Button>
                        </section>
                    </section>
                    <section className={styles.rightContainer}>
                        <img src='/src/assets/contact/contact.png' alt='contact'/>
                    </section>
                </section>
                <section className={styles.linksContainer}>
                    <section className={styles.linkColumn}>
                        <p className={styles.subject}>What &apos;s it for</p>
                        <p className={styles.link}
                           onClick={() => {
                               onSelectSection('Service')
                           }}
                        >
                            Our services
                        </p>
                        <p className={styles.link} onClick={() => {
                            onSelectSection('Strength')
                        }}
                        >
                            Our strength
                        </p>
                        <p className={styles.link} onClick={() => {
                            onSelectSection('Tutor')
                        }}
                        >
                            Meet our tutors
                        </p>
                        <p className={styles.link} onClick={() => {
                            onSelectSection('FAQ')
                        }}
                        >
                            FAQs
                        </p>
                    </section>
                    <section className={styles.linkColumn}>
                        <p className={styles.subject}>Resources</p>
                        <p className={styles.link}>Lessons</p>
                        <p className={styles.link}>Blog</p>
                    </section>
                    <section className={styles.linkColumn}>
                        <p className={styles.subject}>Camudesign@gmail.com</p>
                        <p className={styles.link}>camudesign</p>
                        <p className={styles.link}>Join us</p>
                    </section>
                </section>
                <section className={styles.footersContainer}>
                    <footer>Camu Design</footer>
                    <footer>@ 2024 CamuStudio</footer>
                </section>
            </div>
        </main>
    )
})