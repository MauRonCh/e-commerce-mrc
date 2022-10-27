import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';
import './styles/cartProduct.css'

const CartProduct = ({product, image}) => {

    const dispatch = useDispatch();
    
    const handleDelete = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data);
                dispatch(getAllProductsCart());
            })
            .catch(err => console.log(err))
    }


    return (
        <article className='cart__item'>
            <h2 className='cart__item-title'>{(product.title.length > 35 ? `${product.title.slice(0,35)}...` : product.title)}</h2>
            <img className='cart__image' src={image} alt="" />
            <ul className='cart__item-cont'>
                <li className='cart__item-contPrice'>Price:<strong className='cart__item-num'> $ {product.price}</strong></li>
                <li className='cart__item-contQty'>Quantity: <strong className='cart__item-num'>{product.productsInCart.quantity}</strong></li>
            </ul>
            <button onClick={handleDelete} className="cart-p__btn">Remove</button>
        </article>
    )
}

export default CartProduct