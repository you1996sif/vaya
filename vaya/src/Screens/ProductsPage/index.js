import React, { useEffect } from 'react';
import useStyles from './style';
import ProductCard from '../../Components/ProductCard';

import Image from '../../Screens/HomePage/Partial/pics/HeroSection1.jpg';
import Image1 from '../../Screens/HomePage/Partial/pics/HeroSection2.jpg';
import Image2 from '../../Screens/HomePage/Partial/pics/HeroSection3.jpg';
import Image3 from '../../Screens/HomePage/Partial/pics/HeroSection4.jpg';
import BasicSelect from './Partial/BasicSelect';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';





const ProductsPage = () => {
    const [filterval, setFilterval] = React.useState('');
    const [arrayForFilter, setArrayForFilter] = React.useState([]);
    const arrayformapComponents = [1, 2, 3]
    const handleChange = (event) => {
        setFilterval(event.target.value);
    };
    const navigate = useNavigate();
    const label = ""

    function valuetext(value) {
        return `${value}°C`;
    }
    const [value, setValue] = React.useState([1000, 100000]);
    console.log('value[0]', value[0]);
    console.log('value[1]', value[1]);

    const handleChange1 = (event, newValue) => {
        setValue(newValue)
    };
    // const [price, setPrice] = React.useState(0);
    // const handleInput = (e) => {
    //     setPrice(e.target.value);
    // }
    const array = [
        { id: '1', name: "1اولفيرا", price: "10.000", type: "1مرطب", image: Image },
        { id: '11', name: "1اولفيرا", price: "1", type: "1مرطب", image: Image },
        { id: '111', name: "1اولفيرا", price: "1", type: "1مرطب", image: Image },
        { id: '1111', name: "1اولفيرا", price: "2", type: "مرطب", image: Image1 },

        { id: '12', name: "اولفيرا", price: "2", type: "مرطب", image: Image1 },
        { id: '122', name: "اولفيرا", price: "2", type: "مرطب", image: Image1 },
        { id: '1222', name: "اولفيرا", price: "3", type: "مرطب", image: Image2 },
        { id: '12222', name: "اولفيرا", price: "3", type: "مرطب", image: Image2 },

        { id: '13', name: "اولفيرا", price: "3", type: "مرطب", image: Image2 },
        { id: '133', name: "اولفيرا", price: "4", type: "مرطب", image: Image3 },
        { id: '1333', name: "اولفيرا", price: "4", type: "مرطب", image: Image3 },
        { id: '13333', name: "اولفيرا", price: "4", type: "مرطب", image: Image3 },

        { id: '14', name: "اولفيرا", price: "5", type: "مرطب", image: Image2 },
        { id: '144', name: "اولفيرا", price: "5", type: "مرطب", image: Image2 },
        { id: '1444', name: "اولفيرا", price: "5", type: "مرطب", image: Image2 },
        { id: '14444', name: "اولفيرا", price: "6", type: "مرطب", image: Image2 },
        { id: '15', name: "اولفيرا", price: "6", type: "مرطب", image: Image2 },
        { id: '155', name: "اولفيرا", price: "6", type: "مرطب", image: Image2 },
        { id: '1555', name: "اولفيرا", price: "7", type: "مرطب", image: Image2 },
        { id: '15555', name: "اولفيرا", price: "7", type: "مرطب", image: Image2 },
        { id: '155555', name: "اولفيرا", price: "7", type: "مرطب", image: Image2 },
        { id: '16', name: "اولفيرا", price: "1023.4", type: "مرطب", image: Image3 },
        { id: '166', name: "اولفيرا", price: "1023.4", type: "مرطب", image: Image3 },
        { id: '1666', name: "اولفيرا", price: "1023.4", type: "مرطب", image: Image3 },
    ];
    const arrayOfoptinsOfcategories = [
        { value: 'شامبو', label: "شامبو" },
        { value: 'صابون', label: "صابون" },
        { value: 'كريم', label: "كريم" },
    ];
    const arrayOfoptinsOfprice = [
        { value: '10.000', label: "10.000" },
        { value: '20.000', label: '20.000' },
        { value: '30.000', label: '30.000' },
    ];
    const arrayOfoptinsOfSize = [
        { value: '200ml', label: "200ml" },
        { value: '500ml', label: "500ml" },
        { value: '1000ml', label: "1000ml" },
    ];

    const classes = useStyles()

    useEffect(() => {
        setArrayForFilter(array.filter(e => (e.type.toUpperCase().indexOf(filterval.toUpperCase()) !== -1
            || e.name.toUpperCase().indexOf(filterval.toUpperCase()) !== -1)))
    }, [filterval])

    // useEffect(() => {
    //     setArrayForFilter(array.filter(hotel => { return hotel.price > parseInt(price, 10) }))
    // }, [price])
    useEffect(() => {
        setArrayForFilter(array.filter(hotel => { return hotel.price > value[0] && hotel.price < value[1] }))
    }, [value])

    return <div className={classes.root}>
        <div className={classes.top}>
            المنتجات

        </div>
        <div className={classes.container}>
            <div className={classes.products}>
                {
                    arrayForFilter.map((item) => (
                        <ProductCard key={item.id} onClick={() => navigate(`/productinfo/${item.id}`)} {...item} image={item.image} customStyle={classes.root2} />
                    ))
                }
            </div>
            <div style={{ width: '3%' }}></div>
            <div className={classes.rightbar}>
                {/* {
                    arrayformapComponents.map(e => <BasicSelect handleChange={handleChange} filterval={filterval} classes={classes.formcontrol} />)
                } */}


                <BasicSelect handleChange={handleChange} filterval={filterval} classes={classes.formcontrol} label={'الصنف'} arrayOfoptins={arrayOfoptinsOfcategories} />
                {/* <BasicSelect handleChange={handleChange} filterval={filterval} classes={classes.formcontrol} label={'السعر'} arrayOfoptins={arrayOfoptinsOfprice}/> */}
                <BasicSelect handleChange={handleChange} filterval={filterval} classes={classes.formcontrol} label={'الحجم'} arrayOfoptins={arrayOfoptinsOfSize} />

                {/* 
                <input value={price} type="range" onInput={handleInput} />
                <h1>Price: {price}</h1> */}
                <Box sx={{ width: 300 }} className={classes.pricesec}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        max={100000}
                        step={250}
                        size={'small'}
                        sx={{width:'262px' , marginLeft:'12px'}}
                    />
                    <h4 className={classes.price}>
                        <span className={classes.pricespan}>
                            {value[0]}  - {value[1]} IQD
                        </span>                    السعر
                    </h4>

                </Box>


            </div>
        </div>
    </div>;
};

export default ProductsPage;
