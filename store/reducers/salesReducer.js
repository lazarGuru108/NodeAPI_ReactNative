import * as actionTypes from '../actions/actionTypes';

const initialState = {
    sales: [],
}

const saleReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.SALES_ALL: {
            return {
                ...state,
                users: action.sales
            }
        }
        default: {
            return state;
        }
    }
}

export default saleReducer;

