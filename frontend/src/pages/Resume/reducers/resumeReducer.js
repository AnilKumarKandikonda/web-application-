import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const initialState = {
    // get user resume details
    userResumeDetailsLoading: false,
    userResumeDetailsSuccess: {},
    userResumeDetailsFail: {},

    // update user resume details
    updateUserResumeDetailsLoading: false,
    updateUserResumeDetailsSuccess: {},
    updateUserResumeDetailsFail: {},

    // get user pricing details
    userResumePricingDetailsLoading: false,
    userResumePricingDetailsSuccess: {},
    userResumePricingDetailsFail: {},

    // get user trends statistics
    userResumeStatLoading: false,
    userResumeStatSuccess: {},
    userResumeStatFail: {},

    // get user trends statistics
    updateResumePricingLoading: false,
    updateResumePricingSuccess: {},
    updateResumePricingFail: {},

    // resume download details
    resumeDownloadSuccess: {},
    resumeDownloadFail: {},
    resumeDownloadLoading: false,
}

/*****************************************************************
 * 
 * @param {userResumeDetailsFail,userResumeDetailsSuccess,userResumeDetailsFail} state 
 * @param {userResumeDetailsFail,userResumeDetailsFail,userResumeDetailsSuccess} action 
 * 
 * @returns 
 ******************************************************************/

const getUserResumeDetailsStart = (state, action) => {
    return updateObject(state, {
        userResumeDetailsLoading: true,
    });
};

const getUserResumeDetailsSuccess = (state, action) => {
    return updateObject(state, {
        userResumeDetailsSuccess: { ...action.data },
        userResumeDetailsLoading: false,
        userResumeDetailsFail: {},
    });
};

const getUserResumeDetailsFail = (state, action) => {
    return updateObject(state, {
        userResumeDetailsLoading: false,
        userResumeDetailsFail: { ...action.error },
        userResumeDetailsSuccess: {},
    });
};


/*****************************************************************
 * 
 * @param {userResumeDetailsFail,userResumeDetailsSuccess,userResumeDetailsFail} state 
 * @param {userResumeDetailsFail,userResumeDetailsFail,userResumeDetailsSuccess} action 
 * 
 * @returns 
 ******************************************************************/

const uploadUserResumeDetailsStart = (state, action) => {
    return updateObject(state, {
        updateUserResumeDetailsLoading: true,
    });
};

const uploadUserResumeDetailsSuccess = (state, action) => {
    return updateObject(state, {
        updateUserResumeDetailsSuccess: { ...action.data },
        updateUserResumeDetailsLoading: false,
        updateUserResumeDetailsFail: {},
    });
};

const uploadUserResumeDetailsFail = (state, action) => {
    return updateObject(state, {
        updateUserResumeDetailsLoading: false,
        updateUserResumeDetailsFail: { ...action.error },
        updateUserResumeDetailsSuccess: {},
    });
};


/*****************************************************************
 * 
 * @param {userResumePricingDetailsLoading,userResumePricingDetailsSuccess,userResumePricingDetailsFail} state 
 * @param {userResumePricingDetailsLoading,userResumePricingDetailsFail,userResumePricingDetailsSuccess} action 
 * 
 * @returns 
 ******************************************************************/

const getUserResumePricingStart = (state, action) => {
    return updateObject(state, {
        userResumePricingDetailsLoading: true,
    });
};

const getUserResumePricingSuccess = (state, action) => {
    return updateObject(state, {
        userResumePricingDetailsSuccess: { ...action.data },
        userResumePricingDetailsLoading: false,
    });
};

const getUserResumePricingFail = (state, action) => {
    return updateObject(state, {
        userResumePricingDetailsLoading: false,
        userResumePricingDetailsFail: { ...action.error }
    });
};


/*****************************************************************
 * 
 * @param {userResumeStatLoading,userResumeStatSuccess,userResumeStatFail} state 
 * @param {userResumeStatLoading,userResumeStatFail,userResumeStatSuccess} action 
 * 
 * @returns 
 ******************************************************************/

const getUserTrendsStatStart = (state, action) => {
    return updateObject(state, {
        userResumeStatLoading: true,
    });
};

const getUserTrendsStatSuccess = (state, action) => {
    return updateObject(state, {
        userResumeStatSuccess: { ...action.data },
        userResumeStatLoading: false,
    });
};

const getUserTrendsStatFail = (state, action) => {
    return updateObject(state, {
        userResumeStatLoading: false,
        userResumeStatFail: { ...action.error }
    });
};


/*****************************************************************
 * 
 * @param {updateResumePricingLoading,updateResumePricingSuccess,updateResumePricingFail} state 
 * @param {updateResumePricingLoading,updateResumePricingFail,updateResumePricingSuccess} action 
 * 
 * @returns 
 ******************************************************************/

