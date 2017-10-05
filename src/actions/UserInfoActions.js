import { logoutUser } from './AuthActions'

import {
    GET_USER_INFO, 
    GET_USER_INFO_FAILURE, 
    GET_USER_INFO_SUCCESS,
    RESET_USER_INFO
} from './types'

export const resetUserInfo = () => {
    return {
      type: RESET_USER_INFO
    }
}

export const getUserInfoFailure = (error) => {
    return {
      type: GET_USER_INFO_FAILURE,
      payload: error
    }
}
  
export const getUserInfoSuccess = (data) => {
    return {
      type: GET_USER_INFO_SUCCESS,
      payload: {
        username: data.name,
        balance: data.balance,
      }    
    }
}

export const getUserInfo = (token) => {
    return (dispatch) => {
        dispatch({ type: GET_USER_INFO });
        return fetch('http://193.124.114.46:3001/api/protected/user-info', {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return response.text();
            })
            .then((data) => {
                if (typeof data === 'string') {
                    dispatch(getUserInfoFailure(data))
                    dispatch(logoutUser())
                } else {
                    dispatch(getUserInfoSuccess({
                        name: data.user_info_token.name,
                        balance: data.user_info_token.balance,
                    }))
                }
            })
    }
}
