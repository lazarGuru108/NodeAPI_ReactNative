import * as actionTypes from './actionTypes';
import * as config from '../../global/config';

export const getAllUsers = ()=>{
    return dispatch=>{
        return fetch(config.apiServer + '/api/users')
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({type: actionTypes.USERS_ALL, sales: res.users}) // should be match with server
            }
            return res;
        })
    }
}