import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import TransactionsReducer from './TransactionsReducer'
import AddTransactionReducer from './AddTransactionReducer'

export default combineReducers({
	auth: AuthReducer,
	transactions: TransactionsReducer,
	transaction: AddTransactionReducer
})
