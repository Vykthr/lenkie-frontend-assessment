import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import FullScreenLoader from './FullScreenLoader'

const PageContainer = ({ children, pageTitle, keyword, fetching = false, fullscreenLoader = false }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            { pageTitle && <Helmet><title>{pageTitle} | Deezer</title></Helmet> }

            { fullscreenLoader && fetching && <FullScreenLoader /> }

            <Header keyword={keyword} fetching={fetching} />

            <div className='flex-1 pt-6 pb-6'>
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default PageContainer