import { userApi } from "../api/api"

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:  
            return state
    }
}
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });
export const getAuthUserData = () => (dispatch) => {
    userApi.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch(setAuthUserData(id, email, login));
                    userApi.setUser(id)
                        .then(data => {
                        // Here you can set the avatar to be displayed in header / sidebar, logic and state changes required
                    })
                }
            })
}

export default authReducer;