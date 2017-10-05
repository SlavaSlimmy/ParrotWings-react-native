import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { COLOR, ThemeProvider } from 'react-native-material-ui'
import { MenuContext } from 'react-native-menu'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'


const uiTheme = {
  palette: {
      primaryColor: COLOR.lightBlue500,
  },
}

export default class App extends Component {
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <MenuContext style={{ flex: 1 }}>
            <Router />
          </MenuContext>
        </ThemeProvider>
      </Provider>
    );
  }
}
