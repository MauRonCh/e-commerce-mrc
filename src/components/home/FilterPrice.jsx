import React from 'react'
import './styles/filter.css'

const FilterPrice = ({setFilterByPrice}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const from = +e.target.from.value;
        const to = +e.target.to.value;
        setFilterByPrice({
            from: from,
            to: to !== 0 ? to : Infinity
        }
        )
    }

    return (
        <form onSubmit={handleSubmit} className='filter-price__container'>
            <h3 className='filter-price__title'>Price</h3>
            <div className='filter-price__from'>
                <label className='filter-price__label' htmlFor="from">From:⠀⠀⠀⠀</label>
                <input className='filter-price__input' type="number" id="from"/>
            </div>
            <div className='filter-price__to'>
                <label className='filter-price__label' htmlFor="to">To:⠀⠀⠀⠀</label>
                <input className='filter-price__input' type="number" id="to"/>
            </div>
            <button className='filter-price__btn'>Filter price</button>
        </form>
    )
}

export default FilterPrice