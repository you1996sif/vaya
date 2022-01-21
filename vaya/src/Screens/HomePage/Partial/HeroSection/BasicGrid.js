
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStyles from './Style'
import Heropic4 from '../pics/HeroSection4.jpg'
import { Button } from '@mui/material';
import Aos from "aos";
import "aos/dist/aos.css";
import Item from '../../../../Components/Item';


export default function BasicGrid() {
    const classes = useStyles()
    useEffect(() => {
        Aos.init({ duration: 1000, offset: 50, once: true });
    }, [])

    const [readeMore, setReadeMore] = useState(false);

    return (
        <Box sx={{ flexGrow: 1 }} className={classes.grids} >
            <Grid container spacing={3} paddingLeft={8}>
                <Grid item xs={11.5} className={classes.itemparagaphs}>
                    <Item className={classes.itemparagaphs}  >
                        <h1 className={classes.p1}>منتجات مصنوعة من مواد طبيعية</h1>
                        <h2 className={classes.p2}>فــايــا ملكة من العصر الآشوري كانت رمزا للجمال
                            <br /> والنظارة التي يتمتع بها الآشوريون القدماء نتيجة لعنايتهم الدائمة بالبشرة بمواد مستخلصة <br /> من ارضهم الخصبة أرض نينوى</h2>
                        {
                            readeMore && (
                                <>
                                    <h1 className={classes.p1}>منتجات مصنوعة من مواد طبيعية</h1>
                                    <h2 className={classes.p2}>فــايــا ملكة من العصر الآشوري كانت رمزا للجمال
                                        <br /> والنظارة التي يتمتع بها الآشوريون القدماء نتيجة لعنايتهم الدائمة بالبشرة بمواد مستخلصة <br /> من ارضهم الخصبة أرض نينوى</h2>

                                </>
                            )
                        }
                        <Button variant='outlined' onClick={() => setReadeMore(!readeMore)}>{
                            readeMore ? 'أخفاء التفاصيل' : 'أقرأ المزيد'
                        }</Button>
                    </Item>
                </Grid>

                <Grid data-aos="zoom-in" data-aos-duration='2500' spacing={3} item xs={11.5} sm={11.5} md={7} lg={7} xl={7} display={{ xs: "block", sm: "block", lg: "block", md: "block", xl: "block" }} >
                    <Item className={classes.Heropic1}> </Item>
                </Grid>
                <Grid item container xs={11.5} sm={11.5} md={4.5} lg={4.5} xl={4.5} spacing={3}>
                    <Grid data-aos="fade-up" data-aos-duration='2500' item xs={12} >
                        <Item className={classes.Heropic2} > </Item>
                    </Grid>
                    <Grid item container xs={12} spacing={2} >
                        <Grid data-aos="fade-left" data-aos-duration='2500' item xs={6} >
                            <Item className={classes.Heropic3}> </Item>
                        </Grid>
                        <Grid data-aos="fade-right" data-aos-duration='2500' item xs={6} >
                            <Item className={classes.Heropic4}> </Item>
                        </Grid>
                        {/* <Item>
                            scwccwcw
                        </Item> */}
                    </Grid>
                    {/* <Grid item xs={6}>
                        <Item><img className={classes.Heropic4} src={Heropic1} alt="Heropic2" /></Item>
                    </Grid> */}
                </Grid>
            </Grid>
        </Box>
    );
}