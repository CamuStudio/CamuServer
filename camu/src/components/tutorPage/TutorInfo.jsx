import styles from "./TutorInfo.module.css";
import NameCard from "./NameCard.jsx";
import {useState} from "react";
import {motion} from 'framer-motion';
import SolidButton from "../general/SolidButton.jsx";

/**
 * frame-motion variants
 * applied when the selectedImageIndex state changes the animate prop in
 */
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

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

    if (tutor) {
        return (
            <div className={styles.container}>
                <img className={styles.closeIcon}
                     src="src/assets/general/plus.svg"
                     alt="close"
                     onClick={onCloseTutorInfo}
                />
                <section className={styles.imagesContainer}>
                    <div className={styles.largeImgContainer}>
                        {tutor.previewImagesSrc.map((image, index) => (
                            <motion.div
                                className={styles.largeImg}
                                key={index}
                                initial="hidden"
                                animate={selectedImageIndex === index ? 'visible' : 'hidden'}
                                variants={variants}
                                transition={{duration: 0.5}}
                                style={{backgroundImage: `url(${image})`,}}
                            />
                        ))}
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
                    <SolidButton>
                        <img src='/src/assets/general/arrow_forward_white.svg' alt='arrow_forward'/>
                        <span>Talk to advisor</span>
                    </SolidButton>
                </section>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}