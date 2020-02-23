import * as actionTypes from './actionTypes';
import * as config from '../../global/config';

export const getAllSales = ()=>{
    return dispatch=>{
        return fetch(config.apiServer + '/api/sales')
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({type: actionTypes.SALES_ALL, sales: res.sales}) // should be match with server
            }
            return res;
        })
    }
}