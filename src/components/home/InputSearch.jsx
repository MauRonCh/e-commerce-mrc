import React from 'react'
import './styles/input.css'

const InputSearch = ({inputText ,setInputText}) => {

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    return (
        <input onChange={handleChange} type="text" className='input' placeholder='Find items'/>
    )
}

export default InputSearch