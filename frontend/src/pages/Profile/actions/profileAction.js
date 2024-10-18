import axios from 'axios';
import * as actionTypes from './actionTypes';

/*****************************************
 * fetch user profile details loading (here the loading will be set to true)
 *****************************************/
export const fetchProfileUserDetailsStart = () => {
    return {
        type: actionTypes.NETWORK_INFO_FETCH_DETAILS_START
    }
}

/*****************************************
 * fetch user profile details success (here the loading will be set to false, and update the state data )
 *****************************************/
export const fetchProfileUserDetailsSuccess = (data) => {
    return {
        type: actionTypes.NETWORK_INFO_FETCH_DETAILS_SUCCESS,
        data: data,
    }
}


/*****************************************
 * fetch user profile details fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const fetchProfileUserDetailsFail = (error) => {
    return {
        type: actionTypes.NETWORK_INFO_FETCH_DETAILS_FAIL,
        error: error
    }
}

/*****************************************
 * fetch user profile details
 *****************************************/
export const fetchProfileUserDetails = () => {
    return dispatch => {
        dispatch(fetchProfileUserDetailsStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(fetchProfileUserDetailsSuccess(res.data));
                }
                else {
                    dispatch(fetchProfileUserDetailsFail(res.data));
                }
            })
            .catch(err => {
                dispatch(fetchProfileUserDetailsFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// NEXT ACTION (UPDATING RESUME)
///////////////////////////////////////////////////////////////////////////////////////////////////////

/*****************************************
 * udpate user resume loading (here the loading will be set to true)
 *****************************************/
export const updateProfileUserResumeStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_RESUME_START
    }
}

/*****************************************
 * * udpate user resume success (here the loading will be set to false, and update the state data )
 *****************************************/
export const updateProfileUserResumeSuccess = (data) => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_RESUME_SUCCESS,
        data: data,
    }
}


/*****************************************
 * * udpate user resume fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const updateProfileUserResumeFail = (error) => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_RESUME_FAIL,
        error: error
    }
}

/*****************************************
 * update profile user resume
 *****************************************/
export const updateProfileUserResume = () => {
    return dispatch => {
        dispatch(updateProfileUserResumeStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(updateProfileUserResumeSuccess(res.data));
                }
                else {
                    dispatch(updateProfileUserResumeFail(res.data));
                }
            })
            .catch(err => {
                dispatch(updateProfileUserResumeFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// NEXT ACTION (UPDATING PROFILE USER SUMMARY)
///////////////////////////////////////////////////////////////////////////////////////////////////////


/*****************************************
 ** update profile summary loading (here the loading will be set to true)
 *****************************************/
export const updateProfileUserSummaryStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_SUMMARY_START
    }
}

/*****************************************
 ** update profile summary success (here the loading will be set to false, and update the state data )
 *****************************************/
export const updateProfileUserSummarySuccess = (data) => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_SUMMARY_SUCCESS,
        data: data,
    }
}


/*****************************************
 * * update profile summary fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const updateProfileUserSummaryFail = (error) => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_SUMMARY_FAIL,
        error: error
    }
}

/*****************************************
 * update profile summary
 *****************************************/
export const updateProfileUserSummary = () => {
    return dispatch => {
        dispatch(updateProfileUserSummaryStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(updateProfileUserSummarySuccess(res.data));
                }
                else {
                    dispatch(updateProfileUserSummaryFail(res.data));
                }
            })
            .catch(err => {
                dispatch(updateProfileUserSummaryFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// NEXT ACTION (UPDATING PROFILE USER ECE -> education, certification and experience)
///////////////////////////////////////////////////////////////////////////////////////////////////////


/*****************************************
 ** update profile summary loading (here the loading will be set to true)
 *****************************************/
 export const updateProfileUserEceStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_ECE_START
    }
}

/*****************************************
 ** update profile Ece success (here the loading will be set to false, and update the state data )
 *****************************************/
export const updateProfileUserEceSuccess = (data) => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_ECE_SUCCESS,
        data: data,
    }
}


/*****************************************
 * * update profile Ece fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const updateProfileUserEceFail = (error) => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_ECE_FAIL,
        error: error
    }
}

/*****************************************
 * update profile Ece
 *****************************************/
