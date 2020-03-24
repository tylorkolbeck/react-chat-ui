import React from 'react'
import styles from './ChatBox.module.scss'
import UserChat from '../UserChat/UserChat'

/**
 * 
 * @param {function} toggleChat Toggle all chats to closed and open the chat that was selected 
 */

function ChatBox({ chatData, toggleChat, chatOpen, toggleRead }) {
    let chatBoxes
    if (!chatOpen) {
        chatBoxes = chatData.map(chat => {
            return (
                <UserChat 
                    key={chat.id}
                    toggleChat={toggleChat}
                    chatData={chat}/>
            )
        })
    } else {
        chatData.map(chat => {
            if (chatOpen === chat.id) {
                chatBoxes = <UserChat 
                    key={chat.id}
                    toggleChat={toggleChat}
                    chatData={chat}/>
            }
        })

    }

    return (
        <div 
            style={{overflowY: chatOpen ? 'none' : 'auto'}}
            className={styles.ChatBox_container}>
            {chatBoxes}
        </div>
    )
}

ChatBox.defaultProps = {
    chatData: []
}



export default ChatBox