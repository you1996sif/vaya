import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStyles from './Style'
import Aos from "aos";
import "aos/dist/aos.css";
import Item from '../../../../Components/Item';
import Image from './Rectangle317.png';
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const ContactUs = () => {
    const classes = useStyles();
    return <div>
        {/* <Box sx={{ flexGrow: 1 }}  > */}
        <Grid item xs={12} sm={12} lg={12} md={12} xl={12} style={{ height: '100px' }} ></Grid>

        <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
            <div style={{
                backgroundImage: `url(${Image})`, height: '300px', backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // borderRadius: '15px'
                display: 'flex', justifyContent: 'center',
            }}>
                <div style={{
                    width: '40%', height: '200px', backgroundColor: '#fff', opacity: '0.8', boxShadow: '5px 10px 18px #888888', marginTop: '-100px', borderRadius: '20px',
                    display: 'flex', justifyContent: 'space-between', padding: '2rem'
                }}>
                    <div><h4 style={{ textAlign: 'center' }}>المكتب</h4><h5 style={{ color: '#424242' }}>العراق نينوى</h5></div>
                    <div className={classes.contact}>
                        <div ><h5 style={{ color: '#424242' }}>تواصل معنا</h5></div>
                        <div><p className={classes.p}>هل لديك أي اقتراح ؟
                            <br />...او تريد ان تقول مرحبا
                        </p></div>
                        <div><a className={classes.insta} href={'https://instagram.com/vaya.n.p?utm_medium=copy_link'} target="_blank" > VAYA-Instgram Page</a></div>
                    </div>
                </div>
            </div>
        </Grid>
        {/* </Box> */}

    </div>;
};

export default ContactUs;
