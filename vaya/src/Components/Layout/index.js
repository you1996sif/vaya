import React, { } from 'react'
import Header from './Partial/Header'
import Footer from './Partial/Footer'
import useStyles from './Style'

const Layout = ({ children }) => {

    const classes = useStyles(
    )
    return (
        <div>
            <Header />
            <main className={classes.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
