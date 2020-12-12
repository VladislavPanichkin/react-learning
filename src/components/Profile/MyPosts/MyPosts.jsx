import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostReduxForm from './NewPostForm';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} id={p.id} likes={p.likes} />);

    const onSubmit = (formData) => {
        debugger;
        props.addPost(formData.post)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <NewPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;