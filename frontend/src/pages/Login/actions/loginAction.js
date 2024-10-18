import axios from 'axios';
import * as actionTypes from './actionTypes';

/*****************************************
 * login authentication start (here the loading will be set to true)
 *****************************************/
export const loginAuthStart = () => {
    return {
        type: actionTypes.LOGIN_AUTH_START
    }
}

/*****************************************
 * login authentication success (here the loading will be set to false, and update the state data )
 *****************************************/
export const loginAuthSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_AUTH_SUCCESS,
        data: data,
    }
}


/*****************************************
 * login authentication fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const loginAuthFail = (error) => {
    return {
        type: actionTypes.LOGIN_AUTH_FAIL,
        error: error
    }
}

/*****************************************
 * login authentication main which is called into the component
 *****************************************/
export const userLogin = (email, password, remember) => {
    return dispatch => {
        localStorage.removeItem('userInfo');
        dispatch(loginAuthStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/login/', {
            'email': email,
            'password': password,
            'remember': remember
        }, config)
            .then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('userInfo', JSON.stringify(res.data.message));
                    dispatch(loginAuthSuccess(res.data));
                }
                else {
                    dispatch(loginAuthFail(res.data));
                }
            })
            .catch(err => {
                dispatch(loginAuthFail({ message: 'Error Logging in! Try contacting us ', status: err.response.status }));
            });
    }
}


/*****************************************
 * login forgot password request start (here the loading will be set to true)
 *****************************************/
export const forgotPasswordStart = () => {
    return {
        type: actionTypes.FORGOT_PASSWORD_START
    }
}

/*****************************************
 * login forgot password request success (here the loading will be set to false, and update the state data )
 *****************************************/
export const forgotPasswordSuccess = (data) => {
    return {
        type: actionTypes.FORGOT_PASSWORD_SUCCESS,
        data: data,
    }
}


/*****************************************
 * login forgot password request fail (here the loading will be set to false, and updates the error data)
 *****************************************/
export const forgotPasswordFail = (error) => {
    return {
        type: actionTypes.FORGOT_PASSWORD_FAIL,
        error: error
    }
}

/*****************************************
 * login forgot password handler which is called into the login component
 *****************************************/
export const userForgotPassword = (email) => {
    return dispatch => {
        localStorage.removeItem('userInfo');
        dispatch(forgotPasswordStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.post('/api/auth/forgotpassword/', {
            'email': email,
        }, config)
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(forgotPasswordSuccess(res.data));
                }
                else {
                    dispatch(forgotPasswordFail(res.data));
                }
            })
            .catch(err => {
                dispatch(forgotPasswordFail({ message: 'Error sending email! Try contacting us ', status: err.response.status }));
            });
    }
}