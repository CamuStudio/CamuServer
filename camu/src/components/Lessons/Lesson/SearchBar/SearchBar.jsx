import styles from './SearchBar.module.css';
import {useState} from "react";

export default function SearchBar({style = {}, hasClearButton = true}) {

    const [searchText, setSearchText] = useState('')

    /**
     * Function that handles submitting the search text
     * Submit an object with searchText, and then set the searchText back to default.
     * @param e submit event (hitting enter button)
     */
    function handleSubmit(e) {
        e.preventDefault()
        const searchTerm = {'searchTerm': searchText};
        console.log(searchTerm)
        setSearchText('')
    }

    return (
        <div style={style} className={styles.container}>
            <div className={styles.iconContainer}
                 onClick={handleSubmit}>
                <img src='src/assets/general/search.svg' alt='Search'/>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search all lessons'
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
            </form>
            {hasClearButton && (
                    <div className={styles.iconContainer}
                         onClick={() => setSearchText('')}>
                        <img src='src/assets/Lessons/lessonHero/cancel.svg' alt='Cancel'/>
                    </div>
                )
            }
        </div>
    )
}