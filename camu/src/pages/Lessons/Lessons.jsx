import styles from './Lessons.module.css';
import LessonsHero from "./sections/LessonsHero.jsx";
import NavBar from "../../components/navbar/Navbar.jsx";
import LessonsGallery from "./sections/LessonsGallery.jsx";

export default function Lessons() {
    return (
        <div className={styles.wrapper}>
            <NavBar onScrollToSection={() => {console.log('haha')}} defaultSelection='Lessons'/>
            <LessonsHero />
            <LessonsGallery />
        </div>
    )
}