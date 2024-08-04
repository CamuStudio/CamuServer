import styles from './ServicePage.module.css';
import Card from "../components/general/Card.jsx";
import Button from "../components/general/Button.jsx";
import SectionTitle from "../components/general/SectionTitle.jsx";

export default function ServicePage() {
    return (
        <div className={styles.container}>
            <SectionTitle title='Our Services' subtitle='Using architecture as a springboard, pursue diversified development'/>
            <section className={styles.cardsContainer}>
                <section className={styles.upperContainer}>
                    <div className={styles.evaluationCardContainer}>
                        <Card title='Portfolio evaluation'
                              subtitle='One-stop service from school to career'
                              buttonText='Contact us'
                        >
                            <Button text={'Contact us'} className='solidButton'/>
                        </Card>
                    </div>
                    <div className={styles.touringCardContainer}>
                        <Card title='Portfolio touring'
                              subtitle='Teachers from top schools provide review'
                              buttonText='Contact us'
                        >
                            <Button text={'Contact us'} className='solidButton'/>
                        </Card>
                    </div>
                </section>
                <section className={styles.lowerContainer}>
                    <div className={styles.lessonsCardContainer}>
                        <Card title='Lessons'
                              subtitle='Multidisciplinary fusion courses based'
                              buttonText='View ->'
                        >
                            <Button text={'View'} className='hollowButton'>
                                <img src='/src/assets/general/arrow_forward.svg' alt='arrow_forward' />
                            </Button>
                        </Card>
                    </div>
                    <div className={styles.blogCardContainer}>
                        <Card title='Blog'
                              subtitle='Learn from the experiences of successful people'
                              buttonText='View ->'
                        >
                            <Button text={'View'} className='hollowButton'>
                                <img src='/src/assets/general/arrow_forward.svg' alt='arrow_forward' />
                            </Button>
                        </Card>
                    </div>
                </section>
            </section>
        </div>
)
}