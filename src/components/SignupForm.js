import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'react-native-material-ui'
import { View, Keyboard, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Section, Input, Spinner, ErrorBlock } from './common'
import { 
    usernameChanged, 
    emailChanged, 
    passwordChanged, 
    repasswordChanged, 
    signupUser,
    signupUserFail,
    resetAuth 
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
        this.props.resetAuth()
        Actions.login({ type: 'reset' })	
    }    
    
    onSignupPress() {
        Keyboard.dismiss()    
        const { username, email, password, repassword } = this.props
        
        let errorText = ''
        const requiredFields = ['username', 'email', 'password', 'repassword']
        requiredFields.forEach(field => {
          if (!this.props[field]) {
            errorText += `Required field: ${field}. `
          }
        })
        if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errorText += 'Invalid email address. '
        }
        if (username && username.length < 5) {
            errorText += 'The name must be more than 5 letters. '
        }  
        if (password && password.length < 5) {
            errorText += 'Must be 5 characters or more. '
        }
        if (password && repassword && password !== repassword) {
            errorText += 'Passwords do not match.'
        }         

		if (errorText) {
            this.props.signupUserFail(errorText)
		} else {
            this.props.signupUser({ username, email, password })
		}
    }

    renderButtons() {
		if (this.props.loading) {
			return (
                <Spinner size="large" />
            )
		}

		return (
            <Button raised primary text="Sign up" onPress={this.onSignupPress.bind(this)} />
		)        
    }

    render() {
        return (
            <Container>
                <ScrollView style={{ flex: 1 }}>
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

                        <ErrorBlock text={this.props.error} />

                        <Section style={{ justifyContent: 'center', borderBottomWidth: 0 }}>
                            {this.renderButtons()}
                        </Section>

                    </Card>
                </ScrollView>
            </Container>
        )
    }

}

const mapStateToProps = (state) => {
	const { username, email, password, repassword, error, loading } = state.auth
	return { username, email, password, repassword, error, loading }
}

export default connect(mapStateToProps, { 
    usernameChanged, 
    emailChanged, 
    passwordChanged, 
    repasswordChanged, 
    signupUser, 
    signupUserFail,
    resetAuth 
})(SignupForm)
