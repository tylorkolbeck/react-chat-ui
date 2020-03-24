import React, { useRef, useEffect } from 'react'
import styles from './UserChat.module.scss'
import { connect } from 'react-redux'

import ProfileImage from '../ProfileImage/ProfileImage'
import ChatBubble from '../../ChatSystemComponents/ChatBubble/ChatBubble'
import BackArrowSVG from '../../assets/images/ICON_back_left'
import MenuDots from '../MenuDots/MenuDots'

const individualChatMenuItems = [
    'Delete Chat', 
    'Mark As Read', 
    'Silence Notifications'
]

const profileImages = require.context('../../assets/images/', true)


function UserChat({ chatData, toggleChat, deleteChat, markAsRead }) {
    const { name, role, online, messages, id, active } = chatData
    let recentMessage = messages[0][1]
    let recentMessageTime = messages[0][0]


    useEffect(() => {
        messageBoxRef.current.scrollIntoView()
    }, [active, messages.length])

    let messageBoxRef = useRef(null)

    function menuOptionSelectedHandler(optionsIndex) {
        switch(optionsIndex) {
            case 0: 
                deleteChat(chatData.id)
                return 
            case 1:
                markAsRead(chatData.id)
                return 
            case 2:
                console.log('Silence chat not implemented yet.')
            default:
                console.log('CASE DOES NOT EXIST IN UserChat')
        }
    }

    // Chat when it is not expanded to show messages
    function ChatCollapsed() {
        return (
            <div className={styles.UserChat_information}>
                <p className={styles.UserChat_message_time}>{recentMessageTime}</p>

                <div>
                    <h2>{name}<span>{role}</span></h2>
                    <p>{recentMessage}</p>
                </div>

                <div className={styles.UserChat_MenuDots_container}>
                    <MenuDots
                        menuItems={individualChatMenuItems}
                        optionClicked={menuOptionSelectedHandler} />
                </div>
            </div>
        )
    }

    // Chat when it is expanded to show messages
    function ChatOpen() {
        return (
            <div className={styles.UserChat_information_open}>
                <div className={styles.UserChat_back_arrow_wrapper} style={{ position: 'absolute', height: '15px' }}>
                    <BackArrowSVG />
                </div>
                <h2>{name}</h2>
                <p>{role}</p>
            </div>
        )
    }

    const chatStyling = active ? styles.UserChat_open : styles.UserChat_collapsed

    return (
        <div className={styles.UserChat_container}>
            <div className={chatStyling} onClick={() => toggleChat(id)}>
                {/* If a chat is open then do not show the profile image */}
                {!active && <div className={styles.UserChat_profile_image}>
                    <ProfileImage image={profileImages(`./${chatData.profileImage}`)} online={online} unread={chatData.unread} />
                </div>}
                {active ? ChatOpen() : ChatCollapsed()}
            </div>

            {/* THE MESSAGES */}
            <div className={styles.UserChat_messages_container} style={{ display: active && 'block' }}>
                {messages.map((message, index) => {
                    return <ChatBubble
                        key={`chat_${chatData.id}_${index}`}
                        message={message[1]}
                        timeSent={message[0]}
                        sentOrRecieved={message[2]} />
                })}

                {/* Reference for scrolling to bottom of chat */}
                <div ref={messageBoxRef}></div>
            </div>
        </div>
    )
}


const MapDispatchToProps = dispatch => {
    return {
        deleteChat: (chatId) => dispatch({type: 'CHAT_DELETE_CHAT', chatId}) ,
        markAsRead: (chatId) => dispatch({type: 'CHAT_MARK_AS_READ', chatId})
    }
}

export default connect(null, MapDispatchToProps)(UserChat)