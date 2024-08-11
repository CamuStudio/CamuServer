import styles from "./ContactForm.module.css";
import InputField from "./InputField.jsx";
import SolidButton from "../general/SolidButton.jsx";
import HollowButton from "../general/HollowButton.jsx";

export default function ContactForm() {
    return (
        <div className={styles.formContainer}>
            <section className={styles.titleContainer}>
                <h4 className={styles.title}>Send a message</h4>
                <p className={styles.subtitle}>Camu will contact you via WeChat in 24 hours</p>
            </section>
            <section className={styles.inputContainer}>
                <InputField name={'name'}/>
                <InputField name={'wechatId'}/>
            </section>
            <section className={styles.buttonsContainer}>
                <div className={styles.buttonContainer}>
                    <SolidButton text={'Submit'}/>
                </div>
                <div className={styles.buttonContainer}>
                    <HollowButton text={'Tell us more'}>
                        <div className={styles.plusContainer}>
                            <img src='/src/assets/general/plus.svg' alt='plus'/>
                        </div>
                    </HollowButton>
                </div>
            </section>
        </div>
    )
}