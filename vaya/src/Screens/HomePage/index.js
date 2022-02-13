import React from 'react'
import useStyles from './Style'
import HeroSection from './Partial/HeroSection'
import ProductsSection from './Partial/ProductsSection'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import About from './Partial/About';
import ContactUs from './Partial/ContactUs';
;


const HomePage = () => {
    const classes = useStyles()

    return (
        <Box sx={{ flexGrow: 1 }} className={classes.grids} >
            <Grid container spacing={7}>
                <Grid xs={12} sm={12} md={12} lg={12} xl={12} item style={{ borderRadius: '15px', }}>
                    <HeroSection />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} xl={12} item style={{ borderRadius: '15px', }}>
                    <ProductsSection />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} xl={12} item style={{ borderRadius: '15px', }}>
                    <About />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} xl={12} item style={{ borderRadius: '15px', }}>
                    <ContactUs />
                </Grid>

            </Grid>
        </Box>
    )
}

export default HomePage
