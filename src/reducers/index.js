import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import TransactionsReducer from './TransactionsReducer'

export default combineReducers({
	auth: AuthReducer,
	transactions: TransactionsReducer
})
