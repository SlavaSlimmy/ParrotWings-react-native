import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { Badge } from './common'

class TitleHome extends Component {
    render() {
        return (
            <View style={styles.toolbarTitleContainerStyle}>
                <Text style={styles.toolbarTitleStyle} numberOfLines={1}>
                    {this.props.username}
                </Text>
                <Badge text={this.props.balance} style={{ marginLeft: 6 }} />
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
        right: 100,
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
    const { username, balance } = state.userInfo
    return { username, balance }
}

export default connect(mapStateToProps, { 
	
})(TitleHome)
