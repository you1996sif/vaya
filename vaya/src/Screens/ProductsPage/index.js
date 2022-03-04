import React, { useEffect, useState } from "react";
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

import axios from "axios";




const ProductsPage = () => {
    const [filterval, setFilterval] = React.useState('');
    const [filterval1, setFilterval1] = React.useState("");
    const [arrayForFilter, setArrayForFilter] = React.useState([]);
    const [loading, setLoading] = useState(false)
    const [array, setArray] = useState([])

    const arrayformapComponents = [1, 2, 3]
    const handleChange = (event) => {
        setFilterval(event.target.value);
    };
    const handleChange11 = (event) => {
        setFilterval1(event.target.value);
    };

    // useEffect(() => {
    //     console.log('filterval', filterval)
    // }, [filterval])

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
    // const array = [
    //     { id: '1', title: "1اولفيرا", price: "10.000", type: "1مرطب", image: Image },
    //     { id: '11', title: "1اولفيرا", price: "1", type: "1مرطب", image: Image },
    //     { id: '111', title: "1اولفيرا", price: "1", type: "1مرطب", image: Image },
    //     { id: '1111', title: "1اولفيرا", price: "2", type: "مرطب", image: Image1 },

    //     { id: '12', title: "اولفيرا", price: "2", type: "مرطب", image: Image1 },
    //     { id: '122', title: "اولفيرا", price: "2", type: "مرطب", image: Image1 },
    //     { id: '1222', title: "اولفيرا", price: "3", type: "مرطب", image: Image2 },
    //     { id: '12222', title: "اولفيرا", price: "3", type: "مرطب", image: Image2 },

    //     { id: '13', title: "اولفيرا", price: "3", type: "مرطب", image: Image2 },
    //     { id: '133', title: "اولفيرا", price: "4", type: "مرطب", image: Image3 },
    //     { id: '1333', title: "اولفيرا", price: "4", type: "مرطب", image: Image3 },
    //     { id: '13333', title: "اولفيرا", price: "4", type: "مرطب", image: Image3 },

    //     { id: '14', title: "اولفيرا", price: "5", type: "مرطب", image: Image2 },
    //     { id: '144', title: "اولفيرا", price: "5", type: "مرطب", image: Image2 },
    //     { id: '1444', title: "اولفيرا", price: "5", type: "مرطب", image: Image2 },
    //     { id: '14444', title: "اولفيرا", price: "6", type: "مرطب", image: Image2 },
    //     { id: '15', title: "اولفيرا", price: "6", type: "مرطب", image: Image2 },
    //     { id: '155', title: "اولفيرا", price: "6", type: "مرطب", image: Image2 },
    //     { id: '1555', title: "اولفيرا", price: "7", type: "مرطب", image: Image2 },
    //     { id: '15555', title: "اولفيرا", price: "7", type: "مرطب", image: Image2 },
    //     { id: '155555', title: "اولفيرا", price: "7", type: "مرطب", image: Image2 },
    //     { id: '16', title: "اولفيرا", price: "1023.4", type: "مرطب", image: Image3 },
    //     { id: '166', title: "اولفيرا", price: "1023.4", type: "مرطب", image: Image3 },
    //     { id: '1666', title: "اولفيرا", price: "1023.4", type: "مرطب", image: Image3 },
    // ];
    const arrayOfoptinsOfcategories = [

    ];

    // array?.category?.map(item => arrayOfoptinsOfcategories.push({
    //     value: item.title, label: item.title
    // }))
    array?.map(item => arrayOfoptinsOfcategories.push({ value: item.category.title, label: item.category.title }))
    // let uniqueChars = [...new Set(arrayOfoptinsOfcategories)];
    // console.log('uniqueChars', uniqueChars)
    var uniq = {}
    var arrFiltered = arrayOfoptinsOfcategories.filter(obj => !uniq[obj.label] && (uniq[obj.label] = true));

    console.log('arrFiltered', arrFiltered)

    const arrayOfoptinsOfprice = [

    ];

    const arrayOfoptinsOfSize = [

    ];


    array?.map(item => item.variants?.map(item => arrayOfoptinsOfSize.push({
        value: item.size, label: item.size
        // value: item.price.toString(), label: item.size
    })))

    const classes = useStyles()

    useEffect(() => {
        setArrayForFilter(array.filter(e => (e.category.title.toUpperCase().indexOf(filterval.toUpperCase()) !== -1
            || e.title.toUpperCase().indexOf(filterval.toUpperCase()) !== -1)))
    }, [filterval, filterval1, value])

    useEffect(() => {
        setArrayForFilter(array.filter(e => e.variants?.map(item => item?.size).indexOf(filterval1) !== -1))
        // setArrayForFilter(array.filter(e => e.variants?.map(item => console.log('item.size', item.size)))

    }, [filterval1, filterval, value])

    useEffect(() => {
        setArrayForFilter(array.filter(hotel => { return hotel?.variants[0]?.price > value[0] && hotel?.variants[0]?.price < value[1] }))
    }, [value, array, filterval])
    let c = 'https://zubaidahbilal98.pythonanywhere.com'

    useEffect(async () => {
        try {
            setLoading(true)
            const res = await axios.get('https://zubaidahbilal98.pythonanywhere.com/api/product')
            if (res.data) {

                setArray(res.data)
                console.log('res', res)
                console.log('array', array)

                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }, [])

    if (loading || array.length == 0) {
        return <div>loading....</div>
    } else return <div className={classes.root}>
        <div className={classes.top}>
            المنتجات

        </div>
        <div className={classes.container}>
            <div className={classes.products}>
                {
                    arrayForFilter.map((item) => (
                        // <ProductCard key={item.id} {...item} image={item?.image} onClick={() => navigate(`/productinfo/${item.id}`)} />
                        <ProductCard key={item.id} {...item} type={item?.category?.title} price={item?.variants[0]?.price} image={c + item?.images[0].image} onClick={() => navigate(`/productinfo/${item.id}`)} />
                    ))
                }
            </div>
            <div style={{ width: '3%' }}></div>
            <div className={classes.rightbar}>
                {/* {
                    arrayformapComponents.map(e => <BasicSelect handleChange={handleChange} filterval={filterval} classes={classes.formcontrol} />)
                } */}


                <BasicSelect handleChange={handleChange} filterval={filterval} classes={classes.formcontrol} label={'الصنف'} arrayOfoptins={arrFiltered} />
                {/* <BasicSelect handleChange={handleChange} filterval={filterval} classes={classes.formcontrol} label={'السعر'} arrayOfoptins={arrayOfoptinsOfprice}/> */}
                <BasicSelect handleChange={handleChange11} filterval={filterval1} classes={classes.formcontrol} label={'الحجم'} arrayOfoptins={arrayOfoptinsOfSize} />

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
                        sx={{ width: '262px', marginLeft: '12px' }}
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
