import styles from "./AddInterestInputField.module.css";
import {useState} from "react";

export default function AddInterestInputField({onAddNewInterest}) {

    const [newInterest, setNewInterest] = useState('');

    function handleSetNewInterest(e) {
        e.preventDefault();
        setNewInterest(e.target.value);
    }

    /**
     * The function to handle adding a new interests and pass it to the parent component.
     * @param e the click event
     */
    function handleAddNewInterest(e) {
        e.preventDefault();
        console.log('newInterest added!');
        onAddNewInterest(newInterest);
    }

    return (
        <div className={styles.container}>
            <input
                autoFocus
                className={styles.input}
                type="text"
                id='newInterest'
                name='newInterest'
                value={newInterest}
                onChange={handleSetNewInterest}
            />
           <img src='src/assets/general/arrow_forward.svg'
                alt='Add Interest'
                className={newInterest ? styles.icon : styles.disabledIcon}
                onClick={handleAddNewInterest}
           />
        </div>
    )
}