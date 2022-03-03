import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Item from '../../../../Components/Item';

const BasicSelect = ({ classes, handleChange, filterval, label, arrayOfoptins, minWidth = '80%' }) => {
    return <div>
        <FormControl variant="filled" sx={{ m: 1, minWidth: minWidth, backgroundColor: 'transparent' }}
            className={classes}>
            <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={filterval}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>الكل</em>
                </MenuItem>
                {
                    arrayOfoptins.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)
                }
                {/* <MenuItem value={'1مرطب'}>الصنف</MenuItem>
                <MenuItem value={'1اولفيرا'}>الحجم</MenuItem>
                <MenuItem value={'2'}>السعر</MenuItem> */}
            </Select>
        </FormControl>
    </div>
};

export default BasicSelect;
