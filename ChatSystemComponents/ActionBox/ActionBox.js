import React from 'react'
import styles from './ActionBox.module.scss'

function ActionBox({chatOpen}) {
    return (
        <div className={styles.ActionBox_container} style={{display: chatOpen ? 'block' : 'none'}}>
            <div className={styles.ActionBox_buttons}>
                <div> Button</div>
                <div> Button</div>
                <div> Button</div>
                <div> Button</div>
            </div>
            <div className={styles.ActionBox_buttons}>
                <div> Button</div>
                <div> Button</div>
                <div> Button</div>
                <div> Button</div>
            </div>
        </div>
    )
}

export default ActionBox

