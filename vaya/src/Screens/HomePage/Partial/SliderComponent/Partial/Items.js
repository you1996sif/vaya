import React from "react";
import ProductCard from '../../../../../Components/ProductCard';
import { useNavigate } from 'react-router-dom';

import Image from '../../pics/HeroSection1.jpg';
let c = 'https://zubaidahbilal98.pythonanywhere.com'


const Items = ({ i = 0, j = 2, array }) => {

    const navigate = useNavigate()

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {array.slice(i, j).map((item) => (
                    <ProductCard {...item} type={item?.category?.title} price={item?.variants[0]?.price} image={c+item?.images[0].image} onClick={() => navigate(`/productinfo/${item.id}`)} />
                ))}
            </div>
        </div>
    );
};

export default Items;
