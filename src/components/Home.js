import React, { Component } from 'react'
import { Text } from 'react-native'
import { Dialog, DialogDefaultActions } from 'react-native-material-ui'
import { Container, ActionButton } from './common'
import TransactionsList from './TransactionsList'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { checked: false }
    }   

    onAddTransaction() {
        console.log('add trans')
        this.setState({ checked: true })
    }

    render() {
        return (
            <Container>
                <TransactionsList />
                <ActionButton 
                    onPress={this.onAddTransaction.bind(this)} 
                    icon="add" 
                />                
                <Dialog>
                    <Dialog.Title><Text>Hello world</Text></Dialog.Title>
                    <Dialog.Content>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <DialogDefaultActions
                            actions={['Send', 'Cancel']}
                            onActionPress={(action) => { 
                                console.log(action)
                            }}
                        />
                    </Dialog.Actions>
                </Dialog>                
            </Container>
        )
    }
}

export default Home
