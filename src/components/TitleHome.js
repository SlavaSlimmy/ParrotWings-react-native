import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { Badge, Spinner } from './common'

class TitleHome extends Component {
    renderMain() {
        if (this.props.loading) {
            return (
                <Spinner size={24} color="white" />
            )
        }

        return (
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.toolbarTitleStyle} numberOfLines={1}>
                    {this.props.username}
                </Text>
                <Badge text={this.props.balance} style={{ marginLeft: 6 }} />
            </View> 
        )
    }

    render() {
        return (
            <View style={styles.toolbarTitleContainerStyle}>
                {this.renderMain()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
	toolbarTitleContainerStyle: {
        marginTop: 10,
        position: 'absolute',
        top: 5,
        left: 16,
        right: 140,
        flexDirection: 'row',        
	},
	toolbarTitleStyle: {
        textAlign: 'left',
        fontSize: 18,
        //width: 180,
        alignSelf: 'center',        
		color: 'white',
	}
})

const mapStateToProps = state => {
    const { username, balance, loading } = state.userInfo
    return { username, balance, loading }
}

export default connect(mapStateToProps, { 
	
})(TitleHome)
