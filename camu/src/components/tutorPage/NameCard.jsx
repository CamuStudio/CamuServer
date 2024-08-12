import styles from "./NameCard.module.css";

export default function NameCard({tutor}) {

    const {subject, avatarSrc, name, qualification} = tutor

    return (
        <>
            <h6 className={styles.subject}>{subject}</h6>
            <div className={styles.nameCard}>
                <img src={avatarSrc} alt={name}/>
                <div className={styles.textContainer}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.qualification}>{qualification}</p>
                </div>
            </div>
        </>
    )
}