import React, { useEffect, useState } from "react";
import Slider from "./Partial/Slider";
import Items from "./Partial/Items";
// import Test from "./Partial/Test";
import ProductCard from '../../../../Components/ProductCard';
import Image from '../pics/HeroSection1.jpg';
import Image1 from '../pics/HeroSection2.jpg';
import Image2 from '../pics/HeroSection3.jpg';
import Image3 from '../pics/HeroSection4.jpg';
import axios from "axios";




function SliderComponent({ stepProps }) {
    const [step, setStep] = useState(stepProps)
    const [loading, setLoading] = useState(false)
    const [array, setArray] = useState([])

    // const array = [
    //     { id: '1', name: "1اولفيرا", price: "10.000", type: "1مرطب", image: Image },
    //     { id: '11', name: "1اولفيرا", price: "1", type: "1مرطب", image: Image },
    //     { id: '111', name: "1اولفيرا", price: "1", type: "1مرطب", image: Image },
    //     { id: '1111', name: "1اولفيرا", price: "2", type: "مرطب", image: Image1 },

    //     { id: '12', name: "اولفيرا", price: "2", type: "مرطب", image: Image1 },
    //     { id: '122', name: "اولفيرا", price: "2", type: "مرطب", image: Image1 },
    //     { id: '1222', name: "اولفيرا", price: "3", type: "مرطب", image: Image2 },
    //     { id: '12222', name: "اولفيرا", price: "3", type: "مرطب", image: Image2 },

    //     { id: '13', name: "اولفيرا", price: "3", type: "مرطب", image: Image2 },
    //     { id: '133', name: "اولفيرا", price: "4", type: "مرطب", image: Image3 },
    //     { id: '1333', name: "اولفيرا", price: "4", type: "مرطب", image: Image3 },
    //     { id: '13333', name: "اولفيرا", price: "4", type: "مرطب", image: Image3 },

    //     { id: '14', name: "اولفيرا", price: "5", type: "مرطب", image: Image2 },
    //     { id: '144', name: "اولفيرا", price: "5", type: "مرطب", image: Image2 },
    //     { id: '1444', name: "اولفيرا", price: "5", type: "مرطب", image: Image2 },
    //     { id: '14444', name: "اولفيرا", price: "6", type: "مرطب", image: Image2 },
    //     { id: '15', name: "اولفيرا", price: "6", type: "مرطب", image: Image2 },
    //     { id: '155', name: "اولفيرا", price: "6", type: "مرطب", image: Image2 },
    //     { id: '1555', name: "اولفيرا", price: "7", type: "مرطب", image: Image2 },
    //     { id: '15555', name: "اولفيرا", price: "7", type: "مرطب", image: Image2 },
    //     { id: '155555', name: "اولفيرا", price: "7", type: "مرطب", image: Image2 },
    //     { id: '16', name: "اولفيرا", price: "1023.4", type: "مرطب", image: Image3 },
    //     { id: '166', name: "اولفيرا", price: "1023.4", type: "مرطب", image: Image3 },
    //     { id: '1666', name: "اولفيرا", price: "1023.4", type: "مرطب", image: Image3 },

    // ];

    useEffect(async () => {
        window.addEventListener('resize', forWidth, false)
        try {
            setLoading(true)
            const res = await axios.get('https://zubaidahbilal98.pythonanywhere.com/api/product/')
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

    // useEffect(async () => {
    //     try {
    //         const res = await axios.get('https://vaya-backend.herokuapp.com/api/product')
    //         console.log('res', res)
    //     } catch (error) {
    //         console.log('error', error)
    //     }
    // }, [])

    let i = 0,
        j = step;
    let indexLess = 0;
    // setStepState(step)

    const forWidth = () => {
        if (window.innerWidth < 700) {
            // step = 1
            setStep(1)
            // console.log('first');
            // console.log('step', step);
        } else if (window.innerWidth > 700 && window.innerWidth < 1000) {
            setStep(2)
            // console.log('11111111111111111111111111')
            // step = 2
        }
    }
    var x = array.length / step
    var y = parseInt(x);
    // console.log('x', x, y);
    var start = 0;
    var end = 0;
    let c = 'https://zubaidahbilal98.pythonanywhere.com'

    if (loading) {
        return <div>loading....</div>
    } else return (
        <>
            <Slider height="500px" auto speed={2000}>
                {array.map((item, index) => {
                    if (index < array.length / step) {
                        i = 0;
                        j = step;
                        i = i + index * step;
                        j = j + index * step;
                        // console.log('if', i, j, index < array.length / step, index, array.length / 3);
                        end = j
                        start = i
                        // console.log('j', j);

                    } else {
                        i = 0;
                        j = step;
                        i = i + indexLess * step;
                        j = j + indexLess * step;
                        indexLess = indexLess + 1;
                        // console.log('elses', i, j, index < array.length / step, index, array.length / 3, i == end);
                        if (i >= start && j >= end) {
                            indexLess = 0;
                            i = 0;
                            j = step;
                            i = i + indexLess * step;
                            j = j + indexLess * step;
                            indexLess = indexLess + 1;
                            // console.log('elseif', i, j, index < array.length / step, index, array.length / 3);
                        }
                    }
                    return (
                        <div
                            style={{
                                width: "100%",
                                height: "500px",
                                // backgroundImage: `url(${c + array.images[0].image})`
                                // background: `${item.color}`
                            }}
                        >
                            <Items i={i} j={j} array={array} />
                        </div>
                    );
                })}
            </Slider>
        </>
    );
}

export default SliderComponent;


