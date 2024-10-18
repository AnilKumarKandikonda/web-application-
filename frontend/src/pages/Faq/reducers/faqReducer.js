import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const initialState = {
    // coming soon page fetch from server base details
    faqFetchDetailsLoading: false,
    faqFetchDetailsSuccess: {},
    faqFetchDetailsFail: ''
}
/*****************************************************************
 * 
 * @param {faqFetchDetailsLoading,faqFetchDetailsSuccess,faqFetchDetailsFail} state 
 * @param {faqFetchDetailsStart,faqFetchDetailsFail,faqFetchDetailsSuccess} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const faqFetchDetailsStart = (state, action) => {
    return updateObject(state, {
        faqFetchDetailsLoading: true,
    });
};

const faqFetchDetailsSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        faqFetchDetailsSuccess: {...action.data},
        faqFetchDetailsLoading: false,
    });
};

const faqFetchDetailsFail = (state, action) => {
    return updateObject(state, {
        faqFetchDetailsLoading: false,
        faqFetchDetailsFail: action.error
    });
};

const faqReducer = (state = initialState, action) => {
    switch (action.type) {
        // user login check
        case actionTypes.FETCH_FAQ_DETAILS_START: return faqFetchDetailsStart(state, action);
        case actionTypes.FETCH_FAQ_DETAILS_SUCCESS: return faqFetchDetailsSuccess(state, action);
        case actionTypes.FETCH_FAQ_DETAILS_FAIL: return faqFetchDetailsFail(state, action);
        default: return state;
    }
}

export default faqReducer;