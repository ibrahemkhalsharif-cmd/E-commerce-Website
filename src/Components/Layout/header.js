import styles from '../Mainpage/mainpage.module.css'
import {useState} from 'react'
import { faMagnifyingGlass, faHeart, faBagShopping, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BadgeIcon from '../Mainpage/badgeicon/badgeIcon';
import { Link } from 'react-router-dom';
export default function Header({cartCount}) {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearch = () =>{
        setShowSearch(true)

    }

    return (
        <div className={styles.header}>
            <div className={styles.headerText}>
                <h1 className={styles.marckScriptRegular}>Germiston Vintage Clothing</h1>
            </div>
             {showSearch &&(
                <div className={styles.searchSection}>
                    <input type='text' placeholder='Search..' className={styles.searchInput}/>

                </div>
             )}
            <div className={styles.headerIcons}>
                <button className={styles.iconButtonOne} onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <Link to='/cart' className={styles.iconButtonThree}><BadgeIcon icon={faBagShopping} count={cartCount} /></Link>
                <button className={styles.iconButtonFour}><FontAwesomeIcon icon={faUser} /></button>
            </div>
        </div>

    );

}