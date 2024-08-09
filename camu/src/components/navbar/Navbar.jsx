import styles from "./Navbar.module.css"
import {useState} from "react";

const navSelections = ['Home', 'Lessons', 'Blog', 'Contact us'];

const NavBar = function({onScrollToSection}) {

    const [selectedButton, setSelectedButton] = useState('Home');

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src='src/assets/navbar/logo.png' alt='logo'/>
            </div>
            <div className={styles.buttons}>
                {navSelections.map((selection, i) => (
                    <button key={i}
                            className={selection === selectedButton ? styles.selectedButton : styles.button}
                            onClick={() => {
                                setSelectedButton(selection)
                                onScrollToSection(selection)
                            }}
                    >
                        {selection}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default NavBar;