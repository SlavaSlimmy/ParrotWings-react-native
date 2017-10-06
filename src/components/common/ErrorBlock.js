import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ErrorBlock extends Component {
    render() {
        const { text, style, styleText } = this.props
        return (
            <View style={[styles.containerStyle, style]}>
                <Text style={[styles.textStyle, styleText]}>{text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    textStyle: {
		fontSize: 14,
		alignSelf: 'center',
		color: 'red' 
    }
})

export { ErrorBlock }
