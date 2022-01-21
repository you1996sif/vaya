import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
    const [products, setProducts] = React.useState('');

    const handleChange = (event) => {
        setProducts(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ fontFamily: 'fantasy', color:'black', fontSize:'20px' }}>منتجات</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={products}
                    label="products"
                    onChange={handleChange}
                    variant="standard"
                    disableUnderline
                >
                    <MenuItem value={10}>صابون</MenuItem>
                    <MenuItem value={20}>شامبو</MenuItem>
                    <MenuItem value={30}>لوشن</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
