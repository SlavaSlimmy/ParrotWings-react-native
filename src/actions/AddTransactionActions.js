import { Actions } from 'react-native-router-flux'

import {
	USERNAME_TRANSACTION_CHANGED, 
	AMOUNT_TRANSACTION_CHANGED,
	GET_SUGGESTIONS,
	GET_SUGGESTIONS_FAILURE,
    GET_SUGGESTIONS_SUCCESS,
    CLEAR_SUGGESTIONS,
    CREATE_TRANSACTION,
    CREATE_TRANSACTION_FAILURE,
    CREATE_TRANSACTION_SUCCESS,
    RESET_TRANSACTION
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

export function clearSuggestions() {
	return {
		type: CLEAR_SUGGESTIONS    
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


export function createTransactionFailure(error) {
    return {
      type: CREATE_TRANSACTION_FAILURE,
      payload: error
    }
}
  
export function createTransactionSuccess(data) {
    return {
      type: CREATE_TRANSACTION_SUCCESS,
      payload: data.trans_token    
    }
}

export function createTransaction(name, amount, token) {
    return (dispatch) => {
        dispatch({ type: CREATE_TRANSACTION });
        return fetch('http://193.124.114.46:3001/api/protected/transactions', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
                body: JSON.stringify({ name, amount })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return response.text(); 
            })
            .then((data) => {
                if (typeof data === 'string') {
                    dispatch(createTransactionFailure(data))
                } else {
                    dispatch(createTransactionSuccess(data))
                    Actions.home({ type: 'reset' });
                }
            })
    }
}

export function resetTransaction() {
    return {
      type: RESET_TRANSACTION
    }
}
