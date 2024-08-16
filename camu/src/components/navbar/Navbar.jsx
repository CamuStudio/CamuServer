import styles from "./Navbar.module.css"
import {useState} from "react";

const navSelections = ['Home', 'Lessons', 'Blog', 'Contact us'];

const NavBar = function({onScrollToSection}) {

    const [selectedButton, setSelectedButton] = useState('Home');

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src='public/logo.png' alt='logo'/>
            </div>
            <div className={styles.buttons}>
                {navSelections.map((selection, i) => (
                    <button key={i}
                            className={styles.button}
                            style={selection === selectedButton ? {backgroundColor: 'var(--m-3-state-layers-light-primary-opacity-012)'} : {}}
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