import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-material-ui'

class ActionButton extends Component {
    render() {
        const { icon, onPress } = this.props
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                    <Icon name={icon} color="white" style={{ alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    buttonStyle: {
        elevation: 4,
        height: 52,
        width: 52,
        borderRadius: 26,
        backgroundColor: '#03a9f4',
        justifyContent: 'center',
        alignItems: 'center'        
    }
})

export { ActionButton }
