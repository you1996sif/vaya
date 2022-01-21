import BasicGrid from './BasicGrid'
import React from 'react'
import useStyles from './Style'


const HeroSection = () => {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <BasicGrid/>
        </div>
    )
}

export default HeroSection
