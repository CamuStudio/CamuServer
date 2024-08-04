import styles from './TutorGrid.module.css';

/**
 * An Extracted component for each tutors
 * @prop tutor the tutors object
 */
export default function TutorGrid({tutor={}}) {

    const {imgSrc, subject, avatarSrc, name, qualification} = tutor

    return (
        <section className={styles.tutorGrid}>
            <section className={tutor === {} ? styles.imageContainer : styles['blankContainer']}>
                {tutor !== {} ?
                    <>
                        <img className={styles.image} src={imgSrc} alt='tutor1'/>
                        <img className={styles.unselectedIcon}
                             src='/public/unselected-icon.svg'
                             alt='unselected-icon'/>
                    </> :
                    null
                }
            </section>
            <section className={styles.description}>
                {tutor !== {} ?
                    <>
                        <h6 className={styles.subject}>{subject}</h6>
                        <div className={styles.nameCard}>
                            <img src={avatarSrc} alt={name}/>
                            <div className={styles.textContainer}>
                                <p className={styles.name}>{name}</p>
                                <p className={styles.qualification}>{qualification}</p>
                            </div>
                        </div>
                    </> : null
                }
            </section>
        </section>
    )
}