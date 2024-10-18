import axios from 'axios';
import * as actionTypes from './actionTypes';

/*****************************************
 * coming soon page start loading (here the loading will be set to true)
 *****************************************/
export const contactFormPostStart = () => {
    return {
        type: actionTypes.CONTACT_FORM_POST_START
    }
}

/*****************************************
 * coming soon fetch details success (here the loading will be set to false, and update the state data )
 *****************************************/
export const contactFormPostSuccess = (data) => {
    return {
        type: actionTypes.CONTACT_FORM_POST_SUCCESS,
        data: data,
    }
}


/*****************************************
 * coming soonf fetch details fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const contactFormPostFail = (error) => {
    return {
        type: actionTypes.CONTACT_FORM_POST_FAIL,
        error: error
    }
}

/*****************************************
 * login authentication main which is called into the component
 *****************************************/
export const contactFormPostData = (data) => {
    return dispatch => {
        dispatch(contactFormPostStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/ticket/generateticket/', data, config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(contactFormPostSuccess(res.data));
                }
                else {
                    dispatch(contactFormPostFail(res.data));
                }
            })
            .catch(err => {
                dispatch(contactFormPostFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}


/*****************************************
 * EMPTY CONTACT PAGE DATA
 *****************************************/
export const emptyContactPageData = () => {
    return {
        type: actionTypes.EMPTY_CONTACT_PAGE_DATA,
    }
}