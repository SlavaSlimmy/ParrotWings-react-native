import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-native-material-ui'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Container, Section, Input, Autocomplete } from './common'
import { 
    usernameTransactionChanged, 
    amountTransactionChanged,
    getSuggestions 
} from '../actions'

class AddTransaction extends Component {
    componentWillMount() {
        if (this.props.transaction) {
            let amountView = ''
            const { username, amount } = this.props.transaction
            this.props.usernameTransactionChanged(username)
            if (amount && (!isNaN(parseFloat(amount)) && isFinite(amount)) && amount !== 0) {
                amountView = Math.abs(amount)
            }
            this.props.amountTransactionChanged(amountView.toString())
        }
    }

    onUsernameChange(text) {
        this.props.usernameTransactionChanged(text)
        this.props.getSuggestions(text, this.props.token)
    }
        
    onAmountChange(text) {
		this.props.amountTransactionChanged(text)
	}

    render() {
        const { username, amount, suggestions } = this.props;
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        return (
            <Container>
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={suggestions.length === 1 && comp(username, suggestions[0].title) ? [] : suggestions}
                    defaultValue={username}
                    onChangeText={this.onUsernameChange.bind(this)}
                    placeholder="Search user.."
                    renderItem={({ name }) => (
                    <TouchableOpacity onPress={() => this.onUsernameChange(name)}>
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

                <Section style={{ justifyContent: 'center', borderBottomWidth: 0 }}>
                    <View>
                        <Button raised text="Cancel" />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Button raised primary text="Send" />
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
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        fontSize: 14
    },            
})

const mapStateToProps = (state) => {
    const { token } = state.auth
	const { username, amount, suggestions } = state.transaction
	return { username, amount, suggestions, token }
}

export default connect(mapStateToProps, { 
	usernameTransactionChanged, amountTransactionChanged, getSuggestions
})(AddTransaction)
