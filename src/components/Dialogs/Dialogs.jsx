import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Vlad" id="1" />
                <DialogItem name="Dalv" id="2" />
                <DialogItem name="Lavd" id="3" />
                <DialogItem name="Alvd" id="4" />
            </div>
            <div className={s.dialogsItems}>
                <Message message="Hi"/>
                <Message message="How're you?"/>
                <Message message="Hey"/>
            </div>
        </div>
    )
}

export default Dialogs;