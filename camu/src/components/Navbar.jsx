import styles from "./Navbar.module.css"
export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src='/public/logo.png' alt='logo'/>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}>Lesson</button>
                <button className={styles.button}>Blog</button>
                <button className={styles.button}>Career</button>
                <button className={styles.button}>Contact us</button>
            </div>
        </nav>
    )
}