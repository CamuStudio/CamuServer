import styles from './ServicePage.module.css';
import Card from "../../components/general/Card.jsx";
import SolidButton from "../../components/general/SolidButton.jsx";
import SectionTitle from "../../components/general/SectionTitle.jsx";
import {forwardRef} from "react";
import HollowButton from "../../components/general/HollowButton.jsx";


export default forwardRef(function ServicePage(props, ref) {
    return (
        <div className={styles.container} ref={ref}>
            <SectionTitle title='Our Services' subtitle='Using architecture as a springboard, pursue diversified development'/>
            <section className={styles.cardsContainer}>
                <section className={styles.upperContainer}>
                    <div className={styles.evaluationCardContainer}>
                        <Card title='Portfolio evaluation'
                              subtitle='One-stop service from school to career'
                              buttonText='Contact us'
                        >
                            <SolidButton text={'Contact us'}/>
                        </Card>
                    </div>
                    <div className={styles.touringCardContainer}>
                        <Card title='Portfolio touring'
                              subtitle='Teachers from top schools provide review'
                              buttonText='Contact us'
                        >
                            <SolidButton text={'Contact us'}/>
                        </Card>
                    </div>
                </section>
                <section className={styles.lowerContainer}>
                    <div className={styles.lessonsCardContainer}>
                        <Card title='Lessons'
                              subtitle='Multidisciplinary fusion courses based'
                              buttonText='View ->'
                        >
                            <div style={{width: '30%', height: '40px'}}>
                                <HollowButton>
                                    <span>View</span>
                                    <img src='/src/assets/general/arrow_forward.svg' alt='arrow_forward'/>
                                </HollowButton>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.blogCardContainer}>
                        <Card title='Blog'
                              subtitle='Learn from the experiences of successful people'
                              buttonText='View ->'
                        >
                            <div style={{width:'30%', height:'40px'}}>
                                <HollowButton text={'View'}>
                                    <span>View</span>
                                    <img src='/src/assets/general/arrow_forward.svg' alt='arrow_forward'/>
                                </HollowButton>
                            </div>
                        </Card>
                    </div>
                </section>
            </section>
        </div>
    )
})