import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const getUserInfo = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : {};

const initialState = {
    //user login details
    loginLoading: false,
    loginSuccess: '',
    loginFail: '',
    userDetails: getUserInfo,

    // user forgot password details
    forgotPassLoading: false,
    forgotPassSuccess: '',
    forgotPassFail: ''
}

/*****************************************************************
 * 
 * @param {loginLoading,loginSuccess,loginFail,userDetails} state 
 * @param {loginAuthStart,loginAuthFail,loginAuthSuccess} action 
 * @returns 
 ******************************************************************/

const loginAuthStart = (state, action) => {
    return updateObject(state, {
        loginLoading: true,
        userDetails: '',
        loginSuccess: '',
        loginFail: '',
        forgotPassSuccess: '',
        forgotPassFail: ''
    });
};

const loginAuthSuccess = (state, action) => {
    return updateObject(state, {
        userDetails: action.data.message,
        loginLoading: false,
    });
};

const loginAuthFail = (state, action) => {
    return updateObject(state, {
        loginLoading: false,
        loginFail: action.error.message
    });
};


/*****************************************************************
 * 
 * @param {forgotPassLoading,forgotPassSuccess,forgotPassFail} state 
 * @param {forgotPasswordStart,forgotPasswordFail,forgotPasswordSuccess} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const forgotPasswordStart = (state, action) => {
    return updateObject(state, {
        forgotPassLoading: true,
        userDetails: '',
        loginSuccess: '',
        loginFail: '',
        forgotPassSuccess: '',
        forgotPassFail: ''
    });
};

const forgotPasswordSuccess = (state, action) => {
    return updateObject(state, {
        forgotPassSuccess: action.data.message,
        forgotPassLoading: false,
    });
};

const forgotPasswordFail = (state, action) => {
    return updateObject(state, {
        forgotPassLoading: false,
        forgotPassFail: action.error.message
    });
};



const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        // user login check
        case actionTypes.LOGIN_AUTH_START: return loginAuthStart(state, action);
        case actionTypes.LOGIN_AUTH_SUCCESS: return loginAuthSuccess(state, action);
        case actionTypes.LOGIN_AUTH_FAIL: return loginAuthFail(state, action);

        // user update password/ forgot password reducer
        case actionTypes.FORGOT_PASSWORD_START: return forgotPasswordStart(state, action);
        case actionTypes.FORGOT_PASSWORD_SUCCESS: return forgotPasswordSuccess(state, action);
        case actionTypes.FORGOT_PASSWORD_FAIL: return forgotPasswordFail(state, action);
        default: return state;
    }
}

export default loginReducer;
