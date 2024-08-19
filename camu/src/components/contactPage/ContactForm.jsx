import styles from "./ContactForm.module.css";
import BasicInputField from "./BasicInputField.jsx";
import SolidButton from "../general/SolidButton.jsx";
import HollowButton from "../general/HollowButton.jsx";
import {useState} from "react";
import Interests from "./Interests.jsx";
import {motion} from "framer-motion";

const defaultInterests = [
    'Architecture Design',
    'Conceptual Design',
    '3D Modelling',
    'Environmental Design',
    'Industrial Design',
    'Landscape Design',
    'Website Design',
]

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function ContactForm({onShowFinish}) {

    const [name, setName] = useState('');
    const [wechatId, setWechatId] = useState('');
    const [showInterests, setShowInterests] = useState(false);
    const [selectedInterests, setSelectedInterests] = useState(new Set());

    /**
     * Function to handle submitting the form
     * @param e the click event
     */
    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('This form is submitted!');
        console.log({
            name,
            wechatId,
            selectedInterests: Array.from(selectedInterests)
        });
        onShowFinish();
        setName('')
        setWechatId('');
    }

    /**
     * Function to handle submitting the form
     * @param e the click event
     */
    function handleShowInterest(e) {
        e.preventDefault()
        setShowInterests(!showInterests);
    }

    /**
     * Function to handle selecting each interest
     * @param e the click event
     * @param interest the name of the interest
     */
    function handleSelectInterest(e, interest) {
        e.preventDefault();

        // remove the interest if it's already included. Otherwise, add the interest.
        if (selectedInterests.has(interest)) {
            setSelectedInterests(prev => {
                prev.delete(interest);
                return new Set(prev);
            });
        } else {
            setSelectedInterests(prev => (new Set(prev)).add(interest));
        }
    }

    function handleAddNewInterest(newInterest) {
        setSelectedInterests(prev => (new Set(prev)).add(newInterest));
    }

    return (
        <>
            <form className={showInterests ? styles.formWithInterestContainer : styles.formContainer}>
                <section className={styles.titleContainer}>
                    <h4 className={styles.title}>Send a message</h4>
                    <p className={styles.subtitle}>Camu will contact you via WeChat in 24 hours</p>
                </section>
                <section className={styles.inputContainer}>
                    <BasicInputField name={'Name'} value={name} onChange={(e) => setName(e.target.value)}/>
                    <BasicInputField name={'WeChat ID'} value={wechatId} onChange={(e) => setWechatId(e.target.value)}/>
                </section>

                {showInterests && (
                    <motion.section
                        className={styles.interestContainer}
                        animate={showInterests ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{duration: 0.5}}
                        initial="hidden"
                    >
                        <Interests interests={defaultInterests}
                                   onSelect={handleSelectInterest}
                                   onAddNewInterest={handleAddNewInterest}
                        />
                        <section className={styles.submitButtonContainer}>
                            <SolidButton onClick={handleSubmitForm} enabled={!!(name && wechatId)}>
                                <span>Submit</span>
                            </SolidButton>
                        </section>
                    </motion.section>
                )}
                <motion.section
                    className={styles.buttonsContainer}
                    animate={showInterests ? 'hidden' : 'visible'}
                    variants={variants}
                    transition={{duration: 0.5}}
                >
                    <div className={styles.buttonContainer}>
                        <HollowButton text={'Tell us more'} onClick={handleShowInterest}>
                            <img className={styles.backIcon} src='src/assets/general/plus_blue.svg' alt='go_back'/>
                            <span>Tell us more</span>
                        </HollowButton>
                    </div>
                    <div className={styles.buttonContainer}>
                        <SolidButton onClick={handleSubmitForm} enabled={!!(name && wechatId)}>
                            <span>Submit</span>
                        </SolidButton>
                    </div>
                </motion.section>
            </form>
        </>
    )
}