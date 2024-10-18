import axios from 'axios';
import * as actionTypes from './actionTypes';

/*****************************************
 * coming soon page start loading (here the loading will be set to true)
 *****************************************/
export const faqFetchDetailsStart = () => {
    return {
        type: actionTypes.FETCH_FAQ_DETAILS_START
    }
}

/*****************************************
 * coming soon fetch details success (here the loading will be set to false, and update the state data )
 *****************************************/
export const faqFetchDetailsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_FAQ_DETAILS_SUCCESS,
        data: data,
    }
}


/*****************************************
 * coming soonf fetch details fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const faqFetchDetailsFail = (error) => {
    return {
        type: actionTypes.FETCH_FAQ_DETAILS_FAIL,
        error: error
    }
}

/*****************************************
 * login authentication main which is called into the component
 *****************************************/
export const faqFetchDetails = () => {
    return dispatch => {
        dispatch(faqFetchDetailsStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.get('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(faqFetchDetailsSuccess(res.data));
                }
                else {
                    dispatch(faqFetchDetailsFail(res.data));
                }
            })
            .catch(err => {
                dispatch(faqFetchDetailsFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}