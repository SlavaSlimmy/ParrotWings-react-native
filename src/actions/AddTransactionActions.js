import { Actions } from 'react-native-router-flux'

import {
	USERNAME_TRANSACTION_CHANGED, 
	AMOUNT_TRANSACTION_CHANGED,
	GET_SUGGESTIONS,
	GET_SUGGESTIONS_FAILURE,
	GET_SUGGESTIONS_SUCCESS
} from './types'

export const usernameTransactionChanged = (text) => {
	return {
		type: USERNAME_TRANSACTION_CHANGED,
		payload: text
	}
}

export const amountTransactionChanged = (text) => {
	return {
		type: AMOUNT_TRANSACTION_CHANGED,
		payload: text
	}
}


export function getSuggestionsRequest() {
	return {
		type: GET_SUGGESTIONS
	}
}

export function getSuggestionsFailure() {
	return {
		type: GET_SUGGESTIONS_FAILURE
	}
}

export function getSuggestionsSuccess(data) {
	return {
		type: GET_SUGGESTIONS_SUCCESS,
		payload: data    
	}
}

export function getSuggestions(filter, token) {
    return (dispatch) => {
        dispatch(getSuggestionsRequest());
        return fetch('http://193.124.114.46:3001/api/protected/users/list', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
                body: JSON.stringify({ filter })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return response.text(); 
            })
            .then((data) => {
                if (typeof data === 'string') {
                    dispatch(getSuggestionsFailure())
                } else {
                    dispatch(getSuggestionsSuccess(data))
                }
            })
    }
}
