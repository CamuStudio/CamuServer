import styles from './Service.module.css';
import Card from "../components/Card.jsx";

export default function Service() {
    return (
        <div className={styles.container}>
            <section className={styles.titleContainer}>
                <h1>Our services</h1>
                <p>Using architecture as a springboard, pursue diversified development</p>
            </section>
            <section className={styles.cardsContainer}>
                <Card title='Portfolio evaluation'
                      subtitle='One-stop service from school to career' />
                <Card title='Portfolio touring'
                      subtitle='Teachers from top schools provide review' />
                <Card title='Lessons'
                      subtitle='Multidisciplinary fusion courses based' />
                <Card title='Blog'
                      subtitle='Learn from the experiences of successful people' />
            </section>
        </div>
    )
}