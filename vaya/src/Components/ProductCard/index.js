import React from 'react';
import useStyles from './Style';
import Item from '../Item';
import { makeStyles } from '@mui/styles'
import { GenericStyle } from '../GenericStyle';
import classNames from 'classnames';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';







const ProductCard = ({ price, title, type, image, customStyle, onClick }) => {
    const navigate = useNavigate();
    const classes = useStyles()

    return <Tooltip title={"click here to show"}><Item onClick={onClick} className={classNames(classes.root, customStyle)}>
        <div style={{
            backgroundImage: `url(${image})`, height: '80%', backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '25px'
        }}></div>
        <div className={classes.type}> {type}</div>
        <div className={classes.info}>
            <div>{price}</div>
            <div>{title}</div>
        </div>
    </Item>
    </Tooltip>
};

export default ProductCard;
