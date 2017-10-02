import React, { Component } from 'react'
import { Button, Card } from 'react-native-material-ui'
import { Container, Section, Input } from './common'

class LoginForm extends Component {

    render() {
        return (
            <Container>
                <Card>
                    <Section>
                        <Input 
                            label="Email"
                            placeholder="email@gmail.com"
                            //onChangeText={this.onEmailChange.bind(this)}
                            //value={this.props.email}
                        />
                    </Section>

                    <Section>
                        <Input 
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            //onChangeText={this.onPasswordChange.bind(this)}
                            //value={this.props.password}						
                        />                        
                    </Section>

                    <Section style={{ justifyContent: 'center', borderBottomWidth: 0 }}>
                        <Button raised primary text="Log in" />
                        <Button raised text="Sign up" />
                    </Section>
                </Card>
            </Container>
        )
    }

}

export default LoginForm
