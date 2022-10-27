import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllProductsCart, setCartGlobal } from '../store/slices/cart.slice'
import { getAllProducts } from '../store/slices/products.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {

    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()

    // Globals
    const cart = useSelector(state => state.cart)
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getAllProductsCart());
        dispatch(getAllProducts(products));
    }, [])

    useEffect(() => {    
        if (cart) {
            const result = cart.products.reduce((acc, cv) =>{
                return acc + Number(cv.price) * cv.productsInCart.quantity}, 0)
                setTotal(result);
            }
        }, [total, cart]);

    const handlePurchase = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const data = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
        }

        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(setCartGlobal(null))
                setTotal(0)
            })
            .catch(err => console.log(err))
        }

    return (
        <div className='cart'>
            <div className="cart__container">
                {
                    cart?.products.map(product => {
                        return <CartProduct
                            key={product.id}
                            product={product} 
                            image={products?.find(x => x.title == product.title).productImgs[0]}
                            />
                })
                }
            </div>
            <strong className='cart__total'>{
            cart ? `Total: $ ${total}`
            : `You don't have products in cart!`}</strong>
            { cart && <button onClick={handlePurchase} className='cart__button'>Buy now!!</button>}
        </div>
    )
}

export default Cart