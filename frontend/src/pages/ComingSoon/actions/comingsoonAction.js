import axios from 'axios';
import * as actionTypes from './actionTypes';

/*****************************************
 * coming soon page start loading (here the loading will be set to true)
 *****************************************/
export const comingSoonStart = () => {
    return {
        type: actionTypes.COMING_SOON_START
    }
}

/*****************************************
 * coming soon fetch details success (here the loading will be set to false, and update the state data )
 *****************************************/
export const comingSoonSuccess = (data) => {
    return {
        type: actionTypes.COMING_SOON_SUCCESS,
        data: data,
    }
}


/*****************************************
 * coming soonf fetch details fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const comingSoonFail = (error) => {
    return {
        type: actionTypes.COMING_SOON_FAIL,
        error: error
    }
}

/*****************************************
 * login authentication main which is called into the component
 *****************************************/
export const comingSoonDetails = () => {
    return dispatch => {
        dispatch(comingSoonStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('userInfo', JSON.stringify(res.data.message));
                    dispatch(comingSoonSuccess(res.data));
                }
                else {
                    dispatch(comingSoonFail(res.data));
                }
            })
            .catch(err => {
                dispatch(comingSoonFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}