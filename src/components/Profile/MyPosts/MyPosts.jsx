import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { NavLink } from 'react-router-dom';

const MyPosts = (props) => {

    let newPost = React.createRef()

    let addPost = () => {
        let text = newPost.current.value
        props.addPost(text)
        newPost.current.value = ''
    }

    let postsElements = props.posts.map(p => <Post message={p.message} id={p.id} likes={p.likes} />);

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <textarea ref={newPost}></textarea>
        </div>
        <div>
            <button onClick={addPost}>Add Post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;