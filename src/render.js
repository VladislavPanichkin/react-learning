import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { sendMessage } from './redux/state';
import {addPost} from './redux/state';
import {like} from './redux/state';
import { Route, BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} sendMessage={sendMessage} addPost={addPost} like={like}/>
        </BrowserRouter>, document.getElementById('root'))
}