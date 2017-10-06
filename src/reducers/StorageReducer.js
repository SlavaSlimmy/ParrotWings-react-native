import {
    GET_STORAGE_DATA, 
    GET_STORAGE_DATA_FAILURE, 
    GET_STORAGE_DATA_SUCCESS 
} from '../actions/types'

const INITIAL_STATE = {
    loading: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_STORAGE_DATA:
            return { ...state, loading: true };
        case GET_STORAGE_DATA_FAILURE:
            return { ...state, loading: false };
        case GET_STORAGE_DATA_SUCCESS:
            return { ...state, loading: false };
		default:
			return state
	}
}
