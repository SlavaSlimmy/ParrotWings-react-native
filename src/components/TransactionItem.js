import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, LayoutAnimation } from 'react-native'

class TransactionItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.easeInEaseOut();
    }
    
    onRowPress() {
        console.log(this.props.transaction)
    }

    render() {
        const { username, date, amount, balance } = this.props.transaction;
    
        return (
            <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                <View style={styles.containerStyle}>
                    <View style={styles.leftBlockStyle}>
                        <Text>
                            {username}
                        </Text>
                        <Text style={styles.greyTextStyle}>
                            {date}
                        </Text>
                    </View>
                    <View style={styles.rightBlockStyle}>
                        <Text style={[styles.rightTextStyle, styles.amountTextStyle, amount < 0 && styles.amountRedTextStyle]}>
                            {amount}
                        </Text>
                        <Text style={[styles.rightTextStyle, styles.greyTextStyle]}>
                            {balance}
                        </Text>
                    </View>                    
                </View>
            </TouchableOpacity>
        );
      }
}

const styles = StyleSheet.create({
	containerStyle: {
		borderBottomWidth: 1,
		borderColor: '#ddd',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center'
    },
    leftBlockStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    rightBlockStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    rightTextStyle: {
        textAlign: 'right'
    },
    amountTextStyle: {
        color: '#4caf50'
    },
    amountRedTextStyle: {
        color: '#f44336'
    },    
    greyTextStyle: {
        fontSize: 12,
        color: '#9e9e9e'
    }   
})

export default TransactionItem
