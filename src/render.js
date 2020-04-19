import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { sendMessage } from './redux/state';
import {addPost, updateNewPostText} from './redux/state';
import {like} from './redux/state';
import { Route, BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} sendMessage={sendMessage} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'))
}