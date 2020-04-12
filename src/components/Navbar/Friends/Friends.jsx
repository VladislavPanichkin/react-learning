import React from 'react';
import s from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={s.friends_block}>
            <img src={props.userpic}></img>
            <span>{props.name}</span>
        </div>
    )
}

export default Friends