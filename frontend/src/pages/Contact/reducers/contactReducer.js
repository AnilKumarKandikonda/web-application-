import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const initialState = {
    // coming soon page fetch from server base details
    contactFormPostLoading: false,
    contactFormPostSuccess: {},
    contactFormPostFail: ''
}
/*****************************************************************
 * 
 * @param {contactFormPostLoading,contactFormPostSuccess,contactFormPostFail} state 
 * @param {contactFormPostStart,contactFormPostFail,contactFormPostSuccess} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const contactFormPostStart = (state, action) => {
    return updateObject(state, {
        contactFormPostLoading: true,
    });
};

const contactFormPostSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        contactFormPostSuccess: {...action.data},
        contactFormPostLoading: false,
        contactFormPostFail: {},
    });
};

const contactFormPostFail = (state, action) => {
    return updateObject(state, {
        contactFormPostLoading: false,
        contactFormPostFail: action.error,
        contactFormPostSuccess:{}
    });
};

const emptyContactPageData = (state, action) => {
    return updateObject(state, {
        contactFormPostLoading: false,
        contactFormPostSuccess: {},
        contactFormPostFail: ''
    });
};

const contactPageReducer = (state = initialState, action) => {
    switch (action.type) {
        // user login check
        case actionTypes.CONTACT_FORM_POST_START: return contactFormPostStart(state, action);
        case actionTypes.CONTACT_FORM_POST_SUCCESS: return contactFormPostSuccess(state, action);
        case actionTypes.CONTACT_FORM_POST_FAIL: return contactFormPostFail(state, action);
        case actionTypes.EMPTY_CONTACT_PAGE_DATA: return emptyContactPageData(state, action);
        default: return state;
    }
}

export default contactPageReducer;