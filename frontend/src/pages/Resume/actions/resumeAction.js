import axios from 'axios';
import * as actionTypes from './actionTypes';
import Cookies from 'js-cookie';

/*****************************************
 * get user resume details start
 *****************************************/
export const getUserResumeDetailsStart = () => {
    return {
        type: actionTypes.GET_USER_RESUME_DETAILS_START
    }
}

/*****************************************
 * get user resume details success
 *****************************************/
export const getUserResumeDetailsSuccess = (data) => {
    return {
        type: actionTypes.GET_USER_RESUME_DETAILS_SUCCESS,
        data: data,
    }
}


/*****************************************
 * get user resume details fail
 *****************************************/
export const getUserResumeDetailsFail = (error) => {
    return {
        type: actionTypes.GET_USER_RESUME_DETAILS_FAIL,
        error: error
    }
}

/*****************************************
 * get user resume details
 *****************************************/
export const getUserResumeDetails = () => {
    return dispatch => {
        dispatch(getUserResumeDetailsStart());
        const token = Cookies.get('token');
        console.log(token);
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
        axios.get('/api/user/resume/getdetails/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(getUserResumeDetailsSuccess(res.data));
                }
                else {
                    dispatch(getUserResumeDetailsFail(res.data));
                }
            })
            .catch(err => {
                dispatch(getUserResumeDetailsFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// UPDATE USER RESUME DETAILS
/////////////////////////////////////////////////////////////////////////////////////////////////

/*****************************************
 * update user resume details start
 *****************************************/
export const uploadUserResumeDetailsStart = () => {
    return {
        type: actionTypes.UPLOAD_USER_RESUME_DETAILS_START
    }
}

/*****************************************
 * update user resume details success
 *****************************************/
export const uploadUserResumeDetailsSuccess = (data) => {
    return {
        type: actionTypes.UPLOAD_USER_RESUME_DETAILS_SUCCESS,
        data: data,
    }
}


/*****************************************
 * update user resume details fail
 *****************************************/
export const uploadUserResumeDetailsFail = (error) => {
    return {
        type: actionTypes.UPLOAD_USER_RESUME_DETAILS_FAIL,
        error: error
    }
}

/*****************************************
 * get user resume details
 *****************************************/
export const uploadUserResumeDetails = (data) => {
    return dispatch => {
        dispatch(uploadUserResumeDetailsStart());
        const token = Cookies.get('token');
        console.log(data);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
        }
        axios.post('/api/user/resume/insert/', data, config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(uploadUserResumeDetailsSuccess(res.data));
                    dispatch(getUserResumeDetails());
                }
                else {
                    dispatch(uploadUserResumeDetailsFail(res.data));
                }
            })
            .catch(err => {
                dispatch(uploadUserResumeDetailsFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// GET USER RESUME PRICING DETAILS
/////////////////////////////////////////////////////////////////////////////////////////////////

/*****************************************
 * get user resume pricing detail start
 *****************************************/
export const getUserResumePricingStart = () => {
    return {
        type: actionTypes.GET_USER_RESUME_PRICING_START
    }
}

/*****************************************
 * get user resume pricing detail success
 *****************************************/
export const getUserResumePricingSuccess = (data) => {
    return {
        type: actionTypes.GET_USER_RESUME_PRICING_SUCCESS,
        data: data,
    }
}


/*****************************************
 * get user resume pricing detail fail
 *****************************************/
export const getUserResumePricingFail = (error) => {
    return {
        type: actionTypes.UPLOAD_USER_RESUME_DETAILS_FAIL,
        error: error
    }
}

/*****************************************
 * get user resume pricing details
 *****************************************/
export const getUserResumePricing = () => {
    return dispatch => {
        dispatch(getUserResumePricingStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(getUserResumePricingSuccess(res.data));
                }
                else {
                    dispatch(getUserResumePricingFail(res.data));
                }
            })
            .catch(err => {
                dispatch(getUserResumePricingFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// GET USER TRENDS STATISTICS
/////////////////////////////////////////////////////////////////////////////////////////////////

/*****************************************
 * get user  detail statistics start
 *****************************************/
export const getUserTrendsStatStart = () => {
    return {
        type: actionTypes.GET_USER_TRENDS_STAT_START
    }
}

/*****************************************
 * get user  detail statistics success
 *****************************************/
export const getUserTrendsStatSuccess = (data) => {
    return {
        type: actionTypes.GET_USER_TRENDS_STAT_SUCCESS,
        data: data,
    }
}


/*****************************************
 * get user  detail statistics fail
 *****************************************/
export const getUserTrendsStatFail = (error) => {
    return {
        type: actionTypes.GET_USER_TRENDS_STAT_FAIL,
        error: error
    }
}

/*****************************************
 * get user detail statistics details
 *****************************************/
export const getUserTrendsStat = () => {
    return dispatch => {
        dispatch(getUserTrendsStatStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(getUserTrendsStatSuccess(res.data));
                }
                else {
                    dispatch(getUserTrendsStatFail(res.data));
                }
            })
            .catch(err => {
                dispatch(getUserTrendsStatFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// POST USER RESUME PRICING DETAILS
/////////////////////////////////////////////////////////////////////////////////////////////////

/*****************************************
 * post user  resume pricing start
 *****************************************/
export const postUserResumePricingStart = () => {
    return {
        type: actionTypes.POST_USER_RESUME_PRICING_START
    }
}

/*****************************************
 * post user  resume pricing success
 *****************************************/
export const postUserResumePricingSuccess = (data) => {
    return {
        type: actionTypes.POST_USER_RESUME_PRICING_SUCCESS,
        data: data,
    }
}


/*****************************************
 * post user  resume pricing fail
 *****************************************/
export const postUserResumePricingFail = (error) => {
    return {
        type: actionTypes.POST_USER_RESUME_PRICING_FAIL,
        error: error
    }
}

/*****************************************
 * get user resume pricing details
 *****************************************/
export const postUserResumePricing = () => {
    return dispatch => {
        dispatch(postUserResumePricingStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(postUserResumePricingSuccess(res.data));
                }
                else {
                    dispatch(postUserResumePricingFail(res.data));
                }
            })
            .catch(err => {
                dispatch(postUserResumePricingFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}


/*****************************************
 * clearning network info details
 *****************************************/
export const clearUserAllResumeDetails = () => {
    return {
        type: actionTypes.CLEAR_USER_ALLRESUME_DETAILS,
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// POST USER RESUME PRICING DETAILS
/////////////////////////////////////////////////////////////////////////////////////////////////

/*****************************************
 * post user  resume pricing start
 *****************************************/
export const resumeDownloadStart = () => {
    return {
        type: actionTypes.POST_USER_RESUME_PRICING_START
    }
}

/*****************************************
 * post user  resume pricing success
 *****************************************/
export const resumeDownloadSuccess = (data) => {
    return {
        type: actionTypes.POST_USER_RESUME_PRICING_SUCCESS,
        data: data,
    }
}


/*****************************************
 * post user  resume pricing fail
 *****************************************/
export const resumeDownloadFail = (error) => {
    return {
        type: actionTypes.POST_USER_RESUME_PRICING_FAIL,
        error: error
    }
}

/*****************************************
 * get user resume pricing details
 *****************************************/
export const resumeDownload = (resumeId) => {
    return dispatch => {
        dispatch(resumeDownloadStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.get(`/api/user/resume/download/${resumeId}`, config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(resumeDownloadSuccess(res.data));
                }
                else {
                    dispatch(resumeDownloadFail(res.data));
                }
            })
            .catch(err => {
                dispatch(resumeDownloadFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}