import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../store/slices/products.slice'
import './styles/filter.css'

const FilterCategory = () => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'

        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch();

    const handleFetchCategory = (id) => {
        if (id) {
            // Petición del filtro por categoria
            dispatch(getProductByCategory(id))
        } else {
            // Petición de productos
            dispatch(getAllProducts())
        }
    }

    return (
        <article className='filter-cat__container'>
            <h3 className='filter-cat__title'>Category</h3>
            <ul className='filter-cat__list'>
                <li onClick={() => handleFetchCategory()} className='filter-cat__item-all'>All Products</li>
                {
                    categories?.map(category => (
                        <li className='filter-cat__item' key={category.id} onClick={() => handleFetchCategory(category.id)}>{category.name}</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default FilterCategory