import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Container, ActionButton } from './common'
import TransactionsList from './TransactionsList'
import { getUserInfo } from '../actions'

class Home extends Component {
    componentDidMount() {
        this.props.getUserInfo(this.props.token)
    }

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

const mapStateToProps = state => {
    const { token } = state.auth    
    return { token }
}

export default connect(mapStateToProps, { 
	getUserInfo 
})(Home)
