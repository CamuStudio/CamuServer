import styles from "./TutorGrid.module.css";
import NameCard from "./NameCard.jsx";

/**
 * An Extracted component for each tutor
 * @prop tutor the tutors object
 */
export default function TutorGrid({ tutor={}, blank = false, onSelectTutor }) {
  const { imgSrc, subject, avatarSrc, name, qualification } = tutor;

  return (
    <section className={styles.tutorGrid}>
      <section
          className={blank ? styles["blankContainer"] : styles.imageContainer}
          onClick={onSelectTutor}
      >
        {blank ? (
          <div className={styles.moreTutors}>
            <img src="src/assets/general/arrow_forward.svg" alt="arrow_forward" />
            <span className={styles.moreTutorInfo}>View more tutors</span>
          </div>
        ) : (
          <>
            <img className={styles.image} src={imgSrc} alt="tutor1" />
            <img
              className={styles.unselectedIcon}
              src="src/assets/tutors/unselected-icon.svg"
              alt="unselected-icon"
            />
          </>
        )}
      </section>
      <section className={styles.description}>
        {blank ? null : (
          <>
            <NameCard tutor={tutor} />
          </>
        )}
      </section>
    </section>
  );
}
