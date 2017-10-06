import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { getStorageData } from '../actions'
import { Spinner } from './common'

class Loading extends Component {
	componentDidMount() {
		this.props.getStorageData()
    }
        
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Spinner />
            </View>
        )
    }
}

export default connect(null, {
    getStorageData
})(Loading)
