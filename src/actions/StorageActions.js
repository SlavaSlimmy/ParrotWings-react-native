import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { loginUserSuccess } from './AuthActions'

import {
    GET_STORAGE_DATA, 
    GET_STORAGE_DATA_FAILURE, 
    GET_STORAGE_DATA_SUCCESS
} from './types'

export const getStorageData = () => {
    return (dispatch) => {
        dispatch({ type: GET_STORAGE_DATA })
		AsyncStorage.getItem('id_token', (error, result) => {
			if (result !== null) {
                dispatch({ type: GET_STORAGE_DATA_SUCCESS })
                dispatch(loginUserSuccess(result))
                Actions.main({ type: 'reset' })
            } else {
                dispatch({ type: GET_STORAGE_DATA_FAILURE })
                Actions.auth({ type: 'reset' })
            }
		})        
    }
}
