import React from 'react';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ManageSupplier from '../screens/Supplier/ManageSupplier';
import AddSupplier from '../screens/Supplier/AddSupplier';
import { createStackNavigator } from 'react-navigation-stack';
import DrawerContainer from '../components/DrawerContainer';
import { View, Icon, Text, Button } from 'native-base';
import { TouchableOpacity } from 'react-native';
import ManagePurchase from '../screens/Purchase/ManagePurchase';
import ManageProduct from '../screens/Product/ManageProduct';
import ManageSale from '../screens/Sales/ManageSale';
import ManageUsers from '../screens/Users/ManageUsers';
import Test from '../screens/Test/Test';
import ManageStores from '../screens/Stores/ManageStores';
import Analytics from '../screens/Analytics/Analytics';
import Transfer from '../screens/Transfer/Transfer';
import SendEmail from '../screens/SendEmail/SendEmail';
import Appointment from '../screens/Appointment/Appointment';
import ManageRole from '../screens/ManageRole/ManageRole';

const DashboardDrawer = createDrawerNavigator({
    Dashboard: DashboardScreen,
    ManageSupplier: ManageSupplier,
    AddSupplier: ManageSupplier,
    ManagePurchase: ManagePurchase,
    AddPurchase: ManagePurchase,
    AddProduct: ManageProduct,
    ManageProduct: ManageProduct,
    ManageSale: ManageSale,
    ManageUsers: ManageUsers,
    ManageStores: ManageStores,
    Analytics: Analytics,
    Transfer: Transfer,
    SendEmail: SendEmail,
    Appointment: Appointment,
    ManageRole: ManageRole,
    Test: Test,
    AddProduct: AddSupplier
}, {
    initialRouteName: 'Dashboard',
    contentOptions: {
        activeTintColor: '#e91e63',
    },
    contentComponent: DrawerContainer,
    drawerType: 'front',
    navigationOptions: ()=>({
    headerTitle: ()=><Text>{"Dashboard"}</Text>
    })
})

toggleMenu = () => {

}

export default DashboardStack = createStackNavigator({
    Main: {
        screen: DashboardDrawer,
        navigationOptions: ({ navigation }) => ({
            headerTitle:()=><Text style={{color: 'lightgreen', fontWeight: 'bold'}}>{navigation.state.index?navigation.state.routes[navigation.state.index].params.name : 'Dashboard'}</Text>,
            headerLeft: () => {
                return <View style={{ padding: 5 }}>
                <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
                    <Icon name='ios-keypad' type='Ionicons' size={35} />
                </TouchableOpacity>
                </View>
            },
            headerTransparent: false,
        })
    },
}, {
    headerMode: 'screen',
    // headerShown: false,
});
// export default DashboardDrawer;
