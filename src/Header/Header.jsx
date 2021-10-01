import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import cart from '../img/shoppingCart.svg';
function Header() {

    const {totalCount}=useSelector(({cartReduser})=>({
        totalCount: cartReduser.totalCount,
    }));

    return (
        <div className="header">
            <div className='header__container'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                <div className='logo'>
                    <div className='logo__img'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -15 100 100">
                            <path
                                fill="none" stroke="white" stroke-width="4"
                                d="M40 40 L80 30 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"/>
                            <path
                                fill="none" stroke="white" stroke-width="4"
                                d="M50 30 L50 -10 C50 -10 90 -10 90 20 Z"/>
                        </svg> 
                    </div>
                       <div className='logo__name'>GoodFood</div>    
                </div> 
                </Link>
                <Link to="/cart">
                    <div className="header__cart --count"> {totalCount}</div>
                    <img className='header__cart' src={cart} alt="cart"></img>
                </Link>
                    
            </div>
        </div>
    )
}

export default Header
