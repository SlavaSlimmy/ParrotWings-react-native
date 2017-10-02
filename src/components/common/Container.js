import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

Container.propTypes = {
    children: PropTypes.node,
}

export { Container }
