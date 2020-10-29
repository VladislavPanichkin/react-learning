import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://vk.com/images/brand/vk-logo--fb.png'></img>
        <div className={s.loginBlock}>
            { props.isAuth ? 
                <div>logged in as '{props.login}'</div> 
                :<NavLink to={'/login'}>login</NavLink> }
        </div>
    </header>
}

export default Header;