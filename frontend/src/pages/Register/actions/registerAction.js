import axios from 'axios';
import * as actionTypes from './actionTypes';

/*****************************************
 * register user star (here the loading will be set to true)
 *****************************************/
export const userRegisterStart = () => {
    return {
        type: actionTypes.USER_REGISTER_START
    }
}

/*****************************************
 * register user success (here the loading will be set to false, and update the state data )
 *****************************************/
export const userRegisterSuccess = (data) => {
    return {
        type: actionTypes.USER_REGISTER_SUCCESS,
        data: data,
    }
}


/*****************************************
 * register users fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const userRegisterFail = (error) => {
    return {
        type: actionTypes.USER_REGISTER_FAIL,
        error: error
    }
}

/*****************************************
 * register user for the particular selected user
 *****************************************/
export const userRegistration = (data) => {
    console.log('regiser',data);
    return dispatch => {
        dispatch(userRegisterStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/register/', data, config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(userRegisterSuccess(res.data));
                }
                else {
                    dispatch(userRegisterFail(res.data));
                }
            })
            .catch(err => {
                dispatch(userRegisterFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}

/*****************************************
 * clearning network info details
 *****************************************/
export const clearRegistrationDetails = () => {
    return {
        type: actionTypes.CLEAR_ALL_REGISTRATION_DETAILS,
    }
}