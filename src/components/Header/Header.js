import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <h1 className='titulos'>{props.greetings}</h1>
    )
}

export default Header