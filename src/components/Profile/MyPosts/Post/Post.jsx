import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div>
        <div className={s.item}>
        <img src="https://www.secondpicture.com/tutorials/3d/modeling_human_head_in_3ds_max.png" />
        {props.message}
    </div>
        <div>
            <button onClick = {props.like}>like</button>
            {props.likes}
        </div>
    </div >
    
}

export default Post;