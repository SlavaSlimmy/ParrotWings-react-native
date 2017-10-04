import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container, ActionButton } from './common'
import TransactionsList from './TransactionsList'

class Home extends Component {
    onAddTransaction() {
        Actions.addTransaction()
    }

    render() {
        return (
            <Container>
                <TransactionsList />
                <ActionButton 
                    onPress={this.onAddTransaction.bind(this)} 
                    icon="add" 
                />                
            </Container>
        )
    }
}

export default Home
