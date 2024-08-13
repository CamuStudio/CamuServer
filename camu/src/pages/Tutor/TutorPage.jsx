import styles from "./TutorPage.module.css";
import TutorGrid from "../../components/tutorPage/TutorGrid.jsx";
import {forwardRef, useState} from "react";
import TutorInfo from "../../components/tutorPage/TutorInfo.jsx";
import SectionTitle from "../../components/general/SectionTitle.jsx";

const tutors = [
  {
    imgSrc: "../src/assets/tutors/tutor1.png",
    subject: "Generative design",
    avatarSrc: "../src/assets/tutors/tina.png",
    name: "Tina.W",
    qualification: "Graduate from Upenn",
    description: (
      <p className={styles.description}>
        Tina Wang is an experienced <strong>architectural tutor</strong> at our
        agency, known for her expertise in,{" "}
        <strong>conceptual design, 3D modelling</strong>, and{" "}
        <strong>portfolio development.</strong>. She is committed to helping
        students refine their architectural skills and excel in presenting their
        work effectively.
      </p>
    ),
    previewImagesSrc: [
        'src/assets/tutors/tutor1_info_1.png',
        'src/assets/tutors/tutor1_info_2.png',
        'src/assets/tutors/tutor1_info_3.png',
    ]
  },
  {
    imgSrc: "../src/assets/tutors/tutor2.png",
    subject: "Generative design",
    avatarSrc: "../src/assets/tutors/andy.png",
    name: "Andy C.",
    qualification: "Work at HJS",
    description: (
      <p className={styles.description}>
        Andy C. is an experienced <strong>architectural tutor</strong> at our
        agency, known for her expertise in,{" "}
        <strong>conceptual design, 3D modelling</strong>, and{" "}
        <strong>portfolio development.</strong>. He is committed to helping
        students refine their architectural skills and excel in presenting their
        work effectively.
      </p>
    ),
    previewImagesSrc: [
      'src/assets/tutors/tutor2_info_1.png',
      'src/assets/tutors/tutor2_info_2.png',
    ]
  },
  {
    imgSrc: "../src/assets/tutors/tutor3.png",
    subject: "Generative design",
    avatarSrc: "../src/assets/tutors/steve.png",
    name: "Steve J.",
    qualification: "Work at Apple",
    description: (
      <p className={styles.description}>
        Steve J. is an experienced <strong>architectural tutor</strong> at our
        agency, known for her expertise in,{" "}
        <strong>conceptual design, 3D modelling</strong>, and{" "}
        <strong>portfolio development.</strong>. He is committed to helping
        students refine their architectural skills and excel in presenting their
        work effectively.
      </p>
    ),
    previewImagesSrc: ['src/assets/tutors/tutor3_info_1.png']
  },
  {
    imgSrc: "../src/assets/tutors/tutor4.png",
    subject: "Generative design",
    avatarSrc: "../src/assets/tutors/lawrence.png",
    name: "Laurence L.",
    qualification: "Graduate from USC",
    description: (
      <p className={styles.description}>
        Laurence L. is an experienced <strong>architectural tutor</strong> at
        our agency, known for her expertise in,{" "}
        <strong>conceptual design, 3D modelling</strong>, and{" "}
        <strong>portfolio development.</strong>. She is committed to helping
        students refine their architectural skills and excel in presenting their
        work effectively.
      </p>
    ),
    previewImagesSrc: ['src/assets/tutors/tutor4_info_1.svg']
  },
];

/**
 * The hero component containing text, contact button, and a hero image
 */
export default forwardRef(function TutorPage(props, ref) {
    const [selectedTutor, setSelectedTutor] = useState(null);

    function handleSelectTutor(tutor) {
        setSelectedTutor(tutor);
    }

    // By setting the selected tutor to null, the tutor info page will be hidden.
    function handleCloseTutorInfo() {
        setSelectedTutor(null);
    }

    return (
        <div className={styles.container} ref={ref}>
            <SectionTitle
                title="Meet Our Tutors"
                subtitle="All teachers have architectural backgrounds and advanced studies in multiple fields"
            />
            <section className={styles.tutorGridContainer}>
                {tutors.map((tutor) => (
                    <TutorGrid
                        key={tutor.imgSrc}
                        tutor={tutor}
                        onSelectTutor={() => handleSelectTutor(tutor)}
                    />
                ))}
                <TutorGrid blank={true} tutor={{}} />
            </section>
            {selectedTutor && (
                <section className={styles.tutorInfoContainer}>
                    <TutorInfo
                        tutor={selectedTutor}
                        onSelectTutor={handleSelectTutor}
                        onCloseTutorInfo={handleCloseTutorInfo}
                    />
                </section>
            )}
        </div>
    );
})
