import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-material-ui'

class ToolbarButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.containerStyle}>
                <Icon name={this.props.icon} color="white" />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        top: -8
    }
})

export default ToolbarButton
