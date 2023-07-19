import React from 'react'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className='m-0 pt-2 pb-2 bg-dark d-flex align-center flex-direction-column'>
            <Logo />
            <p className='text-center'>
                &copy; All Rights Reserved. {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer