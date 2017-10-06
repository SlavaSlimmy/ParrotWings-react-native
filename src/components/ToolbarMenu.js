import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
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
            <Menu onSelect={this.handleSelectedItem.bind(this)} style={styles.containerStyle}>
                <MenuTrigger style={styles.menuTriggerStyle}>
                    <View style={styles.triggerButtonStyle}>
                        <Icon name="more-vert" color="white" />
                    </View>                    
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

const styles = StyleSheet.create({
    containerStyle: {
        top: -11, 
        right: -4
    },
    menuTriggerStyle: {
        alignSelf: 'center'  
    },
    triggerButtonStyle: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default connect(null, { 
	logoutUser, sortTransactions 
})(ToolbarMenu)
