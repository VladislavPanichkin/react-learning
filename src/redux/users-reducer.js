const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        { id: 1, photoUrl: 'https://psalaw.ro/wp-content/uploads/2020/02/b884fbca-f44c-49b9-ae07-2e65184e632b-767x1024.jpg', 
            followed: true, name: "Jack", status: "Yes.", location: { city: 'Murmansk', country: 'Russia' } },
        { id: 2, photoUrl: 'https://psalaw.ro/wp-content/uploads/2020/02/b884fbca-f44c-49b9-ae07-2e65184e632b-767x1024.jpg', 
            followed: false, name: "John", status: "No.", location: { city: 'Saint-Petersburg', country: 'Russia' } },
        { id: 3, photoUrl: 'https://psalaw.ro/wp-content/uploads/2020/02/b884fbca-f44c-49b9-ae07-2e65184e632b-767x1024.jpg',  
            followed: true, name: "Mike", status: "Yes.", location: { city: 'New-York', country: 'USA' } }
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                        console.log('unfollowed')
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default: return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, id: userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, id: userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer