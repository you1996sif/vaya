import React from 'react';
import { makeStyles } from '@mui/styles'

export const GenericStyle = () => {
    let themeProps;
    const funForGetTheme = makeStyles(theme => (
        themeProps = { theme }
    ))
    funForGetTheme()
    let x = 5
    return themeProps;
};

