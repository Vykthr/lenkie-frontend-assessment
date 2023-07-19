
import { Grid } from '@mui/material'
import React from 'react'
import PageContainer from '../components/PageContainer'

const Page404 = () => {
  return (
        <PageContainer>
            <Grid className='page-404' container item xs={12} justifyContent='center' alignItems={'center'} flexDirection='column'>
                <h2>Page Not Found</h2>
            </Grid>
        </PageContainer>
    )
}

export default Page404