export const updateProfileUserEce = () => {
    return dispatch => {
        dispatch(updateProfileUserEceStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(updateProfileUserEceSuccess(res.data));
                }
                else {
                    dispatch(updateProfileUserEceFail(res.data));
                }
            })
            .catch(err => {
                dispatch(updateProfileUserEceFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// NEXT ACTION (ADD PROFILE USER ECE -> education, certification and experience)
///////////////////////////////////////////////////////////////////////////////////////////////////////


/*****************************************
 ** add profile summary loading (here the loading will be set to true)
 *****************************************/
 export const addProfileUserEceStart = () => {
    return {
        type: actionTypes.ADD_NEW_PROFILE_USER_ECE_START
    }
}

/*****************************************
 ** add profile Ece success (here the loading will be set to false, and add the state data )
 *****************************************/
export const addProfileUserEceSuccess = (data) => {
    return {
        type: actionTypes.ADD_NEW_PROFILE_USER_ECE_SUCCESS,
        data: data,
    }
}


/*****************************************
 * * add profile Ece fail (here the loading will be set to false, and adds the error data)
 *****************************************/
export const addProfileUserEceFail = (error) => {
    return {
        type: actionTypes.ADD_NEW_PROFILE_USER_ECE_FAIL,
        error: error
    }
}

/*****************************************
 * add profile Ece
 *****************************************/
export const addProfileUserEce = () => {
    return dispatch => {
        dispatch(addProfileUserEceStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(addProfileUserEceSuccess(res.data));
                }
                else {
                    dispatch(addProfileUserEceFail(res.data));
                }
            })
            .catch(err => {
                dispatch(addProfileUserEceFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// NEXT ACTION (UPDATING PROFILE USER SKILLS)
///////////////////////////////////////////////////////////////////////////////////////////////////////


/*****************************************
 ** update profile skills loading (here the loading will be set to true)
 *****************************************/
 export const updateProfileUserSkillsStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_SKILLS_START
    }
}

/*****************************************
 ** update profile Skills success (here the loading will be set to false, and update the state data )
 *****************************************/
export const updateProfileUserSkillsSuccess = (data) => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_SKILLS_SUCCESS,
        data: data,
    }
}


/*****************************************
 * * update profile Skills fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const updateProfileUserSkillsFail = (error) => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_SKILLS_FAIL,
        error: error
    }
}

/*****************************************
 * update profile Skills
 *****************************************/
export const updateProfileUserSkills = () => {
    return dispatch => {
        dispatch(updateProfileUserSkillsStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(updateProfileUserSkillsSuccess(res.data));
                }
                else {
                    dispatch(updateProfileUserSkillsFail(res.data));
                }
            })
            .catch(err => {
                dispatch(updateProfileUserSkillsFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// NEXT ACTION (UPDATING PROFILE USER SKILLS)
///////////////////////////////////////////////////////////////////////////////////////////////////////


/*****************************************
 ** update profile OtherDetails loading (here the loading will be set to true)
 *****************************************/
 export const updateProfileUserOtherDetailsStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_OTHER_DETAILS_START
    }
}

/*****************************************
 ** update profile OtherDetails success (here the loading will be set to false, and update the state data )
 *****************************************/
export const updateProfileUserOtherDetailsSuccess = (data) => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_OTHER_DETAILS_SUCCESS,
        data: data,
    }
}


/*****************************************
 * * update profile OtherDetails fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const updateProfileUserOtherDetailsFail = (error) => {
    return {
        type: actionTypes.UPDATE_PROFILE_USER_OTHER_DETAILS_FAIL,
        error: error
    }
}

/*****************************************
 * update profile OtherDetails
 *****************************************/
export const updateProfileUserOtherDetails = () => {
    return dispatch => {
        dispatch(updateProfileUserOtherDetailsStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(updateProfileUserOtherDetailsSuccess(res.data));
                }
                else {
                    dispatch(updateProfileUserOtherDetailsFail(res.data));
                }
            })
            .catch(err => {
                dispatch(updateProfileUserOtherDetailsFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}


/*****************************************
 * clearning profile page details
 *****************************************/
export const clearProfilePageDetails = () => {
    return {
        type: actionTypes.CLEAR_PROFILE_USER_DETAILS,
    }
}