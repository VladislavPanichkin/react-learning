import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { NavLink } from 'react-router-dom';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'

const MyPosts = (props) => {

    let newPost = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator)
    }

    let onPostChange = () => {
        let text = newPost.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    let postsElements = props.state.profilePage.posts.map(p => <Post message={p.message} id={p.id} likes={p.likes}/>);

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <textarea onChange={onPostChange} value={props.state.profilePage.newPostText} ref={newPost}></textarea>
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