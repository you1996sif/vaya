import React from 'react';
import { useParams } from "react-router-dom";

const ProductInfo = () => {
    const params = useParams();
    console.log('fegergerhger');
    return <div>
        id is : {params.id}
    </div>;
};

export default ProductInfo;
