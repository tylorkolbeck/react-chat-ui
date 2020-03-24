import React, { useEffect } from 'react'
import styles from './ChatSystemContainer.module.scss'
import { connect } from 'react-redux'

import UserSearch from './ChatSystemComponents/UserSearch/UserSearch'
import ChatBox from './ChatSystemComponents/ChatBox/ChatBox'
// import ActionBox from './ChatSystemComponents/ActionBox/ActionBox' // STILL TRYING TO FIGURE OUT IF WE ARE GOING TO USE THIS
import MessageInputBox from './ChatSystemComponents/MessageInputBox/MessageInputBox'

function ChatSystem(props) {
    useEffect(() => {
        document.addEventListener('keydown', closeChatOnEscapeKey)

        return () => {
            document.removeEventListener('keydown', closeChatOnEscapeKey)
        }
    }, [])

    function closeChatOnEscapeKey(event) {
        if (props.chatState.chatIsOpen && event.keyCode === 27) props.toggleChatOpenOrClosed()
    }

    function toggleChat(id) {
        props.changeActiveChat(id)
        props.toggleRead(id)
    }

    function sendMessageHandler(chatId, message) {
        props.sendMessage(chatId, message)
    }   

    return (
        <div className={styles.ChatSystem_container}>

            {props.chatState.activeChat ? null : <UserSearch />}

            <ChatBox 
                toggleChat={toggleChat} 
                chatOpen={props.chatState.activeChat} 
                chatData={props.chatState.chats}/>

            <MessageInputBox 
                chatId={props.chatState.activeChat}
                sendMessage={sendMessageHandler}/>

            {/* <ActionBox chatOpen={state.activeChat}/> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chatState: state.chatSystem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeActiveChat: (chatId) => dispatch({type: 'CHAT_CHANGE_ACTIVE_CHAT', chatId}),
        sendMessage: (chatId, message) => dispatch({type: 'CHAT_SEND_MESSAGE', chatId, message}),
        toggleRead: (chatId) => dispatch({type: 'CHAT_SET_TO_READ', chatId}),
        toggleChatOpenOrClosed: () => dispatch({type: 'CHAT_TOGGLE_CHAT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatSystem)