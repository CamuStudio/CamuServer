import styles from "./Interests.module.css";
import InterestButton from "./InterestButton.jsx";
import {useState} from "react";
import AddInterestInputField from "./AddInterestInputField.jsx";

export default function Interests({interests, onSelect}) {

    const [showAddInterestField, setShowAddInterestField] = useState(false)
    const [newInterests, setNewInterests] = useState([])

    /**
     * The function to handle adding new interests
     * @param newInterest the new interest to be added
     */
    function handleAddNewInterest(newInterest) {
        console.log('newInterest received!');
        setNewInterests([...newInterests, newInterest]);

        // Add one interest, and hide the input field.
        setShowAddInterestField(!showAddInterestField);
    }

    return (
        <>
            <h4 className={styles.interestTitle}>Interests</h4>
            <section className={styles.interests}>
                {interests.map((interest, index) => (
                    <div key={index}>
                        <InterestButton interest={interest}
                                        onClick={onSelect}/>
                    </div>
                ))}
                <div className={styles.otherInterestButtonContainer}>
                    {newInterests.map((newInterest, index) => (
                        <div key={index}>
                            <InterestButton interest={newInterest}
                                            onClick={onSelect}
                            />
                        </div>
                    ))}
                    <InterestButton interest={'Others'}
                                    onClick={() => setShowAddInterestField(!showAddInterestField)}
                    />
                    {showAddInterestField && (
                        <section className={styles.addInterestField}>
                            <AddInterestInputField onAddNewInterest={handleAddNewInterest}/>
                        </section>
                    )}
                </div>
            </section>
        </>
    )
}