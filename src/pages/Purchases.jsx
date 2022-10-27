import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CardPurchase from '../components/purchases/CardPurchase'
import getConfig from '../utils/getConfig'
import './styles/purchases.css'

const Purchases = () => {

    const [getPurchases, setGetPurchases] = useState()

    useEffect (() => {

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        
        axios.get(URL, getConfig())
        .then(res => setGetPurchases(res.data.data.purchases))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='purchases'>
            <h2 className="purchases__title">My Purchases</h2>
            <div className="purchases__container">
                {
                getPurchases?.map(purchase => 
                    <CardPurchase
                    key={purchase.id}
                    purchase={purchase}
                    />)
                }
            </div>
        </div>
    )
}

export default Purchases