import axios from 'axios';
import * as actionTypes from './actionTypes';

/*****************************************
 * reset password start
 *****************************************/
export const userResetPasswordStart = () => {
    return {
        type: actionTypes.USER_RESET_PASSWORD_START
    }
}

/*****************************************
 * reset password success
 *****************************************/
export const userResetPasswordSuccess = (data) => {
    return {
        type: actionTypes.USER_RESET_PASSWORD_SUCCESS,
        data: data,
    }
}


/*****************************************
 * reset password fail
 *****************************************/
export const userResetPasswordFail = (error) => {
    return {
        type: actionTypes.USER_RESET_PASSWORD_FAIL,
        error: error
    }
}

/*****************************************
 * reset password 
 *****************************************/
export const userResetPassword = (password, confirmPassword) => {
    return dispatch => {
        dispatch(userResetPasswordStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', { 
            password: password,
            confirmPassword: confirmPassword
         }, config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(userResetPasswordSuccess(res.data));
                }
                else {
                    dispatch(userResetPasswordFail(res.data));
                }
            })
            .catch(err => {
                dispatch(userResetPasswordFail({ message: 'Something Went Wrong ', status: err.response.status }));
            });
    }
}

/*****************************************
 * clearning network info details
 *****************************************/
export const clearuserResetPasswordDetails = () => {
    return {
        type: actionTypes.CLEAR_USER_RESET_DETAILS,
    }
}