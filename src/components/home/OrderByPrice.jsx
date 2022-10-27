import React from 'react'
import { useDispatch } from 'react-redux'
import { sortAscending, sortDescending } from '../../store/slices/products.slice';
import './styles/filter.css'

const OrderByPrice = () => {

    const dispatch = useDispatch();

    const handleAscend = () => {
        dispatch(sortAscending())
    }
    const handleDescend = () => {
        dispatch(sortDescending())
    }

    return (
        <div className='order__container'>
            <h3 className='order__title'>Order price</h3>
            <button className='order__ascend' onClick={handleAscend}>Order ↗</button>
            <button className='order__descend' onClick={handleDescend}>Order ↘</button>
        </div>
    )
}

export default OrderByPrice