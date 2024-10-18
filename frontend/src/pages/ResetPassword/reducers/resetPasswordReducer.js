import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const initialState = {
    // coming soon page fetch from server base details
    userResetPasswordLoading: false,
    userResetPasswordSuccess: {},
    userResetPasswordFail: {}
}
/*****************************************************************
 * 
 * @param {userResetPasswordFail,userResetPasswordSuccess,userResetPasswordFail} state 
 * @param {userResetPasswordFail,userResetPasswordFail,userResetPasswordSuccess} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const resetPasswordUserStart = (state, action) => {
    return updateObject(state, {
        userResetPasswordLoading: true,
    });
};

const resetPasswordUserSuccess = (state, action) => {
    return updateObject(state, {
        networkInfoSuccess: { ...action.data },
        userResetPasswordLoading: false,
    });
};

const resetPasswordUserFail = (state, action) => {
    return updateObject(state, {
        userResetPasswordLoading: false,
        networkInfoFail: { ...action.error }
    });
};

const clearuserResetPasswordDetails = (state, action) => {
    return updateObject(state, {
        userResetPasswordLoading: false,
        userResetPasswordSuccess: {},
        userResetPasswordFail: {}
    });
};

const resetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        // user login check
        case actionTypes.NETWORK_INFO_FETCH_DETAILS_START: return resetPasswordUserStart(state, action);
        case actionTypes.NETWORK_INFO_FETCH_DETAILS_SUCCESS: return resetPasswordUserSuccess(state, action);
        case actionTypes.NETWORK_INFO_FETCH_DETAILS_FAIL: return resetPasswordUserFail(state, action);

        case actionTypes.CLEAR_USER_RESET_DETAILS: return clearuserResetPasswordDetails(state, action);
        default: return state;
    }
}

export default resetPasswordReducer;