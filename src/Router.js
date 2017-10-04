import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { Icon } from 'react-native-material-ui'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Home from './components/Home'
import AddTransaction from './components/AddTransaction'

class RouterComponent extends Component {
	render() {
		return (
			<Router sceneStyle={{ paddingTop: 60 }}>
				<Scene key="auth">
					<Scene 
						key="login" 
						component={LoginForm} 
						title="Login"
						navigationBarStyle={styles.toolbarStyle} 
						titleStyle={styles.titleStyle}
						initial
					/>
					<Scene 
						key="signup" 
						component={SignupForm} 
						title="Signup"
						navigationBarStyle={styles.toolbarStyle} 
						titleStyle={styles.titleStyle}
					/>				
				</Scene>
				<Scene key="main">
					<Scene 
						key="home" 
						component={Home} 
						title="Home"
						navigationBarStyle={styles.toolbarStyle} 
						titleStyle={styles.titleStyle}
						renderLeftButton={() => 
							<TouchableOpacity onPress={() => console.log('sort')}><Icon name="sort" /></TouchableOpacity>
						}						
						renderRightButton={() => 
							<TouchableOpacity onPress={() => console.log('logout')}><Icon name="exit-to-app" /></TouchableOpacity>
						}
					/>
					<Scene 
						key="addTransaction" 
						component={AddTransaction} 
						title="Add transaction"
						navigationBarStyle={styles.toolbarStyle} 
						titleStyle={styles.titleStyle}
					/>				
				</Scene>
			</Router>
		)
	}
}

const styles = StyleSheet.create({
	toolbarStyle: {
		backgroundColor: '#03a9f4',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 3,
		borderBottomWidth: 0,
	},
	titleStyle: {
		color: 'white',
		fontFamily: 'Roboto',
	}
})

export default RouterComponent
