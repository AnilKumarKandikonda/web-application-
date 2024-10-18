import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const initialState = {
    // coming soon page fetch from server base details
    fetchProfileDetailsLoading: false,
    fetchProfileDetailsSuccess: {},
    fetchProfileDetailsFail: {},

    // profile update resume
    updateProfileResumeLoading: false,
    updateProfileResumeSuccess: {},
    updateProfileResumeFail: {},

    // profile update summary
    updateProfileSummaryLoading: false,
    updateProfileSummarySuccess: {},
    updateProfileSummaryFail: {},

    // profile update ECE
    updateProfileEceLoading: false,
    updateProfileEceSuccess: {},
    updateProfileEceFail: {},

    // profile Add ECE
    addProfileEceLoading: false,
    addProfileEceSuccess: {},
    addProfileEceFail: {},

    // profile update skills
    updateProfileSkillsLoading: false,
    updateProfileSkillsSuccess: {},
    updateProfileSkillsFail: {},

    // profile update other details
    updateProfileOtherDetailsLoading: false,
    updateProfileOtherDetailsSuccess: {},
    updateProfileOtherDetailsFail: {},
}



/*****************************************************************
 * 
 * @param {fetchProfileDetailsLoading,fetchProfileDetailsSuccess,fetchProfileDetailsFail} state 
 * @param {fetchProfileDetailsLoading,fetchProfileDetailsSuccess,fetchProfileDetailsFail} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const fetchProfileUserDetailsStart = (state, action) => {
    return updateObject(state, {
        fetchProfileDetailsLoading: true,
    });
};

const fetchProfileUserDetailsSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        fetchProfileDetailsSuccess: { ...action.data },
        fetchProfileDetailsLoading: false,
    });
};

const fetchProfileUserDetailsFail = (state, action) => {
    return updateObject(state, {
        fetchProfileDetailsLoading: false,
        fetchProfileDetailsFail: { ...action.error }
    });
};


/*****************************************************************
 * 
 * @param {updateProfileResumeLoading,updateProfileResumeSuccess,updateProfileResumeFail} state 
 * @param {updateProfileResumeLoading,updateProfileResumeSuccess,updateProfileResumeFail} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const updateProfileUserResumeStart = (state, action) => {
    return updateObject(state, {
        updateProfileResumeLoading: true,
    });
};

const updateProfileUserResumeSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        updateProfileResumeSuccess: { ...action.data },
        updateProfileResumeLoading: false,
    });
};

const updateProfileUserResumeFail = (state, action) => {
    return updateObject(state, {
        updateProfileResumeLoading: false,
        updateProfileResumeFail: { ...action.error }
    });
};


/*****************************************************************
 * 
 * @param {updateProfileSummaryLoading,updateProfileSummarySuccess,updateProfileSummaryFail} state 
 * @param {updateProfileSummaryLoading,updateProfileSummarySuccess,updateProfileSummaryFail} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const updateProfileUserSummaryStart = (state, action) => {
    return updateObject(state, {
        updateProfileSummaryLoading: true,
    });
};

const updateProfileUserSummarySuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        updateProfileSummarySuccess: { ...action.data },
        updateProfileSummaryLoading: false,
    });
};

const updateProfileUserSummaryFail = (state, action) => {
    return updateObject(state, {
        updateProfileSummaryLoading: false,
        updateProfileSummaryFail: { ...action.error }
    });
};


/*****************************************************************
 * 
 * @param {updateProfileEceLoading,updateProfileSummarySuccess,updateProfileSummaryFail} state 
 * @param {updateProfileEceLoading,updateProfileSummarySuccess,updateProfileSummaryFail} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const updateProfileUserEceStart = (state, action) => {
    return updateObject(state, {
        updateProfileEceLoading: true,
    });
};

const updateProfileUserEceSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        updateProfileEceSuccess: { ...action.data },
        updateProfileEceLoading: false,
    });
};

const updateProfileUserEceFail = (state, action) => {
    return updateObject(state, {
        updateProfileEceLoading: false,
        updateProfileEceFail: { ...action.error }
    });
};


/*****************************************************************
 * 
 * @param {addProfileEceLoading,addProfileEceSuccess,addProfileEceFail} state 
 * @param {addProfileEceLoading,addProfileEceSuccess,addProfileEceFail} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const addProfileUserEceStart = (state, action) => {
    return updateObject(state, {
        addProfileEceLoading: true,
    });
};

const addProfileUserEceSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        addProfileEceSuccess: { ...action.data },
        addProfileEceLoading: false,
    });
};

const addProfileUserEceFail = (state, action) => {
    return updateObject(state, {
        addProfileEceLoading: false,
        addProfileEceFail: { ...action.error }
    });
};


/*****************************************************************
 * 
 * @param {updateProfileSkillsLoading,updateProfileSkillsSuccess,updateProfileSkillsFail} state 
 * @param {updateProfileSkillsLoading,updateProfileSkillsSuccess,updateProfileSkillsFail} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const updateProfileUserSkillsStart = (state, action) => {
    return updateObject(state, {
        updateProfileSkillsLoading: true,
    });
};

const updateProfileUserSkillsSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        updateProfileSkillsSuccess: { ...action.data },
        updateProfileSkillsLoading: false,
    });
};

const updateProfileUserSkillsFail = (state, action) => {
    return updateObject(state, {
        updateProfileSkillsLoading: false,
        updateProfileSkillsFail: { ...action.error }
    });
};


/*****************************************************************
 * 
 * @param {updateProfileOtherDetailsLoading,updateProfileOtherDetailsSuccess,updateProfileOtherDetailsFail} state 
 * @param {updateProfileOtherDetailsLoading,updateProfileOtherDetailsSuccess,updateProfileOtherDetailsFail} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const updateProfileUserOtherDetailsStart = (state, action) => {
    return updateObject(state, {
        updateProfileOtherDetailsLoading: true,
    });
};

const updateProfileUserOtherDetailsSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        updateProfileOtherDetailsSuccess: { ...action.data },
        updateProfileOtherDetailsLoading: false,
    });
};

const updateProfileUserOtherDetailsFail = (state, action) => {
    return updateObject(state, {
        updateProfileOtherDetailsLoading: false,
        updateProfileOtherDetailsFail: { ...action.error }
    });
};

const clearNetworkInfoDetails = (state, action) => {
    return updateObject(state, {
        fetchProfileDetailsLoading: false,
        fetchProfileDetailsSuccess: {},
        fetchProfileDetailsFail: {},

        // profile update resume
        updateProfileResumeLoading: false,
        updateProfileResumeSuccess: {},
        updateProfileResumeFail: {},

        // profile update summary
        updateProfileSummaryLoading: false,
        updateProfileSummarySuccess: {},
        updateProfileSummaryFail: {},

        // profile update ECE
        updateProfileEceLoading: false,
        updateProfileEceSuccess: {},
        updateProfileEceFail: {},

        // profile Add ECE
        addProfileEceLoading: false,
        addProfileEceSuccess: {},
        addProfileEceFail: {},

        // profile update skills
        updateProfileSkillsLoading: false,
        updateProfileSkillsSuccess: {},
        updateProfileSkillsFail: {},

        // profile update other details
        updateProfileOtherDetailsLoading: false,
        updateProfileOtherDetailsSuccess: {},
        updateProfileOtherDetailsFail: {},
    });
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        // fetch profile user details
        case actionTypes.FETCH_PROFILE_USER_DETAILS_START: return fetchProfileUserDetailsStart(state, action);
        case actionTypes.FETCH_PROFILE_USER_DETAILS_SUCCESS: return fetchProfileUserDetailsSuccess(state, action);
        case actionTypes.FETCH_PROFILE_USER_DETAILS_FAIL: return fetchProfileUserDetailsFail(state, action);

        // udpate profile user resume
        case actionTypes.UPDATE_PROFILE_USER_RESUME_START: return updateProfileUserResumeStart(state, action);
        case actionTypes.UPDATE_PROFILE_USER_RESUME_SUCCESS: return updateProfileUserResumeSuccess(state, action);
        case actionTypes.UPDATE_PROFILE_USER_RESUME_FAIL: return updateProfileUserResumeFail(state, action);

        // udpate profile user summary
        case actionTypes.UPDATE_PROFILE_USER_SUMMARY_START: return updateProfileUserSummaryStart(state, action);
        case actionTypes.UPDATE_PROFILE_USER_SUMMARY_SUCCESS: return updateProfileUserSummarySuccess(state, action);
        case actionTypes.UPDATE_PROFILE_USER_SUMMARY_FAIL: return updateProfileUserSummaryFail(state, action);

        // udpate profile user Ece -> education, certification, experience
        case actionTypes.UPDATE_PROFILE_USER_ECE_START: return updateProfileUserEceStart(state, action);
        case actionTypes.UPDATE_PROFILE_USER_ECE_SUCCESS: return updateProfileUserEceSuccess(state, action);
        case actionTypes.UPDATE_PROFILE_USER_ECE_FAIL: return updateProfileUserEceFail(state, action);

        // add profile user Ece -> education, certification, experience
        case actionTypes.ADD_NEW_PROFILE_USER_ECE_START: return addProfileUserEceStart(state, action);
        case actionTypes.ADD_NEW_PROFILE_USER_ECE_SUCCESS: return addProfileUserEceSuccess(state, action);
        case actionTypes.ADD_NEW_PROFILE_USER_ECE_FAIL: return addProfileUserEceFail(state, action);

        // update profile user skills
        case actionTypes.UPDATE_PROFILE_USER_SKILLS_START: return updateProfileUserSkillsStart(state, action);
        case actionTypes.UPDATE_PROFILE_USER_SKILLS_SUCCESS: return updateProfileUserSkillsSuccess(state, action);
        case actionTypes.UPDATE_PROFILE_USER_SKILLS_FAIL: return updateProfileUserSkillsFail(state, action);

        // update profile user other details
        case actionTypes.UPDATE_PROFILE_USER_OTHER_DETAILS_START: return updateProfileUserOtherDetailsStart(state, action);
        case actionTypes.UPDATE_PROFILE_USER_OTHER_DETAILS_SUCCESS: return updateProfileUserOtherDetailsSuccess(state, action);
        case actionTypes.UPDATE_PROFILE_USER_OTHER_DETAILS_FAIL: return updateProfileUserOtherDetailsFail(state, action);

        case actionTypes.CLEAR_NETWORK_INFO_DETAILS: return clearNetworkInfoDetails(state, action);
        default: return state;
    }
}

export default profileReducer;