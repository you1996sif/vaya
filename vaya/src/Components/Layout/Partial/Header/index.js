import React from 'react'
import BasicSelect from './BasicSelect'
import Menu from './PositionedMenu'
import useStyles from './Style'
import logo from '../Header/Pics/logo.png'
import LinkScroll from './partial/LinkScroll'


const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.cart}>
                <div className={classes.cartitem}>سلة</div>
                <div className={classes.menu}><Menu /></div>
                {/* <LinkScroll toSection={"footer"} name={"footer"} /> */}
            </div>
            <div className={classes.container}>
                <div className={classes.About}><LinkScroll toSection={"About"} name={"حول"} /></div>

                {/* <div className={classes.contact}>حول </div> */}
                <div className={classes.footer}> <LinkScroll toSection={"footer"} name={"تواصل معنا"} /></div>

                {/* <div className={classes.about}> تواصل معنا</div> */}
                <div className={classes.products}><BasicSelect /></div>
            </div>
            <div className={classes.logo}>ڤــايـا</div>
            {/* <img src={logo} alt="Logo" /> */}
        </div>
    )
}

export default Header


