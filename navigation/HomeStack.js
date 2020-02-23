import React from 'react';

import HomeScreen from '../screens/Home/HomeScreen';
import { createStackNavigator } from 'react-navigation-stack';

const HomeStack = createStackNavigator({
    Home: HomeScreen
}, {
    headerMode: 'none',
    headerShown: false,
});
HomeStack.path = "/home";
export default HomeStack;
