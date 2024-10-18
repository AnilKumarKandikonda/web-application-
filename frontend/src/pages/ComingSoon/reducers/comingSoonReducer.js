import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const initialState = {
    // coming soon page fetch from server base details
    comingSoonLoading: false,
    comingSoonSuccess: {},
    comingSoonFail: ''
}
/*****************************************************************
 * 
 * @param {comingSoonLoading,comingSoonSuccess,comingSoonFail} state 
 * @param {comingSoonStart,comingSoonFail,comingSoonSuccess} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const comingSoonStart = (state, action) => {
    return updateObject(state, {
        comingSoonLoading: true,
    });
};

const comingSoonSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        comingSoonSuccess: {...action.data.message},
        comingSoonLoading: false,
    });
};

const comingSoonFail = (state, action) => {
    return updateObject(state, {
        comingSoonLoading: false,
        comingSoonFail: action.error.message
    });
};

const comingSoonReducer = (state = initialState, action) => {
    switch (action.type) {
        // user login check
        case actionTypes.COMING_SOON_START: return comingSoonStart(state, action);
        case actionTypes.COMING_SOON_SUCCESS: return comingSoonSuccess(state, action);
        case actionTypes.COMING_SOON_FAIL: return comingSoonFail(state, action);
        default: return state;
    }
}

export default comingSoonReducer;