import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getAllProductsCart } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';
import './styles/cardProducts.css'

const CardProducts = ({product}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigation = () => {
        navigate(`/product/${product.id}`);
    };

    const handleAddCart = (e) => {
        e.stopPropagation();
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const data = {
            id: product.id,
            quantity: 1
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res);
                dispatch(getAllProductsCart());
            })
            .catch(err => console.log(err))
    }

    return (
        <article className='card' onClick={handleNavigation}>
            <header className='card__header'>
                <img src={product.productImgs[0]} alt="" className='card__img'/>
            </header>
            <div className="card__body">
                <h3 className='card__title'>{product.title}</h3>
                <div className='card__price'>
                    <span className='card__price-label'>Price</span>
                    <p className='card__price-number'>{product.price}</p>
                </div>
                <button className='card__icon-container' onClick={handleAddCart}>
                    <i className='card__icon bx bxs-cart'></i>
                </button>
            </div>
        </article>
    )
}

export default CardProducts