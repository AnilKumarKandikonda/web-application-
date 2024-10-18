import axios from 'axios';
import * as actionTypes from './actionTypes';

/*****************************************
 * job info page start loading (here the loading will be set to true)
 *****************************************/
export const jobInfoFetchDetailsStart = () => {
    return {
        type: actionTypes.JOB_INFO_FETCH_DETAILS_START
    }
}

/*****************************************
 * job info fetch details success (here the loading will be set to false, and update the state data )
 *****************************************/
export const jobInfoFetchDetailsSuccess = (data) => {
    return {
        type: actionTypes.JOB_INFO_FETCH_DETAILS_SUCCESS,
        data: data,
    }
}


/*****************************************
 * job infof fetch details fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const jobInfoFetchDetailsFail = (error) => {
    return {
        type: actionTypes.JOB_INFO_FETCH_DETAILS_FAIL,
        error: error
    }
}

/*****************************************
 * job info fetch details for the particular selected user
 *****************************************/
export const jobInfoDetails = () => {
    return dispatch => {
        dispatch(jobInfoFetchDetailsStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('userInfo', JSON.stringify(res.data.message));
                    dispatch(jobInfoFetchDetailsSuccess(res.data));
                }
                else {
                    dispatch(jobInfoFetchDetailsFail(res.data));
                }
            })
            .catch(err => {
                dispatch(jobInfoFetchDetailsFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JOB PROFILE CLICK (UPDATE COUNT)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*****************************************
 * job profile click start (udate loading)
 *****************************************/
export const jobProfileClickStart = () => {
    return {
        type: actionTypes.JOB_PROFILE_CLICK_START
    }
}

/*****************************************
 * job profile click success (update click couont)
 *****************************************/
export const jobProfileClickSuccess = (data) => {
    return {
        type: actionTypes.JOB_PROFILE_CLICK_SUCCESS,
        data: data,
    }
}


/*****************************************
 * job profile click fail (update click fail)
 *****************************************/
export const jobProfileClickFail = (error) => {
    return {
        type: actionTypes.JOB_PROFILE_CLICK_FAIL,
        error: error
    }
}

/*****************************************
 * job info fetch details for the particular selected user
 *****************************************/
export const jobProfileUserClick = () => {
    return async dispatch => {
        dispatch(jobProfileClickStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        await axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(jobProfileClickSuccess(res.data));
                }
                else {
                    dispatch(jobProfileClickFail(res.data));
                }
            })
            .catch(err => {
                dispatch(jobProfileClickFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JOB PROFILE FETCHING QUESTIONS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*****************************************
 * job profile fetch questions start (udate loading)
 *****************************************/
export const jobProfileFetchQuestionsStart = () => {
    return {
        type: actionTypes.JOB_PROFILE_FETCH_QUESTIONS_START
    }
}

/*****************************************
 * job profile fetch questions success (update fetch questions couont)
 *****************************************/
export const jobProfileFetchQuestionsSuccess = (data) => {
    return {
        type: actionTypes.JOB_PROFILE_FETCH_QUESTIONS_SUCCESS,
        data: data,
    }
}


/*****************************************
 * job profile fetch questions fail (update fetch questions fail)
 *****************************************/
export const jobProfileFetchQuestionsFail = (error) => {
    return {
        type: actionTypes.JOB_PROFILE_FETCH_QUESTIONS_FAIL,
        error: error
    }
}

/*****************************************
 * job info fetch questions
 *****************************************/
export const jobProfileFetchQuestions = () => {
    return dispatch => {
        dispatch(jobProfileFetchQuestionsStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(jobProfileFetchQuestionsSuccess(res.data));
                }
                else {
                    dispatch(jobProfileFetchQuestionsFail(res.data));
                }
            })
            .catch(err => {
                dispatch(jobProfileFetchQuestionsFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JOB PROFILE SUBMIT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*****************************************
 * job profile submit start
 *****************************************/
export const jobProfileSubmitStart = () => {
    return {
        type: actionTypes.JOB_PROFILE_SUBMIT_START
    }
}

/*****************************************
 * job profiel submit success
 *****************************************/
export const jobProfileSubmitSuccess = (data) => {
    return {
        type: actionTypes.JOB_PROFILE_SUBMIT_SUCCESS,
        data: data,
    }
}


/*****************************************
 * job profile submit 
 *****************************************/
export const jobProfileSubmitFail = (error) => {
    return {
        type: actionTypes.JOB_PROFILE_SUBMIT_FAIL,
        error: error
    }
}

/*****************************************
 * job profile submit (data to be passed)
 *****************************************/
export const jobProfileSubmit = () => {
    return dispatch => {
        dispatch(jobProfileSubmitStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(jobProfileSubmitSuccess(res.data));
                }
                else {
                    dispatch(jobProfileSubmitFail(res.data));
                }
            })
            .catch(err => {
                dispatch(jobProfileSubmitFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}



/*****************************************
 * clearning job info details
 *****************************************/
export const clearJobInfoDetails = () => {
    return {
        type: actionTypes.CLEAR_JOB_INFO_DETAILS,
    }
}