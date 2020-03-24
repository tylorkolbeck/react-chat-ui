import React, { useState } from 'react'
import styles from './UserSearch.module.scss'

import ICON_search from '../../assets/images/ICON_search.png'
import Input from '../Input/Input'

function UserSearch() {
    const [userSearch, setUserSearch] = useState('')
    return (
        <div className={styles.UserSearch_container}>
            <div>
                <Input 
                    value={userSearch}
                    onChange={() => setUserSearch(userSearch)}
                    placeholder='Search For User'
                    icon={ICON_search}/>
            </div>
            
        </div>
    )
}

export default UserSearch