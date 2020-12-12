import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form';
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store