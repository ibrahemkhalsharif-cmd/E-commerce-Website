import styles from '../Mainpage/mainpage.module.css';
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerTextContainer}>
                <div className={styles.footerFirstSection}>
                    <div className={styles.textColumnOne}>
                        <p>Home</p>
                        <p>Testimonials</p>
                        <p>About</p>
                        <p>Contact</p>

                    </div>
                    <div className={styles.textColumnTwo}>
                        <p>New Arrivals</p>
                        <p>Collections</p>
                        <p>Accessories</p>


                    </div>
                    <div className={styles.textColumnThree}>
                        <p>Account</p>
                        <p>Favourites</p>
                        <p>Cart</p>

                    </div>
                    <div className={styles.textColoumnFour}>
                        <p>Search</p>

                    </div>


                </div>
                <div className={styles.footerSecondSection}>
                    <div className={styles.firstHalf}>
                        <p className={styles.storeHour}>Store hours</p>
                        <div className={styles.dayContainer}>
                            <p className={styles.dayOne}>Mon-Fri</p>
                            <p className={styles.dayTwo}>Saturday</p>
                            <p className={styles.dayThree}> Sunday</p>

                        </div>
                        <p className={styles.dayFour}>Public holidays</p>
                    </div>
                    <div className={styles.secondHalf}>
                        <p className={styles.dayOne}>9:00 - 18:00</p>
                        <p className={styles.dayTwo}>9:00 - 14:00</p>
                        <p className={styles.dayThree}>Closed</p>
                        <p className={styles.dayFour}>Closed</p>

                    </div>

                </div>
                <div className={styles.footerThirdSection}>
                    <p>
                        Email: example@gmail.com
                    </p>
                    <p>Number: +27 84 652 6110</p>
                    <div className={styles.footerIcon}>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faXTwitter} />


                    </div>

                </div>


            </div>

        </div>
    );
}