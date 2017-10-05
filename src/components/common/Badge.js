import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Badge extends Component {
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
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: 'center'
        // justifyContent: 'center',
        // alignItems: 'center'        
    },
    textStyle: {
        color: '#03a9f4',
    }
})

export { Badge }
