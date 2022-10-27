import React, { useState } from 'react'
import './styles/sliderImg.css'

const SliderImg = ({product}) => {

    const [indexImg, setIndexImg] = useState(0)

    const handlePrev = () => {
        if (indexImg - 1 < 0) {
            setIndexImg(product.productImgs.length - 1)
        } else {
            setIndexImg(indexImg - 1)
        }
    }

    const handleNext = () => {
        if (indexImg + 1 > product.productImgs.length -1) {
            setIndexImg(0)
        } else {
            setIndexImg(indexImg + 1)
        }}

    return (
        <div className='slider'>
            <button onClick={handlePrev} className='slider__prev'>&#60;</button>
            <div className='slider__static'>
                <div className="slider__animat" style={{transform: `translateX(calc(-${indexImg} / 3 * 100%))`}}>
                    {
                        product.productImgs.map(url => (
                            <div key={url} className="slider__img-container">
                                <img className='slider__img' src={url} alt="e" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <button onClick={handleNext} className='slider__next'>&#62;</button>
        </div>
    )
}

export default SliderImg