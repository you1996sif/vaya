
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStyles from './Style'
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
            <Grid container spacing={4} paddingLeft={8} justifyContent="space-evenly" >

                <Grid item container xs={11.7} sm={11.7} md={4.5} lg={4.5} xl={4.5} spacing={3}>
                    <Grid item xs={12} className={classes.shownew}>
                        <div className={classes.shownew1}>
                            <p className={classes.p}> حول  </p>
                            <hr className={classes.hr} />
                            <h3 className={classes.h3}>.مزيلات المكياج او السيروم الذي سيعيد تألق بشرتك <br />
                                أختاري ما يناسبك من بين مستحضرات العناية بالبشرة سواء كان لديك بشرة حساسة او دهنية او جافة او مختلطة
                            </h3>

                        </div>
                    </Grid>
                    <Grid item xs={12} spacing={2} >
                        <div>
                            <p className={classes.p}> لماذا تختار منتجاتنا؟  </p>
                            <hr className={classes.hr1} />
                            <h3 className={classes.h3}>مواد طبيعية <br />
                                خالية من المواد الحافظة <br/>
                                مصنعة يدويا <br/>
                                تحافظ على فوائد المواد المستخدمة                            </h3>
                        </div>
                    </Grid>
                </Grid>
                <Grid data-aos="zoom-in" data-aos-duration='2500' item xs={11.7} sm={11.7} md={5.2} lg={5.2} xl={5.2} display={{ xs: "block", sm: "block", lg: "block", md: "block", xl: "block" }} >
                    <Item className={classes.Heropic1}> </Item>
                </Grid>
            </Grid>
        </Box>
    );
}