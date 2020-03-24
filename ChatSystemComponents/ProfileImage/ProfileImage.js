import React from 'react'
import styles from './ProfileImage.module.scss'

import ICON_profile from '../../assets/images/ICON_user.png'

function ProfileImage({ online, unread, image }) {
    return (
        <div className={styles.ProfileImage} style={{backgroundImage: `url(${image})`}}>
            {unread && <div className={styles.ProfileImage_unread}>!</div>}
            <div className={styles.ProfileImage_status} style={{ backgroundColor: online ? '#4caf50' : '#f44336' }}></div>
        </div>
    )
}

export default ProfileImage