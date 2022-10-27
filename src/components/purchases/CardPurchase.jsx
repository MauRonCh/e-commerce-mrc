import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice';
import './styles/cardPurchases.css'

const CardPurchase = ({purchase}) => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    Object.hasOwnProperty()

    useEffect(() => {
        dispatch(getAllProducts(products));
    }, [])

    return (
        <article className='purchases__card'>
            <header className='purchases__header'>{purchase.updatedAt}</header>
            <div className='purchases__info-container'>
                {
                    purchase.cart.products.map(product => (
                        <section key={product.id} className='purchases__item'>
                            <img src={products?.find(x => x.title == product.title).productImgs[0]} alt="" className="purchases__img"/>
                            <h3 className='purchases__info-title'>{product.title}</h3>
                            <ul className='purchases__info'>
                                <li className='purchases__info-qty'> <strong>Quantity:</strong> {product.productsInCart.quantity}</li>
                                <li className='purchases__info-price'> <strong>Price:</strong> ${product.price}</li>
                            </ul>
                            
                        </section>
                    ))
                }
            </div>
        </article>
    )
}

export default CardPurchase