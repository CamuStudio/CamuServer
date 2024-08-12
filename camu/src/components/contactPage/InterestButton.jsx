import styles from './InterestButton.module.css'
import {useState} from "react";

export default function InterestButton({interest, onClick, selectedByDefault=false, children}) {

    const [selected, setSelected] = useState(selectedByDefault);

    /**
     * Function to handle toggling the "selected" state, and pass the selected interest to the parent.
     * @param e button click event
     */
    function handleSelected(e) {
        e.preventDefault();
        // if (selectedByDefault) {
        //     console.log("Selected by default!");
        //     onClick(e, interest)
        //     return;
        // }
        setSelected(!selected);
        onClick(e, interest);
    }

    return (
        <button
            className={selected ? styles.selectedButton: styles.button}
            onClick={handleSelected}>
            <div className={styles.contents}>
                <span>{interest}</span>
                {children}
            </div>
        </button>
    )
}