import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, LayoutAnimation } from 'react-native'
import { Actions } from 'react-native-router-flux';

class TransactionItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.easeInEaseOut();
    }

    onRowPress() {
        Actions.addTransaction({ transaction: this.props.transaction })        
    }

    render() {
        const { username, date, amount, balance } = this.props.transaction;
    
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                    <View style={styles.touchableStyle}>
                        <View style={styles.leftBlockStyle}>
                            <Text style={styles.usernameStyle}>
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
            </View>
        );
      }
}

const styles = StyleSheet.create({
	containerStyle: {
		borderBottomWidth: 1,
		borderColor: '#ddd',
    },
    touchableStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
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
    usernameStyle: {
        fontSize: 16
    },
    amountTextStyle: {
        fontSize: 16,
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
