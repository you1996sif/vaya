import BasicGrid from './BasicGrid'
import React from 'react'
import useStyles from './Style'


const HeroSection = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.r1} id="About"></div>
            <BasicGrid />
        </div>
    )
}

export default HeroSection
