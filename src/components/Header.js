import { AppBar, Grid, LinearProgress, TextField, Toolbar } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Logo from './Logo'
import { useMediaQuery } from 'react-responsive'
import DarkModeToggle from './DarkModeToggle'
import { TERTIARY_COLOR } from '../styles/colors'

const Header = ({ keyword, fetching }) => {    
    const history = useHistory()
    const sm = useMediaQuery({ query: '(max-width: 900px)' })

    return (
        <>
            <AppBar position="fixed">
                <Toolbar style={{ background: TERTIARY_COLOR }}>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={2}>
                            <Logo />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField  
                                fullWidth value={keyword} id="keyword-input" placeholder='Search Artist...'
                                onChange={(e) => {
                                    history.push(`/search/${e.target.value}`)
                                }}
                            />
                        </Grid>
                        {
                            !sm &&
                            <Grid item xs={1} container justifyContent={'flex-end'} alignItems='center'>
                                <DarkModeToggle />
                            </Grid>
                        }
                    </Grid>
                </Toolbar>
                {fetching && <LinearProgress />}
            </AppBar>
        </>
    )
}

export default Header