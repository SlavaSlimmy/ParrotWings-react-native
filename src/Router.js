import React from 'react'
//import { StyleSheet } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'

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
				/>
			</Scene>
		</Router>
	)
}

const styles = {
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
};

export default RouterComponent;
