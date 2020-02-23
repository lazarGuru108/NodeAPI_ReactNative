import React, { Component } from 'react';
import { Root } from 'native-base';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer from './store/reducers/usersReducer';
import saleReducer from './store/reducers/salesReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

const mainReducer = combineReducers({
  users: userReducer,
  sales: saleReducer
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false
    };
  }

  componentDidMount = async()=>{
    await Promise.all([
      Asset.loadAsync([
        require('./assets/images/logo.png')
      ]),
      Font.loadAsync({
        // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      })
    ])
     
    this.setLoadingComplete(true);
  }

  setLoadingComplete = (isLoadingComplete)=>{
    this.setState({isLoadingComplete});
  }
  
  render(){
    let { isLoadingComplete } = this.state;
    if (!isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          onError={handleLoadingError}
          onFinish={() => this.setLoadingComplete(true)}
        />
      );
    } else {
      return (
        <Root>
             <Provider store={store}>
               <AppNavigator />
             </Provider>
         </Root>
      );
    }
  }
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}