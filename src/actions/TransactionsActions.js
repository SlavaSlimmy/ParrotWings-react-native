import { normalize, schema } from 'normalizr'

import {
    GET_TRANSACTIONS_REQUEST, 
    GET_TRANSACTIONS_FAILURE, 
    GET_TRANSACTIONS_SUCCESS,
    SORT_TRANSACTIONS
} from './types'

export function getTransactionsRequest() {
    return {
      type: GET_TRANSACTIONS_REQUEST
    }
}
  
export function getTransactionsFailure(error) {
    return {
      type: GET_TRANSACTIONS_FAILURE,
      payload: error
    }
}
  
export function getTransactionsSuccess(data) {
    return {
      type: GET_TRANSACTIONS_SUCCESS,
      payload: {
        allIds: data.result,
        byId: data.entities.byId,
      }    
    }
}

const byIdSchema = new schema.Entity('byId');
const transSchema = new schema.Array(byIdSchema);
export function getTransactions(token) {
    return (dispatch) => {
        dispatch(getTransactionsRequest());
        return fetch('http://193.124.114.46:3001/api/protected/transactions', {
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
                    dispatch(getTransactionsFailure(data))
                } else {
                    const normalizedData = normalize(data.trans_token, transSchema);
                    dispatch(getTransactionsSuccess(normalizedData))
                    dispatch(sortTransactions('date', 'desc'))
                }
            })
    }
}

export function sortTransactions(property, order) {
  return {
    type: SORT_TRANSACTIONS,
    payload: {
      orderBy: property,
      order
    }      
  }
}
