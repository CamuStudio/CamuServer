import styles from "./ContactForm.module.css";
import InputField from "./InputField.jsx";
import SolidButton from "../general/SolidButton.jsx";
import HollowButton from "../general/HollowButton.jsx";
import {useState} from "react";

export default function ContactForm() {

    const [name, setName] = useState('');
    const [wechatId, setWechatId] = useState('');

    /**
     * Function to handle submitting the form
     * @param e the click event
     */
    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('This form is submitted!');
        console.log({name, wechatId});
    }

    return (
        <form className={styles.formContainer}>
            <section className={styles.titleContainer}>
                <h4 className={styles.title}>Send a message</h4>
                <p className={styles.subtitle}>Camu will contact you via WeChat in 24 hours</p>
            </section>
            <section className={styles.inputContainer}>
                <InputField name={'Name'} value={name} onChange={(e) => setName(e.target.value)} />
                <InputField name={'WeChat ID'} value={wechatId} onChange={(e) => setWechatId(e.target.value)} />
            </section>
            <section className={styles.buttonsContainer}>
                <div className={styles.buttonContainer}>
                    <SolidButton text={'Submit'} onClick={handleSubmitForm} />
                </div>
                <div className={styles.buttonContainer}>
                    <HollowButton text={'Tell us more'}>
                        <div className={styles.plusContainer}>
                            <img src='/src/assets/general/plus.svg' alt='plus'/>
                        </div>
                    </HollowButton>
                </div>
            </section>
        </form>
    )
}