import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Button } from 'react-native-material-ui'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Container, Section, Input, Autocomplete } from './common'
import { 
    usernameTransactionChanged, 
    amountTransactionChanged,
    getSuggestions,
    clearSuggestions,
    createTransaction,
    createTransactionFailure,
    resetTransaction 
} from '../actions'

class AddTransaction extends Component {
    componentWillMount() {
        if (this.props.transaction) {
            const { username, amount } = this.props.transaction
            this.props.usernameTransactionChanged(username)
            this.props.amountTransactionChanged(Math.abs(amount).toString())
        }
    }

    onUsernameChange(text, fromList) {
        this.props.usernameTransactionChanged(text)
        if (fromList) {
            this.props.clearSuggestions()
        } else {
            this.props.getSuggestions(text, this.props.token)    
        }
    }
        
    onAmountChange(text) {
		this.props.amountTransactionChanged(text)
    }
    
    onCancel() {
        this.props.resetTransaction()
        Actions.pop()
    }

    onSubmit() {
        const { username, amount, token } = this.props;
		let errorText = ''
		if (!username) {
			errorText += 'You must enter username. '
		}
		if (!amount) {
			errorText += 'You must enter PW amount. '
		} else {
			if (!(!isNaN(parseFloat(amount)) && isFinite(amount))) {
				errorText += 'Amount must be numeric. '
			}
            if (amount <= 0) {
                errorText += 'Amount must be more than 0. '
            }
            if (amount > this.props.balance) {
                errorText += 'Not enough PW to remit the transaction. '
            }			
		}

		if (errorText) {
            this.props.createTransactionFailure(errorText)
		} else {
            this.props.createTransaction(username, amount, token)
            this.props.resetTransaction()
		}
    }

    render() {
        const { username, amount, suggestions } = this.props;
        const comp = (a, b) => { return a.toLowerCase().trim() === b.toLowerCase().trim() }
        return (
            <Container>
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={suggestions.length === 1 && comp(username, suggestions[0].name) ? [] : suggestions}
                    defaultValue={username}
                    onChangeText={this.onUsernameChange.bind(this)}
                    placeholder="Search user.."
                    renderItem={({ name }) => (
                    <TouchableOpacity onPress={() => this.onUsernameChange(name, true)}>
                        <Text style={styles.itemText}>
                            {name}
                        </Text>
                    </TouchableOpacity>
                    )}
                />

                <Section style={styles.sectionStyle}>
                    <Input 
                        label="Amount"
                        placeholder="Amount"
                        icon="monetization-on"
                        onChangeText={this.onAmountChange.bind(this)}
                        value={amount}
                    />
                </Section>

                <Text style={styles.errorTextStyle}>
                    { this.props.error }
                </Text>

                <Section style={{ justifyContent: 'center', borderBottomWidth: 0 }}>
                    <View>
                        <Button raised text="Cancel" onPress={this.onCancel.bind(this)} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Button raised primary text="Send" onPress={this.onSubmit.bind(this)} />
                    </View>
                </Section>                
            </Container>
        )
    }
}

const styles = StyleSheet.create({
	sectionStyle: {
        paddingTop: 60,
        marginLeft: 12,
        marginRight: 10
    },
    autocompleteContainer: {
        flex: 1,
        left: 16,
        position: 'absolute',
        right: 16,
        top: 0,
        zIndex: 1
    },
    itemText: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 14
    },
	errorTextStyle: {
		fontSize: 14,
		alignSelf: 'center',
        color: 'red',
        paddingTop: 16,
        paddingBottom: 16
	}                
})

const mapStateToProps = (state) => {
    const { token } = state.auth
    const { username, amount, suggestions, error } = state.transaction
    const { balance } = state.userInfo
	return { username, amount, suggestions, error, token, balance }
}

export default connect(mapStateToProps, { 
    usernameTransactionChanged, 
    amountTransactionChanged, 
    getSuggestions,
    clearSuggestions, 
    createTransaction, 
    createTransactionFailure,
    resetTransaction
})(AddTransaction)
