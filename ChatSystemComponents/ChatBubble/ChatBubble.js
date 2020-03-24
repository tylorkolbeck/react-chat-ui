import React from 'react'
import styles from './ChatBubble.module.scss'

function ChatBubble({ message, timeSent, sentOrRecieved }) {
    let chatClass = sentOrRecieved ? styles.recieved : styles.sent

    return (
        <div className={[styles.ChatBubble_container, chatClass].join(' ')}>
            <div className={styles.ChatBubble_timeSent}>{timeSent}</div>
            <p>{message}</p>
        </div>
    )
}

export default ChatBubble