import styles from "./InputField.module.css";

export default function InputField({name}) {
    return (
        <input
            className={styles.input}
            type="text"
            id={name}
            name={name}
        />
    )
}