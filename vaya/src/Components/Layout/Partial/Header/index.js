import React, { useState,useRef,useEffect } from 'react'
import BasicSelect from './BasicSelect'
import Menu from './PositionedMenu'
import useStyles from './Style'
import logo from '../Header/Pics/logo.png'
import LinkScroll from './partial/LinkScroll'


const Header = () => {
    const classes = useStyles()
    const [showCart, setShowCart] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowCart(false)
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div className={classes.root}>
            <div className={classes.cart}>
                <div className={classes.cartitem} onClick={() => setShowCart(!showCart)} ref={wrapperRef}>سلة</div>
                {
                    showCart && <div ref={wrapperRef} style={{ borderRadius:'30px',padding:'1rem',zIndex: '100000', width: '500px', backgroundColor: 'rgba(0,0,0,0.3)', position: 'absolute', top: '60%' }}>
                        <div style={{ width: '100%', height: '100px ' }}>gfegregerhgerhger</div>
                        <div >gfegregerhgerhger</div>
                        <div >gfegregerhgerhger</div>
                        <div >gfegregerhgerhger</div>
                        <div >gfegregerhgerhger</div>
                    </div>
                }
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


