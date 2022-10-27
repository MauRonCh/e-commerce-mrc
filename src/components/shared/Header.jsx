import React from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/header.css'

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="header__nav-container">
            <h1 className="header__title">
                <Link to='/'>e-commerce</Link>
            </h1>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink className="header__link" to='/cart'>
                            Cart
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to='/purchases'>
                            Purchases
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink className="header__link" to='/login'>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default Header;
