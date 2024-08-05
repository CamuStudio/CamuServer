import styles from "./Navbar.module.css"
import {useState} from "react";

const navSelections = ['Home', 'Lessons', 'Blog', 'Contact us'];

export default function NavBar() {

    const [selectedButton, setSelectedButton] = useState('Home');

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src='../../public/logo.png' alt='logo'/>
            </div>
            <div className={styles.buttons}>
                {navSelections.map((selection, i) => (
                    <button key={i}
                            className={selection === selectedButton ? styles.selectedButton : styles.button}
                            onClick={() => setSelectedButton(selection)}
                    >
                        {selection}
                    </button>
                ))}
            </div>
        </nav>
    )
}