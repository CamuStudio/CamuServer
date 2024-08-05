import styles from "./FAQPage.module.css";
import SectionTitle from "../../components/SectionTitle.jsx";

const questionsAndAnswers = [
    {
        question: 'What services do you offer?',
        answer: ''
    },
    {
        question: 'How long does it take to complete a portfolio?',
        answer: ''
    },
    {
        question: 'What do I need to provide for my portfolio?',
        answer: ''
    },
    {
        question: 'Can you help me update my existing portfolio?',
        answer: ''
    },
]

export default function FAQPage() {
    return (
        <div className={styles.container}>
                <SectionTitle
                    title='FAQs'
                    subtitle='All your questions answered.'
                    centered={false}
                />
            <section className={styles.questionListContainer}>
                {questionsAndAnswers.map((pair) => (
                    <div key={pair.question} className={styles.questionContainer}>
                        <span className={styles.question}>{pair.question}</span>
                        <img src='/src/assets/FAQs/plus.svg' alt='plus'/>
                    </div>
                ))}
            </section>
        </div>
    )
}