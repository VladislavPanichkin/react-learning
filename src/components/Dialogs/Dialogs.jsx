import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: "Vlad" },
        { id: 2, name: "Dalv" },
        { id: 3, name: "Lavd" },
        { id: 4, name: "Alvd" },
    ]

    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How're you?" },
        { id: 3, message: "Hey" },
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.dialogsItems}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;