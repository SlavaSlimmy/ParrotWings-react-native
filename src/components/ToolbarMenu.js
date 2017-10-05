import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu'
import { Icon } from 'react-native-material-ui'
import { logoutUser, sortTransactions } from '../actions'

class ToolbarMenu extends Component {
    handleSelectedItem(value) {
        switch (value) {
            case 1:
                this.props.sortTransactions('date', 'desc')
                break
            case 2:
                this.props.sortTransactions('username', 'desc')
                break                
            case 3:
                this.props.sortTransactions('amount', 'desc')
                break                
            case 4:
                this.props.logoutUser()
                break                
            default:
                return
        }
    }

    render() {
        return (
            <Menu onSelect={this.handleSelectedItem.bind(this)}>
                <MenuTrigger>
                    <Icon name="more-vert" color="white" />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption value={1}>
                        <Text>Sort by date</Text>
                    </MenuOption>
                    <MenuOption value={2}>
                        <Text>Sort by name</Text>
                    </MenuOption>
                    <MenuOption value={3}>
                        <Text>Sort by amount</Text>
                    </MenuOption>
                    <MenuOption value={4}>
                        <Text>Logout</Text>
                    </MenuOption>                                        
                </MenuOptions>
            </Menu>            
        )
    }
}

export default connect(null, { 
	logoutUser, sortTransactions 
})(ToolbarMenu)
