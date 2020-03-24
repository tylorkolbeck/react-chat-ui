import React from 'react'
import styles from './Input.module.scss'

// import Icon_search from '../../assets/images/ICON_search.png'

function Input({ placeholder, value, icon, style, onChange }) {
    return (
        <div className={styles.Input_container}>
            {icon &&
                <div className={styles.Input_search_icon}>
                    <img src={icon} alt='search'></img>
                </div>}

            <input 
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                style={style}>
            </input>
        </div>
    )
}

Input.defaultProps = {
    placeholder: 'No placeholder specified',
    value: ''
}

export default Input