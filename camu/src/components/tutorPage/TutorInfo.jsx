import styles from "./TutorInfo.module.css";
import NameCard from "./NameCard.jsx";
import {useState} from "react";

/**
 * The component of tutor information
 * images are to be updated from Figma
 * @param tutor the tutor object
 */
export default function TutorInfo({tutor, onCloseTutorInfo}) {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    function handleSelectImage(index) {
        setSelectedImageIndex(index)
    }

    return (
        <div className={styles.container}>
            <img className={styles.closeIcon}
                 src="src/assets/general/plus.svg"
                 alt="close"
                 onClick={onCloseTutorInfo}
            />
            <section className={styles.imagesContainer}>
                <div className={styles.largeImg}>
                    <img src={tutor.previewImagesSrc[selectedImageIndex]} alt="preview"/>
                </div>
                <div className={styles.smallImgContainer}>
                    {tutor.previewImagesSrc.map((imageSrc, index) => (
                        <img
                            className={selectedImageIndex === index ? styles.selectedSmallImg : styles.smallImg}
                            key={index}
                            src={imageSrc}
                            alt="tutor1"
                            onClick={() => handleSelectImage(index)}
                        />
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