import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import TransactionItem from './TransactionItem'
import { getTransactions } from '../actions'

class TransactionsList extends Component {
    componentWillMount() {
        this.props.getTransactions(this.props.token);
    }

	keyExtractor(item, index) {
		return item.id
	}

	renderRow(transaction) {
		return <TransactionItem transaction={transaction.item} />
	}

	render() {
		return (
            <FlatList
                data={this.props.transactions}
                renderItem={this.renderRow}
                keyExtractor={this.keyExtractor}
            />
		);
	}
}

const mapStateToProps = state => {
    const transactions = _.map(state.transactions.allIds, (val) => {
        return state.transactions.byId[val];
    })
    const { token } = state.auth    
    return { transactions, token }
};

export default connect(mapStateToProps, { getTransactions })(TransactionsList)
