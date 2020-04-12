import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={props.userpic} className={s.userpic}></img>
            <NavLink to={"/dialogs/" + props.id} className="name">{props.name}</NavLink> 
        </div>
    );
}

export default DialogItem