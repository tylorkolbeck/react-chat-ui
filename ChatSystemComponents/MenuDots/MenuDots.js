import React, { useState, useEffect } from 'react'
import styles from './MenuDots.module.scss'
import useClickOutside from '../../hooks/clickOutside'

function MenuDots({ menuItems, optionClicked }) {
    const { ref, isVisible, setIsVisible } = useClickOutside(false)

    function menuDotsClickedHandler(event) {
        event.stopPropagation()
        if (isVisible) {
            hideMenu()
        } else {
            showMenu()
        }
    }

    function hideMenu() {
        setIsVisible(false)
    }

    function optionSelected(index) {
        setIsVisible(false)
        optionClicked(index)
        hideMenu()
    }

    function showMenu() {
        setIsVisible(true)
    }

    return (
        <div className={styles.MenuDots_wrapper} ref={ref} onClick={menuDotsClickedHandler} name="wrapper"> 
            <div className={styles.MenutDots_dots}>
                <div></div>
                <div></div>
                <div></div>
            </div> 

            {isVisible && <div className={styles.MenuDots_dropdown} >
                {menuItems.map((item, index) => <MenuItem key={index} onClick={optionSelected} index={index}>{item}</MenuItem>)}
            </div>}
        </div>
    )
}

export default MenuDots

function MenuItem({ children, index, onClick }) {
    function optionClickedHandler(index) {
        onClick(index)
    }

    return (
        <p onClick={() => optionClickedHandler(index)}>
            {children}
        </p>
    )
}