import styles from "./ContactForm.module.css";
import InputField from "./InputField.jsx";
import SolidButton from "../general/SolidButton.jsx";
import HollowButton from "../general/HollowButton.jsx";
import {useState} from "react";
import InterestButton from "./InterestButton.jsx";

const defaultInterests = [
    'Architectual Design',
    'Conceptual Design',
    '3D Modelling',
    'Environmental Design',
    'Industrial Design',
    'Landscape Design',
    'Website Design',
]

export default function ContactForm() {

    const [name, setName] = useState('');
    const [wechatId, setWechatId] = useState('');
    const [showInterests, setShowInterests] = useState(false);
    const [allInterests, setAllInterests] = useState(defaultInterests);
    const [selectedInterests, setSelectedInterests] = useState([]);

    /**
     * Function to handle submitting the form
     * @param e the click event
     */
    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('This form is submitted!');
        console.log({name, wechatId, selectedInterests});
        setName('')
        setWechatId('');
    }

    function handleShowInterest(e) {
        e.preventDefault()
        setShowInterests(!showInterests);
    }

    function handleSelectInterest(e, interest) {
        e.preventDefault();
        console.log(`The interest is ${interest}!`);
        setSelectedInterests([...selectedInterests, interest]);
    }

    return (
        <form className={showInterests ? styles.formWithInterestContainer : styles.formContainer}>
            <section className={styles.titleContainer}>
                <h4 className={styles.title}>Send a message</h4>
                <p className={styles.subtitle}>Camu will contact you via WeChat in 24 hours</p>
            </section>
            <section className={styles.inputContainer}>
                <InputField name={'Name'} value={name} onChange={(e) => setName(e.target.value)} />
                <InputField name={'WeChat ID'} value={wechatId} onChange={(e) => setWechatId(e.target.value)} />
            </section>
            {showInterests ? (
                <section className={styles.interestContainer}>
                    <h4 className={styles.interestTitle}>Interests</h4>
                    <section className={styles.interests}>
                        {allInterests.map((interest, index) => (
                            <div key={index}>
                                <InterestButton interest={interest}
                                                onClick={(e) => handleSelectInterest(e, interest)}/>
                            </div>
                        ))}
                        <div className={styles.otherInterestButtonContainer}>
                            <InterestButton interest={'Others'} onClick={handleSelectInterest}/>
                        </div>
                    </section>
                    <section className={styles.submitButtonContainer}>
                        <SolidButton text={'Submit'} onClick={handleSubmitForm}/>
                    </section>
                </section>
            ) : (
                <section className={styles.buttonsContainer}>
                    <div className={styles.buttonContainer}>
                        <HollowButton text={'Tell us more'} onClick={handleShowInterest}>
                            <div className={styles.plusContainer}>
                                <img src='/src/assets/general/plus.svg' alt='plus'/>
                            </div>
                        </HollowButton>
                    </div>
                    <div className={name && wechatId ? styles.buttonContainer : styles.disabledButtonContainer}>
                        <SolidButton text={'Submit'} onClick={handleSubmitForm}/>
                    </div>
                </section>
            )}
        </form>
    )
}