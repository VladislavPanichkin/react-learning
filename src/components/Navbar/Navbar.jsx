import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <div>
            <a className={s.active}>Profile</a>
        </div>
        <div>
            <a className={s.cool}>Messages</a>
        </div>
        <div>
            <a className={`${s.cool} + ${s.active}`}>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;