const postUserResumePricingStart = (state, action) => {
    return updateObject(state, {
        updateResumePricingLoading: true,
    });
};

const postUserResumePricingSuccess = (state, action) => {
    return updateObject(state, {
        updateResumePricingSuccess: { ...action.data },
        updateResumePricingLoading: false,
    });
};

const postUserResumePricingFail = (state, action) => {
    return updateObject(state, {
        updateResumePricingLoading: false,
        updateResumePricingFail: { ...action.error }
    });
};


/*****************************************************************
 * 
 * @param {updateResumePricingLoading,updateResumePricingSuccess,updateResumePricingFail} state 
 * @param {updateResumePricingLoading,updateResumePricingFail,updateResumePricingSuccess} action 
 * 
 * @returns 
 ******************************************************************/

const resumeDownloadStart = (state, action) => {
    return updateObject(state, {
        resumeDownloadLoading: true,
    });
};

const resumeDownloadSuccess = (state, action) => {
    return updateObject(state, {
        resumeDownloadSuccess: { ...action.data },
        resumeDownloadLoading: false,
        resumeDownloadFail:{},
    });
};

const resumeDownloadFail = (state, action) => {
    return updateObject(state, {
        resumeDownloadLoading: false,
        resumeDownloadFail: { ...action.error },
        resumeDownloadSuccess:{}
    });
};

const clearUserAllResumeDetails = (state, action) => {
    return updateObject(state, {
        // get user resume details
        userResumeDetailsLoading: false,
        userResumeDetailsSuccess: {},
        userResumeDetailsFail: {},
        // update user resume details
        updateUserResumeDetailsLoading: false,
        updateUserResumeDetailsSuccess: {},
        updateUserResumeDetailsFail: {},

        // get user pricing details
        userResumePricingDetailsLoading: false,
        userResumePricingDetailsSuccess: {},
        userResumePricingDetailsFail: {},

        // get user trends statistics
        userResumeStatLoading: false,
        userResumeStatSuccess: {},
        userResumeStatFail: {},

        // get user trends statistics
        updateResumePricingLoading: false,
        updateResumePricingSuccess: {},
        updateResumePricingFail: {},

        // download resume details
        resumeDownloadSuccess: {},
        resumeDownloadFail: {},
        resumeDownloadLoading: false,
    });
};

const UserResume = (state = initialState, action) => {
    switch (action.type) {
        // get user reusme details
        case actionTypes.GET_USER_RESUME_DETAILS_START: return getUserResumeDetailsStart(state, action);
        case actionTypes.GET_USER_RESUME_DETAILS_SUCCESS: return getUserResumeDetailsSuccess(state, action);
        case actionTypes.GET_USER_RESUME_DETAILS_FAIL: return getUserResumeDetailsFail(state, action);

        // post or update user resume details
        case actionTypes.UPLOAD_USER_RESUME_DETAILS_START: return uploadUserResumeDetailsStart(state, action);
        case actionTypes.UPLOAD_USER_RESUME_DETAILS_SUCCESS: return uploadUserResumeDetailsSuccess(state, action);
        case actionTypes.UPLOAD_USER_RESUME_DETAILS_FAIL: return uploadUserResumeDetailsFail(state, action);

        // post or update user resume details
        case actionTypes.GET_USER_RESUME_PRICING_START: return getUserResumePricingStart(state, action);
        case actionTypes.GET_USER_RESUME_PRICING_SUCCESS: return getUserResumePricingSuccess(state, action);
        case actionTypes.GET_USER_RESUME_PRICING_FAIL: return getUserResumePricingFail(state, action);

        // get user resume stat
        case actionTypes.GET_USER_TRENDS_STAT_START: return getUserTrendsStatStart(state, action);
        case actionTypes.GET_USER_TRENDS_STAT_SUCCESS: return getUserTrendsStatSuccess(state, action);
        case actionTypes.GET_USER_TRENDS_STAT_FAIL: return getUserTrendsStatFail(state, action);

        // update reusme pricing for the user
        case actionTypes.POST_USER_RESUME_PRICING_START: return postUserResumePricingStart(state, action);
        case actionTypes.POST_USER_RESUME_PRICING_SUCCESS: return postUserResumePricingSuccess(state, action);
        case actionTypes.POST_USER_RESUME_PRICING_FAIL: return postUserResumePricingFail(state, action);

        // download resume details
        case actionTypes.USER_RESUME_DONWLOAD_START: return resumeDownloadSuccess(state, action);
        case actionTypes.USER_RESUME_DONWLOAD_FAIL: return resumeDownloadFail(state, action);
        case actionTypes.USER_RESUME_DONWLOAD_LOADING: return resumeDownloadStart(state, action);

        case actionTypes.CLEAR_USER_ALLRESUME_DETAILS: return clearUserAllResumeDetails(state, action);
        default: return state;
    }
}

export default UserResume;