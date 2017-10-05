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
	SIGNUP_USER_SUCCESS 
} from '../actions/types'

const INITIAL_STATE = {
	username: '',
	email: '',
	password: '',
	repassword: '',
	loading: false,
	error: '',
	token: null
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USERNAME_CHANGED:
			return { ...state, username: action.payload };		
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case REPASSWORD_CHANGED:
			return { ...state, repassword: action.payload };						
		case LOGIN_USER:
			return { ...state, loading: true, error: '', token: null };			
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, token: action.payload };
		case LOGIN_USER_FAIL:
			return { ...state, loading: false, error: action.payload, password: '', repassword: '' };
		case SIGNUP_USER:
			return { ...state, loading: true, error: '', token: null };
		case SIGNUP_USER_FAIL:
			return { ...state, loading: false, error: action.payload, password: '', repassword: '' };
		case SIGNUP_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, token: action.payload };						
		case LOGOUT_USER:
			return { ...state, ...INITIAL_STATE };			
		default:
			return state
	}
}
