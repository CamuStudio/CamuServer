import styles from './ContactPage.module.css';
import SolidButton from "../../components/general/SolidButton.jsx";
import {forwardRef, useState} from "react";
import HollowButton from "../../components/general/HollowButton.jsx";
import ContactForm from "../../components/contactPage/ContactForm.jsx";


export default forwardRef(function ContactPage(props, ref) {

    const [showMessageBox, setShowMessageBox] = useState(false)

    function toggleShowMessageBox() {
        setShowMessageBox(!showMessageBox);
    }
  
    return (
        <main className={styles.container} ref={ref}>
            <div className={styles.wrapper}>
                {showMessageBox ? (
                    <section className={styles.messageBoxContainer}>
                        <section className={styles.leftContainer}>
                            <img className={styles.backArrow}
                                 src='/src/assets/general/arrow_forward.svg'
                                 alt='back_arrow'
                                 onClick={toggleShowMessageBox}
                            />
                            <p className={styles.subtitle}>Join the club</p>
                            <h4 className={styles.title}>
                                Talk to our advisor to see if Camu Design fits you!
                            </h4>
                        </section>
                        <section className={styles.rightContainer}>
                            <ContactForm />
                        </section>
                    </section>
                ) : <section className={styles.topContainer}>
                    <section className={styles.leftContainer}>
                        <p className={styles.subtitle}>Join the club</p>
                        <h4 className={styles.title}>
                            Talk to our advisor to see if Camu Design fits you!
                        </h4>
                        <section className={styles.buttonsContainer}>
                            <SolidButton text={'Let\'s arrange a call'}/>
                            <HollowButton text={'Send a message'} onClick={toggleShowMessageBox}>
                                <img src='/src/assets/general/arrow_forward.svg' alt='arrow_forward'/>
                            </HollowButton>
                        </section>
                    </section>
                    <section className={styles.rightContainer}>
                        <img src='/src/assets/contact/contact.png' alt='contact'/>
                    </section>
                </section>}
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