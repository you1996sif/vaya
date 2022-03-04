// import React, { useEffect, useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from "@material-ui/core/Link";

// const [filterval, setFilterval] = React.useState('');


export default function BasicSelect() {
    const [products, setProducts] = React.useState('');

    const handleChange = (event) => {
        setProducts(event.target.value);
    };
    // const handleChange1 = (event) => {
    //     setFilterval(event.target.value);
    // };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ fontFamily: 'fantasy', color: 'black', fontSize: '20px' }}>منتجات</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={products}
                    label="products"
                    onChange={handleChange}
                    variant="standard"
                    disableUnderline
                >
                    {/* <BasicSelect handleChange={handleChange} filterval={filterval} classes={classes.formcontrol} minWidth={"0%"} label={'الحجم'} arrayOfoptins={arrayOfoptinsOfSize} /> */}

                    <MenuItem value={10} containerElement={<Link to="/" />}>

                        صابون</MenuItem>
                    <MenuItem value={20}>شامبو</MenuItem>
                    <MenuItem value={30}>لوشن</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
