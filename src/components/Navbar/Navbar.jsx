import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from "./Friends/Friends"


const Navbar = (props) => {

    const currentFriends = props.friends.map(d => <Friends name={d.name} key={d.id} userpic={d.userpic}/>);

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active} >Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active} >Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active} >News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active} >Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.active} >Settings</NavLink>
        </div>
        <div>
            <h2>Friends</h2>
            <div className="friends__container">
                {currentFriends}
            </div>
        </div>
    </nav>
}

export default Navbar;