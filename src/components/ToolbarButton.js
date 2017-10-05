import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-material-ui'

class ToolbarButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Icon name={this.props.icon} color="white" />
            </TouchableOpacity>
        )
    }
}

export default ToolbarButton
