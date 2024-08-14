import styles from './ContactPage.module.css';
import SolidButton from "../../components/general/SolidButton.jsx";
import {forwardRef, useState} from "react";
import HollowButton from "../../components/general/HollowButton.jsx";
import ContactForm from "../../components/contactPage/ContactForm.jsx";
import Finished from "../../components/contactPage/Finished.jsx";
import {motion} from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default forwardRef(function ContactPage({onSelectSection}, ref) {

    const [showMessageBox, setShowMessageBox] = useState(false)
    const [showFinish, setShowFinish] = useState(false);

    function toggleShowMessageBox() {
        setShowMessageBox(!showMessageBox);
    }

    function toggleShowFinish() {
        setShowFinish(!showFinish);
    }

    function handleBackToMessage() {
        setShowFinish(false);
    }
  
    return (
        <main className={styles.container} ref={ref}>
            <div className={styles.wrapper}>
                <section className={styles.topContainer}>
                    <section className={styles.leftContainer}>
                        {showMessageBox && (
                            <motion.img className={styles.backArrow}
                                        src='/src/assets/general/arrow_forward.svg'
                                        alt='back_arrow'
                                        animate={showMessageBox ? 'visible' : 'hidden'}
                                        variants={variants}
                                        transition={{duration: 0.5}}
                                        initial="hidden"
                                        onClick={toggleShowMessageBox}
                            />
                        )}
                        <p className={styles.subtitle}>Join the club</p>
                        <h4 className={styles.title}>
                            Talk to our advisor to see if Camu Design fits you!
                        </h4>
                        <motion.section
                            className={styles.buttonsContainer}
                            animate={showMessageBox ? 'hidden' : 'visible'}
                            variants={variants}
                            transition={{duration: 0.5}}
                            initial="hidden"
                        >
                            <SolidButton text={'Let\'s arrange a call'}/>
                            <HollowButton text={'Send a message'} onClick={toggleShowMessageBox}>
                                <img src='/src/assets/general/arrow_forward.svg' alt='arrow_forward'/>
                            </HollowButton>
                        </motion.section>
                    </section>
                    <section
                        className={styles.rightContainer}
                    >
                        <motion.div className={styles.heroImgContainer}>
                            <motion.img
                                src='/src/assets/contact/contact.png'
                                alt='contact'
                                animate={showMessageBox ? 'hidden' : 'visible'}
                                variants={variants}
                                transition={{duration: 0.5}}
                                initial="hidden"
                            />
                        </motion.div>
                        <motion.div
                            className={styles.contactFormContainer}
                            animate={showMessageBox ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{duration: 0.5}}
                            initial="hidden"
                        >
                        <ContactForm onShowFinish={toggleShowFinish}/>
                        </motion.div>
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