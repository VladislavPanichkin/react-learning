const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 }
    ],

    newPostText: "asaas"
}

const profileReducer = (state = initialState, action) => {

    let stateCopy

    switch (action.type) {
        case ADD_POST:
            let message = state.newPostText

            return {
                ...state,
                posts:  [...state.posts, {id: 5, message: message, likes: 0}], 
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            } 
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer