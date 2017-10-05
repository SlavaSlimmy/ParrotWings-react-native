import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'react-native-material-ui'
import { View, Text, StyleSheet, Keyboard } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Section, Input, Spinner } from './common'
import { 
    usernameChanged, 
    emailChanged, 
    passwordChanged, 
    repasswordChanged, 
    signupUser 
} from '../actions'

class SignupForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
    }
    
	onUsernameChange(text) {
		this.props.usernameChanged(text);
    }    
    
	onPasswordChange(text) {
		this.props.passwordChanged(text);	
    } 
    
	onRepasswordChange(text) {
		this.props.repasswordChanged(text);	
    }    

	onLoginPress() {
        Actions.login({ type: 'reset' })	
    }    
    
    onSignupPress() {
        Keyboard.dismiss()    
		const { username, email, password } = this.props
		this.props.signupUser({ username, email, password })        
    }

    renderButtons() {
		if (this.props.loading) {
			return (
                <Section style={{ justifyContent: 'center', borderBottomWidth: 0 }}>
                    <Spinner size="large" />
                </Section>
            )
		}

		return (
            <Section style={{ justifyContent: 'center', borderBottomWidth: 0 }}>
                <View>
                    <Button raised primary text="Sign up" onPress={this.onSignupPress.bind(this)} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Button raised text="Log in" onPress={this.onLoginPress.bind(this)} />
                </View>
            </Section>
		)        
    }

    render() {
        return (
            <Container>
                <Card>
                    <Section>
                        <Input 
                            icon="person"
                            placeholder="John Smith"
                            onChangeText={this.onUsernameChange.bind(this)}
                            value={this.props.username}
                        />
                    </Section>

                    <Section>
                        <Input 
                            icon="email"
                            placeholder="email@gmail.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </Section>

                    <Section>
                        <Input 
                            secureTextEntry
                            placeholder="password"
                            icon="https"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}						
                        />                        
                    </Section>

                    <Section>
                        <Input 
                            secureTextEntry
                            placeholder="password again"
                            icon="https"
                            onChangeText={this.onRepasswordChange.bind(this)}
                            value={this.props.repassword}						
                        />                        
                    </Section>

                    <Text style={styles.errorTextStyle}>
                        { this.props.error }
                    </Text> 

                    {this.renderButtons()}

                </Card>
            </Container>
        )
    }

}

const styles = StyleSheet.create({
	errorTextStyle: {
		fontSize: 14,
		alignSelf: 'center',
		color: 'red'
	}
})

const mapStateToProps = (state) => {
	const { username, email, password, repassword, error, loading } = state.auth
	return { username, email, password, repassword, error, loading }
}

export default connect(mapStateToProps, { 
	usernameChanged, emailChanged, passwordChanged, repasswordChanged, signupUser 
})(SignupForm)
