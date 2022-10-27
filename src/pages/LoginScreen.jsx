import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/login.css'

const LoginScreen = () => {

    const { handleSubmit, register, reset } = useForm()
    const [isLogged, setIsLogged] = useState(false)

    const submit = (data) => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true);
        } else {
            setIsLogged(false)
        }

    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLogged(false);
    }


    if (isLogged) {
        return (
            <div className='login__logged-cont'>
                <h2 className='login__logged-title'>User Logged!</h2>
                <a onClick={handleLogout} className='login__logged-btn'>Logout</a>
            </div>
        )
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit(submit)} className='login-cont'>
                <div className='login__div'>
                    <label htmlFor="email" className='login__label'>Email: </label>
                    <input type="email" id="email" className='login__input' {...register('email')} />
                </div>
                <div className='login__div'>
                    <label htmlFor="password" className='login__label'>Password: </label>
                    <input type="password" id="password" className='login__input'  {...register('password')} />
                </div>
                <button className='login__btn'>Login</button>
            </form>
        </div>
    )
}

export default LoginScreen