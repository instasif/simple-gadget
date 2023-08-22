
import { useState, useEffect } from 'react';
import ProductCard from "../../Componants/ProductCard/ProductCard"
const Products = () => {
    const [products, setProduct] = useState([]);
    
    useEffect(() =>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <section className="lg:pt-5">
            <h1 className="text-3xl font-bold text-center">Our Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
            {
                products.map((product, i) =>(
                    <ProductCard product={product} key={i}/>
                ))
            }
            </div>
        </section>
    );
};

export default Products;