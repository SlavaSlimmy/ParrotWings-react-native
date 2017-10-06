import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'
import { resetUserInfo } from './UserInfoActions'

import {
    USERNAME_CHANGED, 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    REPASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER,
    SIGNUP_USER,
    SIGNUP_USER_FAIL,
    SIGNUP_USER_SUCCESS,
    RESET_AUTH 
} from './types'

export const usernameChanged = (text) => {
	return {
		type: USERNAME_CHANGED,
		payload: text
	}
}

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
}

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	}
}

export const repasswordChanged = (text) => {
	return {
		type: REPASSWORD_CHANGED,
		payload: text
	}
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });
      return fetch('http://193.124.114.46:3001/sessions/create', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.text(); 
        })
        .then((data) => {
            if (typeof data === 'string') {
                loginUserFail(dispatch, data)
            } else {
                dispatch(loginUserSuccess(data.id_token))
                Actions.main({ type: 'reset' })
            }
        })
    };
}

export const loginUserSuccess = (token) => {
    AsyncStorage.setItem('id_token', token)
    return {
        type: LOGIN_USER_SUCCESS,
        payload: token
    }    
}
  
const loginUserFail = (dispatch, errorText) => {
    dispatch({ 
        type: LOGIN_USER_FAIL,
        payload: errorText 
    })
}

export const signupUser = ({ username, password, email }) => {
    return (dispatch) => {
      dispatch({ type: SIGNUP_USER });
      return fetch('http://193.124.114.46:3001/users', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({ username, password, email })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.text(); 
        })
        .then((data) => {
            if (typeof data === 'string') {
                dispatch(signupUserFail(data))
            } else {
                signupUserSuccess(dispatch, data.id_token)
                Actions.main({ type: 'reset' })                
            }
        })
    };
}

const signupUserSuccess = (dispatch, token) => {
    AsyncStorage.setItem('id_token', token)
    dispatch({
      type: SIGNUP_USER_SUCCESS,
      payload: token
    })
}
  
export const signupUserFail = (errorText) => {
    return {
        type: SIGNUP_USER_FAIL,
        payload: errorText 
    }    
}

export const logoutUser = () => {
    AsyncStorage.removeItem('id_token')
    return (dispatch) => {
        dispatch({ type: LOGOUT_USER })
        dispatch(resetUserInfo())
        Actions.auth({ type: 'reset' })
    }
}

export const resetAuth = () => {
	return {
		type: RESET_AUTH
	}
}
