import {
    GET_URL_REQUEST,
    GET_URL_SUCCESS
} from "../actionTypes";
import axios from "../../axiosApi";

const getUrlRequest = () => ({ type: GET_URL_REQUEST });
const getUrlSuccess = data => ({ type: GET_URL_SUCCESS, data });

export const getShortenUrl = data => {
    return async dispatch => {
            dispatch(getUrlRequest());
            const response = await axios.post("/links", data);
            dispatch(getUrlSuccess(response.data));
    };
};