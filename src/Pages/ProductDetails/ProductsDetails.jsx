import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductsDetails = () => {
    const {id} = useParams();
    const [productsDetails, setProductsDetails] = useState([]);
    useEffect(() =>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            this is details {id} 
        </div>
    );
};

export default ProductsDetails;