import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
}

const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.USERS_ALL: {
            return {
                ...state,
                users: action.users
            }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;

