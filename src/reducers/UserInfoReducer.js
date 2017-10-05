import {
    GET_USER_INFO, 
    GET_USER_INFO_FAILURE, 
    GET_USER_INFO_SUCCESS,
    RESET_USER_INFO 
} from '../actions/types'

const INITIAL_STATE = {
    username: '',
    balance: 0,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_USER_INFO:
            return { ...state, loading: true };
        case GET_USER_INFO_FAILURE:
            return { ...state, loading: false };
        case GET_USER_INFO_SUCCESS:
            return { ...state, 
                loading: false, 
                username: action.payload.username, 
                balance: action.payload.balance 
            };  
        case RESET_USER_INFO:
			return { ...state, ...INITIAL_STATE };                                  		
		default:
			return state
	}
}
