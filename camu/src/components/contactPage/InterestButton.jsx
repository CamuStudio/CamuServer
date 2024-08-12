import styles from './InterestButton.module.css'
import {useState} from "react";

export default function InterestButton({interest, onClick}) {

    const [selected, setSelected] = useState(false);

    /**
     * Function to handle toggling the "selected" state, and pass the selected interest to the parent.
     * @param e button click event
     */
    function handleSelected(e) {
        e.preventDefault();
        setSelected(!selected);
        onClick(e, interest);
    }

    return (
        <button
            className={selected ? styles.selectedButton: styles.button}
            onClick={handleSelected}>
            {interest}
        </button>
    )
}