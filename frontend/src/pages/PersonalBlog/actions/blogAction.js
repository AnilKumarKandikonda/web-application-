import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchUserBlogDetailsStart = () => {
    return {
        type: actionTypes.FETCH_USER_BLOG_DETAILS_START
    }
}

export const fetchUserBlogDetailsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USER_BLOG_DETAILS_SUCCESS,
        data: data,
    }
}

export const fetchUserBlogDetailsFail = (error) => {
    return {
        type: actionTypes.FETCH_USER_BLOG_DETAILS_FAIL,
        error: error
    }
}

export const fetchUserBlogDetails = (blogpath) => {
    return dispatch => {
        dispatch(fetchUserBlogDetailsStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.get(`/api/blog/user/${blogpath}`, config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(fetchUserBlogDetailsSuccess(res.data));
                }
                else {
                    dispatch(fetchUserBlogDetailsFail(res.data));
                }
            })
            .catch(err => {
                dispatch(fetchUserBlogDetailsFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}