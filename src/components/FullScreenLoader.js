import { LinearProgress } from '@mui/material'
import React from 'react'
import Logo from './Logo'

const FullScreenLoader = () => {
    return (
        <div className='loader'>
            <Logo />
            <LinearProgress />
        </div>
    )
}

export default FullScreenLoader
