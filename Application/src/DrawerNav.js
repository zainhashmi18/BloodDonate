import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Sidebar from './Sidebar';
import StartScreen from './screens/StartScreen';
import { Icon } from 'native-base';
import DonateBlood from './screens/DonateBlood';
import RecieveBlood from './screens/RecieveBlood';
import RecentBooking from './screens/RecentBooking';
import Setting from './screens/Setting';

const Drawer = createDrawerNavigator();
function DrawerNav() {
    return (
        <Drawer.Navigator initialRouteName="Main" drawerContent={props => <Sidebar {...props} />}>
            <Drawer.Screen options={{
                drawerIcon: ({ focused, color, size }) => (<Icon name="eyedrop-outline" style={{ fontSize: size, color: color }} />),
            }} name="Donate Blood" component={DonateBlood} />
            <Drawer.Screen options={{
                drawerIcon: ({ focused, color, size }) => (<Icon name="receipt-outline" style={{ fontSize: size, color: color }} />),
            }} name="Recieve Blood" component={RecieveBlood} />
            <Drawer.Screen options={{
                drawerIcon: ({ focused, color, size }) => (<Icon name="bookmarks-outline" style={{ fontSize: size, color: color }} />),
            }} name="Recent Booking" component={RecentBooking} />
            <Drawer.Screen options={{
                drawerIcon: ({ focused, color, size }) => (<Icon name="settings-outline" style={{ fontSize: size, color: color }} />),
            }} name="Setting" component={Setting} />
            <Drawer.Screen options={{
                title: "Sign Out",
                drawerIcon: ({ focused, color, size }) => (<Icon name="log-out-outline" style={{ fontSize: size, color: color }} />),
            }} name="SignOut" component={StartScreen} />
        </Drawer.Navigator>
    );
}
export default DrawerNav;