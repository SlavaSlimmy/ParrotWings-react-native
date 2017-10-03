import React from 'react'
import { StyleSheet } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import { Icon } from 'react-native-material-ui'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Home from './components/Home'

const RouterComponent = () => {
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
					renderRightButton={() => { return <Icon name="sort" color="white" /> }}
				/>
			</Scene>
		</Router>
	)
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

export default RouterComponent;
