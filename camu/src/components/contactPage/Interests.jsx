import styles from "./Interests.module.css";
import InterestButton from "./InterestButton.jsx";
import {useState} from "react";
import AddInterestInputField from "./AddInterestInputField.jsx";

export default function Interests({interests, onSelect, onAddNewInterest}) {

    const [showAddInterestField, setShowAddInterestField] = useState(false)
    const [newInterests, setNewInterests] = useState(new Set())

    /**
     * The function to handle adding new interests
     * @param newInterest the new interest to be added
     */
    function handleAddNewInterest(newInterest) {
        console.log('newInterest received!');
        setNewInterests(prev => (new Set(prev)).add(newInterest));
        onAddNewInterest(newInterest);

        // Add one interest, and hide the input field.
        setShowAddInterestField(!showAddInterestField);
    }

    /**
     * The function to remove a new interest
     * @param newInterest the new interest to be added
     */
    function removeNewInterest(newInterest) {
        setNewInterests(prev => {
            prev.delete(newInterest);
            return new Set(prev);
        });
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
                    {Array.from(newInterests).map((newInterest, index) => (
                        <div key={index}>
                            <InterestButton
                                interest={newInterest}
                                onClick={onSelect}
                                selectedByDefault={true}
                            >
                                <img className={styles.deleteInterestIcon}
                                     src='/src/assets/general/plus.svg'
                                     alt='delete_interest'
                                     onClick={() => removeNewInterest(newInterest)}
                                />
                            </InterestButton>
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