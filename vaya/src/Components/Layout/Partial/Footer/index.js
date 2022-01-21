import React from 'react'
import useStyles from './Style'
import logo from '../Header/Pics/logoTrans.webp'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.root} id="footer">
            <div>
                <img className={classes.logo2} src={logo} alt="Logo2" />
            </div>

            <div className={classes.paragraph}>
                .فايا هي شركة ناشئة تهتم<br />
                بصناعة منتجات العناية بالبشرة من مواد طبيعية عضوية
            </div>

            <div className={classes.icons}>
                <IconButton style={{ color: 'white' }}>
                    <Icon icon="mdi:facebook" />
                </IconButton>
                <IconButton style={{ color: 'white' }}>
                    <TwitterIcon />
                </IconButton>
                <IconButton style={{ color: 'white' }}>
                    <InstagramIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Footer


