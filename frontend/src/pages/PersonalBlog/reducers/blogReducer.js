import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const initialState = {
    userDetails: {},
    userDetailsLoading: false,
    userDetailsError: {},
}

const fetchUserBlogDetailsStart = (state, action) => {
    return updateObject(state, {
        userDetailsLoading: true,
    });
};

const fetchUserBlogDetailsSuccess = (state, action) => {
    return updateObject(state, {
        userDetails: { ...action.data },
        userDetailsLoading: false,
    });
};

const fetchUserBlogDetailsFail = (state, action) => {
    return updateObject(state, {
        userDetailsLoading: false,
        userDetailsError: { ...action.error }
    });
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_BLOG_DETAILS_START: return fetchUserBlogDetailsStart(state, action);
        case actionTypes.FETCH_USER_BLOG_DETAILS_SUCCESS: return fetchUserBlogDetailsSuccess(state, action);
        case actionTypes.FETCH_USER_BLOG_DETAILS_FAIL: return fetchUserBlogDetailsFail(state, action);
        default: return state;
    }
}

export default blogReducer;