import React from "react";
import ProductCard from '../../../../../Components/ProductCard';
import { useNavigate } from 'react-router-dom';




const Items = ({ i = 0, j = 2, array }) => {

    const navigate = useNavigate()

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {array.slice(i, j).map((item) => (
                    <ProductCard {...item} image={item.image} onClick={() => navigate(`/productinfo/${item.id}`)} />
                ))}
            </div>
        </div>
    );
};

export default Items;
