import styles from './Question.module.css';
import {useState} from "react";

/**
 * An Extracted component for each question
 * @prop tutor the tutors object
 */
export default function Question({question}) {

    const {contents, answer} = question;

    const [showAnswer, setShowAnswer] = useState(false);

    /**
     * The function to toggle showing answer
     * Triggered by clicking the plus icon
     */
    function toggleShowAnswer() {
        setShowAnswer((prev) => !prev);
    }

    return (
        <div key={contents} className={styles.qAndAContainer}>
            <div className={styles.questionContainer}>
                <span className={styles.question}>{contents}</span>
                <img className={showAnswer ? styles.iconCollapsed : styles.icon}
                     src='/src/assets/FAQs/plus.svg'
                     alt='plus'
                     onClick={toggleShowAnswer}
                />
            </div>
            <div className={showAnswer ? styles.answerContainer : styles.answerContainerCollapsed}>
                {answer}
            </div>
        </div>
    )
}