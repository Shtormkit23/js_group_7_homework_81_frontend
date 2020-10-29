import {
    GET_URL_REQUEST, GET_URL_SUCCESS
} from "../actionTypes";

const initialState = {
    shortUrl: null,
};


const urlReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_URL_REQUEST:
            return {...state};
        case GET_URL_SUCCESS:
            return {
                ...state,
                shortUrl: action.data.shortUrl
            };
        default:
            return state;
    }
};

export default urlReducer;