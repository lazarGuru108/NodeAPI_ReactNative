import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import DashboardStack from './DashboardDraw';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const MainNav = createAppContainer(
    createSwitchNavigator({
        Home: HomeStack,
        Dashboard: DashboardStack
    })
)
class AppNavigator extends React.Component {

    render() {
        return (
            <MainNav />
        )
    }
}

export default AppNavigator;