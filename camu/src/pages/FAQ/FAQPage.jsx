import styles from "./FAQPage.module.css";
import SectionTitle from "../../components/SectionTitle.jsx";

/**
 * An array of questions and answers. Answers are just placeholders now
 */
const questionsAndAnswers = [
    {
        question: 'What services do you offer?',
        // answer: `We offer a comprehensive range of <strong>architectural</strong> services including conceptual design,
        // 3D modeling, construction documentation, interior design, and project management. `
        answer: <p className={styles.answer}>We offer a comprehensive range of <strong>architectural services</strong> including conceptual design,
            3D modeling, construction documentation, <strong>interior design</strong>, and project management.
            Whether you&apos;re looking to building a new structure, renovate an existing space, or require sustainable
            design solutions, we have the expertise to meet your needs.</p>
    },
    {
        question: 'How long does it take to complete a portfolio?',
        answer: <p className={styles.answer}>We <strong>Offer</strong> consectetur adipiscing elit. Maecenas sed odio venenatis, aliquet nisi vel, pharetra dui.
            Mauris pretium lacus augue. Curabitur ultricies purus vel leo lacinia, in vestibulum lectus
            dignissim. Nullam rutrum et purus ac venenatis. Maecenas placerat posuere augue, eget hendrerit
            metus sodales a. Mauris et luctus est.</p>
    },
    {
        question: 'What do I need to provide for my portfolio?',
        answer: <p className={styles.answer}>We <strong>Offer</strong> consectetur adipiscing elit. Maecenas sed odio venenatis, aliquet nisi vel, pharetra dui.
            Mauris pretium lacus augue. Curabitur ultricies purus vel leo lacinia, in vestibulum lectus
            dignissim. Nullam rutrum et purus ac venenatis. Maecenas placerat posuere augue, eget hendrerit
            metus sodales a. Mauris et luctus est.</p>
    },
    {
        question: 'Can you help me update my existing portfolio?',
        answer: <p className={styles.answer}>We <strong>Offer</strong> consectetur adipiscing elit. Maecenas sed odio venenatis, aliquet nisi vel, pharetra dui.
            Mauris pretium lacus augue. Curabitur ultricies purus vel leo lacinia, in vestibulum lectus
            dignissim. Nullam rutrum et purus ac venenatis. Maecenas placerat posuere augue, eget hendrerit
            metus sodales a. Mauris et luctus est.</p>
    },
]

/**
 * The page of FAQs
 */
export default function FAQPage() {
    return (
        <main>
            <div className={styles.container}>
                <SectionTitle
                    title='FAQs'
                    subtitle='All your questions answered.'
                    centered={false}
                />
                <section className={styles.questionListContainer}>
                    {questionsAndAnswers.map((pair) => (
                        <div key={pair.question} className={styles.qAndAContainer}>
                            <div  className={styles.questionContainer}>
                                <span className={styles.question}>{pair.question}</span>
                                <img src='/src/assets/FAQs/plus.svg' alt='plus'/>
                            </div>
                            {pair.answer}
                        </div>
                    ))}
                </section>
            </div>
        </main>
    )
}