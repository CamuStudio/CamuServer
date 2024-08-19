import styles from "./Navbar.module.css"
import {useState} from "react";
import {Link} from "react-router-dom";

const navSelections = [
    {'name': 'Home', 'linkTo': '/',},
    {'name': 'Lessons', 'linkTo': '/lesson',},
    {'name': 'Blog', 'linkTo': '/blog',},
    {'name': 'Contact us', 'linkTo': '/',}
];

const NavBar = function({onScrollToSection}) {

    const [selectedButton, setSelectedButton] = useState('Home');

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src='src/assets/general/logo.png' alt='logo'/>
            </div>
            <div className={styles.buttons}>
                {navSelections.map((selection, i) => (
                    <Link key={i} to={selection.linkTo} className={styles.link}>
                        <button key={i}
                                className={styles.button}
                                style={selection.name === selectedButton ? {backgroundColor: 'var(--m-3-state-layers-light-primary-opacity-012)'} : {}}
                                onClick={() => {
                                    setSelectedButton(selection.name)
                                    onScrollToSection(selection.name)
                                }}
                        >
                            {selection.name}
                        </button>
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default NavBar;