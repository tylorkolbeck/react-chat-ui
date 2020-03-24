import React, { useState } from 'react'
import styles from './MessageInputBox.module.scss'

function MessageInputBox({ chatId, sendMessage }) {

    const [messageInput, setMessageInput] = useState('')

    function messageInputHandler(e) {
        setMessageInput(e.target.value)
    }

    function sendMessageHandler(e) {
        e.preventDefault()

        if (messageInput) {
            setMessageInput('')
            sendMessage(chatId, messageInput)
        }

    }

    return (
        <div style={{ display: chatId ? 'block' : 'none' }} className={styles.MessageInputBox_container}>
            <form onSubmit={sendMessageHandler}>
                <div className={styles.MessageInputBox_input_wrapper}>
                    <input
                        value={messageInput}
                        onChange={messageInputHandler}
                        placeholder='Message'>
                    </input>
                    <div className={styles.MessageInputBox_button_container}>
                        <button>
                            Send
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default MessageInputBox