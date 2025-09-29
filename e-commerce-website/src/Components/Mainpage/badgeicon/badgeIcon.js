
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './badgeIcon.module.css';
const BadgeIcon = ({ icon , count }) => {
    return (
        <div className={styles.badgeIconContainer}>
            <div className={styles.icon}> 
                <FontAwesomeIcon icon={icon}/>
            </div>
            {count >= 0 && <div className={styles.badge}>{count}</div>}
        </div>
    );
}
export default BadgeIcon;