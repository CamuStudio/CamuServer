import styles from "./FAQPage.module.css";
import SectionTitle from "../../components/general/SectionTitle.jsx";
import Question from "../../components/FAQPage/Question.jsx";
import {forwardRef} from "react";

/**
 * An array of questions and answers. Answers are just placeholders now
 */
const questionsAndAnswers = [
    {
        contents: 'What services do you offer?',
        answer: <p className={styles.answer}>We offer a comprehensive range of <strong>architectural services</strong> including conceptual design,
            3D modeling, construction documentation, <strong>interior design</strong>, and project management.
            Whether you&apos;re looking to building a new structure, renovate an existing space, or require sustainable
            design solutions, we have the expertise to meet your needs.</p>
    },
    {
        contents: 'How long does it take to complete a portfolio?',
        answer: <p className={styles.answer}>We <strong>Offer</strong> consectetur adipiscing elit. Maecenas sed odio venenatis, aliquet nisi vel, pharetra dui.
            Mauris pretium lacus augue. Curabitur ultricies purus vel leo lacinia, in vestibulum lectus
            dignissim. Nullam rutrum et purus ac venenatis. Maecenas placerat posuere augue, eget hendrerit
            metus sodales a. Mauris et luctus est.</p>
    },
    {
        contents: 'What do I need to provide for my portfolio?',
        answer: <p className={styles.answer}>We <strong>Offer</strong> consectetur adipiscing elit. Maecenas sed odio venenatis, aliquet nisi vel, pharetra dui.
            Mauris pretium lacus augue. Curabitur ultricies purus vel leo lacinia, in vestibulum lectus
            dignissim. Nullam rutrum et purus ac venenatis. Maecenas placerat posuere augue, eget hendrerit
            metus sodales a. Mauris et luctus est.</p>
    },
    {
        contents: 'Can you help me update my existing portfolio?',
        answer: <p className={styles.answer}>We <strong>Offer</strong> consectetur adipiscing elit. Maecenas sed odio venenatis, aliquet nisi vel, pharetra dui.
            Mauris pretium lacus augue. Curabitur ultricies purus vel leo lacinia, in vestibulum lectus
            dignissim. Nullam rutrum et purus ac venenatis. Maecenas placerat posuere augue, eget hendrerit
            metus sodales a. Mauris et luctus est.</p>
    },
]

/**
 * The page of FAQs
 */
export default forwardRef(function FAQPage(props, ref) {
    return (
        <main ref={ref}>
            <div className={styles.container}>
                <SectionTitle
                    title='FAQs'
                    subtitle='All your questions answered.'
                    centered={false}
                />
                <section className={styles.questionListContainer}>
                    {questionsAndAnswers.map((question, index) => (
                        <Question key={index} question={question} />
                    ))}
                </section>
            </div>
        </main>
    )
})