import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Button } from '@mui/material'
import Image from '../HomePage/Partial/pics/HeroSection4.jpg';
import BasicSelect from '../ProductsPage/Partial/BasicSelect';
import useStyles from './style';
import axios from "axios";
import SliderComponent from "../HomePage/Partial/SliderComponent";

const ProductInfo = () => {
    const params = useParams();
    const classes = useStyles();
    const [loading, setLoading] = useState(false)
    const [array, setArray] = useState([])

    const [filterval, setFilterval] = React.useState('');
    const handleChange = (event) => {
        setFilterval(event.target.value);
    };
    useEffect(() => {
        // console.log('filterval', filterval)
    }, [filterval])
    // console.log('filterval', !!filterval)

    useEffect(async () => {
        try {
            setLoading(true)
            const res = await axios.get(`https://zubaidahbilal98.pythonanywhere.com/api/product/${params.id}`)
            if (res.data) {
                // product / photo_2022 - 01 - 01_16 - 29 -36_EEH7k7x.jpg
                setArray(res.data)
                // console.log('response', res)
                // console.log('my array', array)
                // console.log(', array.title', res.data)
                // console.log('array.images[0]', array.images[0])
                // console.log('array.images[0]', res.data.images[0])


                setLoading(false)


            }
        } catch (error) {
            setLoading(false)
            console.log('error', error)


        }

    }, [])

    const arrayOfoptinsOfSize = [];
    let c = 'https://zubaidahbilal98.pythonanywhere.com'
    
    array?.variants?.map(item => arrayOfoptinsOfSize.push({
        value: item.price, label: item.size
    }))

    if (loading || array.length == 0) {
        return <div>loading....</div>
    } else return <Grid container paddingLeft={20}>
        

        <Grid item container xs={12} sm={12} md={12} xl={12} lg={12} gap={12}>
            <Grid item container xs={12} sm={12} md={6} xl={6} lg={6} style={{

                backgroundImage: `url(${c+array.images[0].image})`, height: '500px', backgroundPosition: 'center',
                // `url(${process.env.PUBLIC_URL + '/image.png'})`
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '15px',
                backgroundColor: 'red'
            }}>{console.log('array', array)}

                {/* <img src={Image} style={{ width: '400px', }} /> */}
            </Grid>

            <Grid item container xs={12} sm={12} md={5} xl={5} lg={5}>
                {/* <img src={Image} style={{ width: '300px' }} /> */}
                <Grid item xs={12} sm={12} md={12} xl={12} lg={12} textAlign={'right'}>
                    <h3>{array.title}</h3>
                    <h5>{array.category.title}</h5>
                    <p>

                        {array.description}
                    </p>
                    <BasicSelect handleChange={handleChange} filterval={filterval} classes={classes.formcontrol} minWidth={"0%"} label={'الحجم'} arrayOfoptins={arrayOfoptinsOfSize} />
                    {/* <div style={{ width: '100%', height: '200px' }}>
                    </div> */}

                </Grid>
                <Grid item container xs={12} sm={12} md={12} xl={12} lg={12}>
                    <hr style={{ width: '100%', height: '0' }} />
                    <Grid item xs={6} sm={6} md={6} xl={6} lg={6} textAlign={'left'}>
                        <p>
                            {console.log('array111111111111',c+array.images[0].image)}
                            {
                                !!filterval ? filterval : array.variants[0].price
                            }
                        </p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} xl={6} lg={6} textAlign={'right'}>
                        <Button variant="contained" style={{ background: '#f2f2f2', fontSize: '24px', color: '#000', borderRadius: '20px' }} size="large">اضف الى السلة</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container xs={12} sm={12} md={12} xl={12} lg={12}>
            <SliderComponent stepProps={3} />
        </Grid>
        <br />
        <br />

    </Grid>;
};

export default ProductInfo;
