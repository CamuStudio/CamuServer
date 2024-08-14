import styles from './Finished.module.css';
import HollowButton from "../general/HollowButton.jsx";

export default function Finished({onBackToMessage}) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>This is a placeholder for an image</div>
            <section className={styles.textContainer}>
                <h4>Congrats! Your message is sent!</h4>
                <p>Camu will contact you via WeChat in 24 hours</p>
            </section>
            <HollowButton onClick={onBackToMessage}>
                <img className={styles.backIcon} src='src/assets/general/arrow_forward.svg' alt="go_back"/>
                <span>Tell us more</span>
            </HollowButton>
        </div>
    )
}