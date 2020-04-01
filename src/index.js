import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, message: "Hi, how are you?", likes: "15" },
    { id: 2, message: "It's my first post", likes: "20" }
]

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

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
