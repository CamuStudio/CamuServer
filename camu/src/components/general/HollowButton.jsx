import styles from './HollowButton.module.css'

export default function HollowButton({onClick, children}) {
    return (
        // <button className={styles.hollowButton} onClick={onClick}>
        //     <section className={styles.contents}>
        //         <span className={styles.text}>{text}</span>
        //         {children}
        //     </section>
        // </button>
        <button className={styles.hollowButton} onClick={onClick}>
            <section className={styles.contents}>
                {children}
            </section>
        </button>
    )
}