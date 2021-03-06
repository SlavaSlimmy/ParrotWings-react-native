import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'react-native-material-ui'
import { View, Keyboard, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Section, Input, Spinner, ErrorBlock } from './common'
import { emailChanged, passwordChanged, loginUser, resetAuth } from '../actions'

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);	
    }
    
	onLoginPress() {
        Keyboard.dismiss()    
		const { email, password } = this.props
		this.props.loginUser({ email, password })
    }
        
	onSignupPress() {
        this.props.resetAuth()
        Actions.signup()	
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
                    <Button raised primary text="Log in" onPress={this.onLoginPress.bind(this)} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Button raised text="Sign up" onPress={this.onSignupPress.bind(this)} />
                </View>
            </Section>
		)        
    }

    render() {
        return (
            <Container>
                <ScrollView style={{ flex: 1 }}>
                    <Card>
                        <Section>
                            <Input 
                                label="Email"
                                placeholder="email@gmail.com"
                                icon="email"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}
                            />
                        </Section>

                        <Section>
                            <Input 
                                secureTextEntry
                                label="Password"
                                placeholder="password"
                                icon="https"
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password}
                            />                        
                        </Section>

                        <ErrorBlock text={this.props.error} />                  

                        {this.renderButtons()}

                    </Card>
                </ScrollView>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
	const { email, password, error, loading } = state.auth
	return { email, password, error, loading }
}

export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, loginUser, resetAuth 
})(LoginForm)
