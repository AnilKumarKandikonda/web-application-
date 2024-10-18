import axios from 'axios';
import * as actionTypes from './actionTypes';

/*****************************************
 * network info page start loading (here the loading will be set to true)
 *****************************************/
export const networkInfoFetchDetailsStart = () => {
    return {
        type: actionTypes.NETWORK_INFO_FETCH_DETAILS_START
    }
}

/*****************************************
 * network info fetch details success (here the loading will be set to false, and update the state data )
 *****************************************/
export const networkInfoFetchDetailsSuccess = (data) => {
    return {
        type: actionTypes.NETWORK_INFO_FETCH_DETAILS_SUCCESS,
        data: data,
    }
}


/*****************************************
 * network infof fetch details fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const networkInfoFetchDetailsFail = (error) => {
    return {
        type: actionTypes.NETWORK_INFO_FETCH_DETAILS_FAIL,
        error: error
    }
}

/*****************************************
 * network info fetch details for the particular selected user
 *****************************************/
export const networkInfoDetails = () => {
    return dispatch => {
        dispatch(networkInfoFetchDetailsStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', config)
            .then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('userInfo', JSON.stringify(res.data.message));
                    dispatch(networkInfoFetchDetailsSuccess(res.data));
                }
                else {
                    dispatch(networkInfoFetchDetailsFail(res.data));
                }
            })
            .catch(err => {
                dispatch(networkInfoFetchDetailsFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}

/*****************************************
 * clearning network info details
 *****************************************/
export const clearNetworkInfoDetails = () => {
    return {
        type: actionTypes.CLEAR_NETWORK_INFO_DETAILS,
    }
}