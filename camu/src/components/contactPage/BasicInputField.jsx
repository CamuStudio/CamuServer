import styles from "./BasicInputField.module.css";

export default function BasicInputField({name, value, onChange}) {
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label className={styles.label}>{name}</label>
        </div>
    )
}