import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../components/home/CardProducts';
import FilterCategory from '../components/home/FilterCategory';
import FilterPrice from '../components/home/FilterPrice';
import InputSearch from '../components/home/InputSearch';
import OrderByPrice from '../components/home/OrderByPrice';
import { getAllProducts } from '../store/slices/products.slice';
import './styles/home.css'

const Home = () => {

    const [inputText, setInputText] = useState('')
    const [filterByText, setFilterByText] = useState()
    const [filterByPrice, setFilterByPrice] = useState({
                                                        from: 0,
                                                        to: Infinity
                                                    })

    const products = useSelector(state => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts(products))
    }, [])
    
    useEffect(() => {
        if (inputText !== '' && products) {
            const cb = (product) => product.title.toLowerCase().includes(inputText.toLowerCase().trim());
            setFilterByText(products.filter(cb));
        } else {
            setFilterByText(products);
        }
    }, [inputText, products])

    const cbFilterPrice = (product) => {
        return +product.price >= filterByPrice.from && +product.price <= filterByPrice.to
    }

    return (
        <main className='home'>
            <InputSearch inputText={inputText} setInputText={setInputText}/>
            <div className="home__filter-container">
                <FilterPrice setFilterByPrice={setFilterByPrice}/>
                <OrderByPrice /> 
                <FilterCategory />
            </div>
            <div className='home__container'>
                {
                    filterByText?.filter(cbFilterPrice).map(product => (
                        <CardProducts 
                        key={product.id}
                        product={product}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Home