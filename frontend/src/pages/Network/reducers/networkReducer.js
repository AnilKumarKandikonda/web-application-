import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const initialState = {
    // coming soon page fetch from server base details
    networkInfoLoading: false,
    networkInfoSuccess: {},
    networkInfoFail: {}
}
/*****************************************************************
 * 
 * @param {networkInfoLoading,networkInfoSuccess,networkInfoFail} state 
 * @param {networkInfoStart,networkInfoFail,networkInfoSuccess} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const networkInfoFetchDetailsStart = (state, action) => {
    return updateObject(state, {
        networkInfoLoading: true,
    });
};

const networkInfoFetchDetailsSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        networkInfoSuccess: { ...action.data },
        networkInfoLoading: false,
    });
};

const networkInfoFetchDetailsFail = (state, action) => {
    return updateObject(state, {
        networkInfoLoading: false,
        networkInfoFail: { ...action.error }
    });
};

const clearNetworkInfoDetails = (state, action) => {
    return updateObject(state, {
        networkInfoLoading: false,
        networkInfoFail: {},
        networkInfoSuccess: {}
    });
};

const networkReducer = (state = initialState, action) => {
    switch (action.type) {
        // user login check
        case actionTypes.NETWORK_INFO_FETCH_DETAILS_START: return networkInfoFetchDetailsStart(state, action);
        case actionTypes.NETWORK_INFO_FETCH_DETAILS_SUCCESS: return networkInfoFetchDetailsSuccess(state, action);
        case actionTypes.NETWORK_INFO_FETCH_DETAILS_FAIL: return networkInfoFetchDetailsFail(state, action);
        case actionTypes.CLEAR_NETWORK_INFO_DETAILS: return clearNetworkInfoDetails(state, action);
        default: return state;
    }
}

export default networkReducer;