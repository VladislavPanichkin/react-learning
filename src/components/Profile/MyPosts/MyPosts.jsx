import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { NavLink } from 'react-router-dom';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} id={p.id} likes={p.likes} />);

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
                <div>
            <textarea></textarea>
                </div>
                <div>
        <button>Add Post</button>
        </div>
        <div className={s.posts}>
             {postsElements}
        </div>
    </div>
}

export default MyPosts;