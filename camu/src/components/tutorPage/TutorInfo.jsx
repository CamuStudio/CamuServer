import styles from "./TutorInfo.module.css";
import NameCard from "./NameCard.jsx";

/**
 * The component of tutor information
 * images are to be updated from Figma
 * @param tutor the tutor object
 */
export default function TutorInfo({tutor, onCloseTutorInfo}) {
    return (
        <div className={styles.container}>
            <img className={styles.closeIcon}
                 src="src/assets/general/plus.svg"
                 alt="close"
                 onClick={onCloseTutorInfo}
            />
            <section className={styles.imagesContainer}>
                <div className={styles.largeImg}>
                    <img src={tutor.previewImagesSrc[0]} alt="tutor1"/>
                </div>
                <div className={styles.smallImgContainer}>
                    {tutor.previewImagesSrc.map((imageSrc, index) => (
                        <img className={styles.smallImg} key={index} src={imageSrc} alt="tutor1"/>
                    ))}
                </div>
            </section>
            <section className={styles.infoContainer}>
                <NameCard tutor={tutor}/>
                <p>{tutor.description}</p>
            </section>
        </div>
    )
}