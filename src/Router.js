import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Home from './components/Home'
import AddTransaction from './components/AddTransaction'
import { resetTransaction } from './actions'
import ToolbarButton from './components/ToolbarButton'
import ToolbarMenu from './components/ToolbarMenu'
import TitleHome from './components/TitleHome'
import Loading from './components/Loading'

class RouterComponent extends Component {
	renderBackButton = () => {
        return (
			<ToolbarButton
				icon="arrow-back" 
				onPress={() => {
					this.props.resetTransaction()
					Actions.pop()					
				}} 
			/>
        )		
	}	

	renderMenu = () => {
        return (
			<ToolbarMenu />
        )		
	}
	
	renderHomeTitle = () => {
        return (
			<TitleHome />
        )		
	}	

	render() {
		return (
			
			<Router sceneStyle={{ paddingTop: 56 }}>
				<Scene key="root">
					<Scene 
						key="loading" 
						component={Loading} 
						title="Loading..."
						navigationBarStyle={styles.toolbarStyle} 
						titleStyle={styles.titleStyle}
						initial
					/>					
					<Scene key="auth">
						<Scene 
							key="login" 
							component={LoginForm} 
							title="Login"
							navigationBarStyle={styles.toolbarStyle} 
							titleStyle={styles.titleStyle}
						/>
						<Scene 
							key="signup" 
							component={SignupForm} 
							title="Signup"
							navigationBarStyle={styles.toolbarStyle} 
							titleStyle={styles.titleStyle}
							renderBackButton={this.renderBackButton.bind(this)}
						/>				
					</Scene>
					<Scene key="main">
						<Scene 
							key="home" 
							component={Home}
							renderTitle={this.renderHomeTitle.bind(this)}
							navigationBarStyle={styles.toolbarStyle} 
							renderRightButton={this.renderMenu.bind(this)}
						/>
						<Scene 
							key="addTransaction" 
							component={AddTransaction} 
							title="Add transaction"
							navigationBarStyle={styles.toolbarStyle} 
							titleStyle={styles.titleStyle}
							renderBackButton={this.renderBackButton.bind(this)}
						/>				
					</Scene>
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

export default connect(null, { 
	resetTransaction
})(RouterComponent)

