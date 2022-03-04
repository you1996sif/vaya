import React, { useState, useRef, useEffect, } from 'react'
// import { Route, Redirect } from 'react-router'

import BasicSelect from './BasicSelect'
import Menu from './PositionedMenu'
import useStyles from './Style'
import logo from '../Header/Pics/logo.png'
import LinkScroll from './partial/LinkScroll'
import Link from "@material-ui/core/Link";
// import './styleFont.css'

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
                    showCart && <div ref={wrapperRef}  className={classes.test}>
                        <div style={{ padding: '1rem', borderRadius: '10px', width: '94%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                            <div>
                                <p >3000 د.ع</p>
                                <p>ازالة</p>
                            </div>
                            <div>
                                <p id="h">اوليفيرا</p>
                                <p>مرطب</p>
                            </div>
                            <div>
                                <img src={logo} style={{ width: '100px', borderRadius: '20px', height: '100px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div style={{ padding: '1rem', borderRadius: '10px', width: '94%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                            <div>
                                <p >3000 د.ع</p>
                                <p>ازالة</p>
                            </div>
                            <div>
                                <p id="h">اوليفيرا</p>
                                <p>مرطب</p>
                            </div>
                            <div>
                                <img src={logo} style={{ width: '100px', borderRadius: '20px', height: '100px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div style={{ padding: '1rem', borderRadius: '10px', width: '94%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                            <div>
                                <p >3000 د.ع</p>
                                <p>ازالة</p>
                            </div>
                            <div>
                                <p id="h">اوليفيرا</p>
                                <p>مرطب</p>
                            </div>
                            <div>
                                <img src={logo} style={{ width: '100px', borderRadius: '20px', height: '100px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div style={{ padding: '1rem', borderRadius: '10px', width: '94%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                            <div>
                                <p >3000 د.ع</p>
                                <p>ازالة</p>
                            </div>
                            <div>
                                <p id="h">اوليفيرا</p>
                                <p>مرطب</p>
                            </div>
                            <div>
                                <img src={logo} style={{ width: '100px', borderRadius: '20px', height: '100px', objectFit: 'cover' }} />
                            </div>
                        </div>
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
            <div className={classes.logo}>
                <Link to="/" href="/" className={classes.vaya}  
                 
                    > ڤــايـا</Link>
            </div>
            {/* <img src={logo} alt="Logo" /> */}
        </div>
    )
}

export default Header


