import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import TransactionsReducer from './TransactionsReducer'
import AddTransactionReducer from './AddTransactionReducer'
import UserInfoReducer from './UserInfoReducer'
import StorageReducer from './StorageReducer'

export default combineReducers({
	auth: AuthReducer,
	transactions: TransactionsReducer,
	transaction: AddTransactionReducer,
	userInfo: UserInfoReducer,
	storage: StorageReducer
})
