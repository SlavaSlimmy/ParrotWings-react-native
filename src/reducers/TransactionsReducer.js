import {
    GET_TRANSACTIONS_REQUEST, 
    GET_TRANSACTIONS_FAILURE, 
    GET_TRANSACTIONS_SUCCESS,
    SORT_TRANSACTIONS
} from '../actions/types'

const INITIAL_STATE = {
	order: 'desc',
	orderBy: 'date',	
	allIds: [13, 12, 11],
	byId: {
        11: {
            id: 11,
            date: '11 April 2016',
            username: 'gonto',
            amount: -100,
            balance: 400
        },
        12: {
            id: 12,
            date: '12 April 2016',
            username: 'gonto',
            amount: 200,
            balance: 600
        },
        13: {
            id: 13,
            date: '13 April 2016',
            username: 'John Smith',
            amount: -300,
            balance: 300
        }                
    },
	loading: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case GET_TRANSACTIONS_REQUEST:
            return { ...state, loading: true };
        case GET_TRANSACTIONS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case GET_TRANSACTIONS_SUCCESS:
            return { ...state, loading: false, error: '', allIds: action.payload.allIds, byId: action.payload.byId };
        case SORT_TRANSACTIONS:
            const orderBy = action.payload.orderBy
            const order = action.payload.order

            let data = []
            if (orderBy === 'date') {
                data = state.allIds.sort(
                  (a, b) => {
                        const itemA = new Date(state.byId[a][orderBy]).valueOf()
                        const itemB = new Date(state.byId[b][orderBy]).valueOf()
                        if (order === 'desc') {
                            return (itemA > itemB) ? -1 : ((itemB > itemA) ? 1 : 0)    
                        } else {
                            return (itemB > itemA) ? -1 : ((itemA > itemB) ? 1 : 0)    
                        }
                    }
                )
            } else {
                data = state.allIds.sort(
                  (a, b) => {
                        if (order === 'desc') {
                            return (state.byId[a][orderBy] > state.byId[b][orderBy]) ? -1 : ((state.byId[b][orderBy] > state.byId[a][orderBy]) ? 1 : 0)    
                        } else {
                            return (state.byId[b][orderBy] > state.byId[a][orderBy]) ? -1 : ((state.byId[a][orderBy] > state.byId[b][orderBy]) ? 1 : 0)    
                        }                
                    }
                )
            }

            return { ...state, allIds: data, order, orderBy }            
		default:
			return state
	}
}
