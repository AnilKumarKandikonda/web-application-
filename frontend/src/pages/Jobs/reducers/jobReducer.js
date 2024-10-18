import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../components/Utility/utility';

const initialState = {
    // coming soon page fetch from server base details
    jobInfoLoading: false,
    jobInfoSuccess: {},
    jobInfoError: {},


    jobClickProfileLoading: false,
    jobClickProfile: {},
    jobClickProfileError: {},

    jobFetchQuestionsLoading: false,
    jobFetchQuestions: {},
    jobFetchQuestionsError: {},

    jobSubmitLoading: false,
    jobSubmit: {},
    jobSubmitError: {},

}

/*****************************************************************
 * 
 * @param {jobInfoLoading,jobInfoSuccess,jobInfoFail} state 
 * @param {jobInfoLoading,jobInfoSuccess,jobInfoFail} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const jobInfoFetchDetailsStart = (state, action) => {
    return updateObject(state, {
        jobInfoLoading: true,
    });
};

const jobInfoFetchDetailsSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        jobInfoSuccess: { ...action.data },
        jobInfoLoading: false,
    });
};

const jobInfoFetchDetailsFail = (state, action) => {
    return updateObject(state, {
        jobInfoLoading: false,
        jobInfoFail: { ...action.error }
    });
};



/*****************************************************************
 * 
 * @param {jobClickProfileLoading,jobClickProfile,jobClickProfileError} state 
 * @param {jobClickProfileLoading,jobClickProfile,jobClickProfileError} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const jobProfileClickStart = (state, action) => {
    return updateObject(state, {
        jobClickProfileLoading: true,
    });
};

const jobProfileClickSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        jobClickProfile: { ...action.data },
        jobClickProfileLoading: false,
    });
};

const jobProfileClickFail = (state, action) => {
    return updateObject(state, {
        jobClickProfileLoading: false,
        jobClickProfileError: { ...action.error }
    });
};


/*****************************************************************
 * 
 * @param {jobFetchQuestionsLoading,jobFetchQuestions,jobFetchQuestionsError} state 
 * @param {jobFetchQuestionsLoading,jobFetchQuestions,jobFetchQuestionsError} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const jobProfileFetchQuestionsStart = (state, action) => {
    return updateObject(state, {
        jobFetchQuestionsLoading: true,
    });
};

const jobProfileFetchQuestionsSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        jobFetchQuestions: { ...action.data },
        jobFetchQuestionsLoading: false,
    });
};

const jobProfileFetchQuestionsFail = (state, action) => {
    return updateObject(state, {
        jobFetchQuestionsLoading: false,
        jobFetchQuestionsError: { ...action.error }
    });
};

/*****************************************************************
 * 
 * @param {jobSubmitLoading,jobSubmit,jobSubmitError} state 
 * @param {jobSubmitLoading,jobSubmit,jobSubmitError} action 
 * updatign the message of success and fail
 * @returns 
 ******************************************************************/

const jobProfileSubmitStart = (state, action) => {
    return updateObject(state, {
        jobSubmitLoading: true,
    });
};

const jobProfileSubmitSuccess = (state, action) => {
    return updateObject(state, {
        // to check for the object length
        // Object.keys(userDetails).length
        jobSubmit: { ...action.data },
        jobSubmitLoading: false,
    });
};

const jobProfileSubmitFail = (state, action) => {
    return updateObject(state, {
        jobSubmitLoading: false,
        jobSubmitError: { ...action.error }
    });
};

const clearJobDetails = (state, action) => {
    return updateObject(state, {
        // coming soon page fetch from server base details
        jobInfoLoading: false,
        jobInfoSuccess: {},
        jobInfoError: {},


        jobClickProfileLoading: false,
        jobClickProfile: {},
        jobClickProfileError: {},

        jobFetchQuestionsLoading: false,
        jobFetchQuestions: {},
        jobFetchQuestionsError: {},

        jobSubmitLoading: false,
        jobSubmit: {},
        jobSubmitError: {},
    });
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        // user login check
        case actionTypes.JOB_INFO_FETCH_DETAILS_START: return jobInfoFetchDetailsStart(state, action);
        case actionTypes.JOB_INFO_FETCH_DETAILS_SUCCESS: return jobInfoFetchDetailsSuccess(state, action);
        case actionTypes.JOB_INFO_FETCH_DETAILS_FAIL: return jobInfoFetchDetailsFail(state, action);

        // user login check
        case actionTypes.JOB_PROFILE_CLICK_START: return jobProfileClickStart(state, action);
        case actionTypes.JOB_PROFILE_CLICK_SUCCESS: return jobProfileClickSuccess(state, action);
        case actionTypes.JOB_PROFILE_CLICK_FAIL: return jobProfileClickFail(state, action);

        // user login check
        case actionTypes.JOB_PROFILE_FETCH_QUESTIONS_START: return jobProfileFetchQuestionsStart(state, action);
        case actionTypes.JOB_PROFILE_FETCH_QUESTIONS_SUCCESS: return jobProfileFetchQuestionsSuccess(state, action);
        case actionTypes.JOB_PROFILE_FETCH_QUESTIONS_FAIL: return jobProfileFetchQuestionsFail(state, action);

        // user login check
        case actionTypes.JOB_PROFILE_SUBMIT_START: return jobProfileSubmitStart(state, action);
        case actionTypes.JOB_PROFILE_SUBMIT_SUCCESS: return jobProfileSubmitSuccess(state, action);
        case actionTypes.JOB_PROFILE_SUBMIT_FAIL: return jobProfileSubmitFail(state, action);


        case actionTypes.CLEAR_JOB_INFO_DETAILS: return clearJobDetails(state, action);
        default: return state;
    }
}

export default jobReducer;