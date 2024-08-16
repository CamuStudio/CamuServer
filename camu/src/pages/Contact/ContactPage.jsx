import styles from './ContactPage.module.css';
import SolidButton from "../../components/general/SolidButton.jsx";
import {forwardRef, useState} from "react";
import HollowButton from "../../components/general/HollowButton.jsx";
import ContactForm from "../../components/contactPage/ContactForm.jsx";
import FinishedComponent from "../../components/contactPage/FinishedComponent.jsx";
import {motion} from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default forwardRef(function ContactPage({onSelectSection}, ref) {

    const [showHeroImg, setShowHeroImg] = useState(true);
    const [showMessageBox, setShowMessageBox] = useState(false)
    const [showFinish, setShowFinish] = useState(false);

    function handleShowMessageBox() {
        setShowMessageBox(!showMessageBox)
        setShowHeroImg(!showHeroImg)
    }

    function handleShowFinish() {
        setShowFinish(!showFinish)
        setShowMessageBox(false)
    }

    function handleBackToMessage() {
        console.log("Back to message!")
        setShowFinish(false);
        setShowHeroImg(false)
        setShowMessageBox(true)
    }

    function handleBackToHero() {
        setShowHeroImg(true)
        setShowMessageBox(false)
        setShowFinish(false)
    }
  
    return (
        <main className={styles.container} ref={ref}>
            <div className={styles.wrapper}>
                <section className={styles.topContainer}>
                    <section className={styles.leftContainer}>
                        {(showFinish === true || showMessageBox === true) && (
                            <motion.img className={styles.backArrow}
                                        src='/src/assets/general/arrow_forward.svg'
                                        alt='back_arrow'
                                        animate={showMessageBox || showFinish ? 'visible' : 'hidden'}
                                        variants={variants}
                                        transition={{duration: 0.5}}
                                        initial="hidden"
                                        onClick={handleBackToHero}
                            />
                        )}
                        <p className={styles.subtitle}>Join the club</p>
                        <h4 className={styles.title}>
                            Talk to our advisor to see if Camu Design fits you!
                        </h4>
                        <motion.section
                            className={styles.buttonsContainer}
                            animate={showHeroImg ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{duration: 0.5}}
                            initial="hidden"
                        >
                            <SolidButton>
                                <span>Let&apos;s arrange a call</span>
                            </SolidButton>
                            <HollowButton text={'Send a message'} onClick={handleShowMessageBox}>
                                <img src='/src/assets/general/arrow_forward.svg' alt='arrow_forward'/>
                                <span>Send a message</span>
                            </HollowButton>
                        </motion.section>
                    </section>
                    <section className={styles.rightContainer}>
                        <motion.div className={styles.heroImgContainer}>
                            <motion.img
                                src='/src/assets/contact/contact.png'
                                alt='contact'
                                animate={showHeroImg ? 'visible' : 'hidden'}
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
                            <ContactForm onShowFinish={handleShowFinish}/>
                        </motion.div>
                        <motion.div
                            className={styles.finishBoxContainer}
                            animate={showFinish ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{duration: 0.5}}
                            initial="hidden"
                            style={{zIndex: showFinish ? 100 : -1}}
                        >
                            <FinishedComponent onBackToMessage={handleBackToMessage}/>
                        </motion.div>
                    </section>
                </section>

                <section className={styles.linksContainer}>
                    <section className={styles.linkColumn}>
                        <p className={styles.columnName}>What &apos;s it for</p>
                        <p className={styles.link} onClick={() => {
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
                        <p className={styles.columnName}>Resources</p>
                        <p className={styles.link}>Lessons</p>
                        <p className={styles.link}>Blog</p>
                    </section>
                    <section className={styles.linkColumn}>
                        <p className={styles.columnName}>Camudesign@gmail.com</p>
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