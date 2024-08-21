import styles from './Lessons.module.css';
import LessonsHero from "./sections/LessonsHero.jsx";
import NavBar from "../../components/navbar/Navbar.jsx";
import LessonsGallery from "./sections/LessonsGallery.jsx";
import ContactPage from "../Contact/ContactPage.jsx";
import {useRef} from "react";
import ScrollToTop from "../../utils/ScrollToTop.jsx";

export default function Lessons() {

    const hero = useRef(null);
    const contact = useRef(null);

    /**
     * The function to scroll to certain section by clicking corresponding button on the navbar.
     * @param sectionName the name of the section passed from the Navbar
     */
    function handleScrollToSection(sectionName) {
        switch (sectionName) {
            case "Lessons":
                hero.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case "Contact us":
                contact.current?.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                break;
        }
    }

    return (
        <div className={styles.wrapper}>
            <ScrollToTop />
            <NavBar onScrollToSection={handleScrollToSection} defaultSelection='Lessons'/>
            <LessonsHero ref={hero} onSelectSection={handleScrollToSection}/>
            <LessonsGallery />
            <ContactPage ref={contact} onSelectSection={handleScrollToSection}/>
        </div>
    )
}