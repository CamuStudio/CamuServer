import './App.css'
import NavBar from "./components/navbar/Navbar.jsx";
import HeroPage from "./pages/Hero/HeroPage.jsx";
import ServicePage from "./pages/Service/ServicePage.jsx";
import StrengthPage from "./pages/Strength/StrengthPage.jsx";
import TutorPage from "./pages/Tutor/TutorPage.jsx";
import FAQPage from "./pages/FAQ/FAQPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import {useRef} from "react";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {

    const home = useRef(null);
    const contact = useRef(null);
    const service = useRef(null);
    const strength = useRef(null);
    const tutor = useRef(null);
    const faq = useRef(null);

    /**
     * The function to scroll to certain section by clicking corresponding button on the navbar.

     * @param sectionName the name of the section passed from the Navbar
     */
    function handleScrollToSection(sectionName) {
        switch (sectionName) {
            case "Home":
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                break;
            case "Contact us":
                contact.current?.scrollIntoView({ behavior: "smooth" });
                break;

            case 'Service':
                service.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case 'Strength':
                strength.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case 'Tutor':
                tutor.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case 'FAQ':
                faq.current?.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                break;
        }
    }

    return (
        <div className="wrapper">
            {/*<ScrollToTop />*/}
            <NavBar onScrollToSection={handleScrollToSection} defaultSelection='Home'/>
            <HeroPage ref={home} />
            <ServicePage ref={service} />
            <StrengthPage ref={strength} />
            <TutorPage ref={tutor}/>
            <FAQPage ref={faq}/>
            <ContactPage ref={contact} onSelectSection={handleScrollToSection}/>
        </div>
    )
}

export default App