import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo';
import SimiliarProducts from '../components/productId/SimiliarProducts';
import SliderImg from '../components/productId/SliderImg';


const ProductId = () => {

    const [product, setProduct] = useState();
    
    const {id} = useParams();
    
    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        
        axios.get(URL)
        .then(res => setProduct(res.data.data.product))
        .catch(err => console.log(err))
    }
    , [id]);

    return (
        <div className='product-id__container'>{
            product && <SliderImg product={product}/>
            }
            <ProductInfo product={product}/>
            <SimiliarProducts product={product}/>
        </div>
    )
}

export default ProductId