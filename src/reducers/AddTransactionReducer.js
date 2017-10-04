import {
	USERNAME_TRANSACTION_CHANGED, 
    AMOUNT_TRANSACTION_CHANGED,
	GET_SUGGESTIONS,
	GET_SUGGESTIONS_FAILURE,
	GET_SUGGESTIONS_SUCCESS    
} from '../actions/types'

const INITIAL_STATE = {
    username: '',
    amount: '',    
    transaction: {},
    suggestions: [],
    loading: false,
    isError: false,
    statusText: ''
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case USERNAME_TRANSACTION_CHANGED:
            return { ...state, username: action.payload };
        case AMOUNT_TRANSACTION_CHANGED:
            return { ...state, amount: action.payload };
        case GET_SUGGESTIONS:
            return state
        case GET_SUGGESTIONS_FAILURE:
            return { ...state, suggestions: [] };
        case GET_SUGGESTIONS_SUCCESS:
            return { ...state, suggestions: action.payload };
		default:
			return state
	}
}
