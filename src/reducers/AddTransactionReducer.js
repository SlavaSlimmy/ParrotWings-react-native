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
} from '../actions/types'

const INITIAL_STATE = {
    username: '',
    amount: '',    
    suggestions: [],
    loading: false,
    error: ''
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
        case CLEAR_SUGGESTIONS:
            return { ...state, suggestions: [] };            
        case CREATE_TRANSACTION:
            return { ...state, loading: true, error: '' };
        case CREATE_TRANSACTION_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CREATE_TRANSACTION_SUCCESS:
            return { ...state, loading: false, error: '' };
        case RESET_TRANSACTION:
            return { ...state, ...INITIAL_STATE };                                                
		default:
			return state
	}
}
