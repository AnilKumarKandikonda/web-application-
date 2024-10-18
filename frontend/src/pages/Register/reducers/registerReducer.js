import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const initialState = {
    // coming soon page fetch from server base details
    registerUserLoading: false,
    registerUserSuccess: {},
    registerUserFail: {}
}
/*****************************************************************
 * 
 * @param {registerUserStart,registerUserSuccess,registerUserFail} state 
 * @param {registerUserStart,registerUserFail,registerUserSuccess} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const userRegisterStart = (state, action) => {
    return updateObject(state, {
        registerUserLoading: true,
    });
};

const userRegisterSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        registerUserSuccess: { ...action.data },
        registerUserLoading: false,
        registerUserFail:{}
    });
};

const userRegisterFail = (state, action) => {
    return updateObject(state, {
        registerUserLoading: false,
        registerUserFail: { ...action.error },
        registerUserSuccess:{}
    });
};

const clearRegistrationDetails = (state, action) => {
    return updateObject(state, {
        registerUserLoading: false,
        registerUserFail: {},
        registerUserSuccess: {}
    });
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        // user login check
        case actionTypes.USER_REGISTER_START: return userRegisterStart(state, action);
        case actionTypes.USER_REGISTER_SUCCESS: return userRegisterSuccess(state, action);
        case actionTypes.USER_REGISTER_FAIL: return userRegisterFail(state, action);

        case actionTypes.CLEAR_ALL_REGISTRATION_DETAILS: return clearRegistrationDetails(state, action);
        default: return state;
    }
}

export default registerReducer;