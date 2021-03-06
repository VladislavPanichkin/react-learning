import { userApi, profileApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let message = action.newPostText

            return {
                ...state,
                posts:  [...state.posts, {id: 5, message: message, likes: 0}], 
            }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => {
    return(dispatch) => {
        userApi.setUser(userId)
            .then(response => {
                dispatch(setUserProfile(response))
            });
    }
}
export const getStatus = (userId) => {
    return(dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response))
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer