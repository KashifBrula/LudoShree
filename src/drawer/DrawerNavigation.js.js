import React from 'react';

import { StackNav } from '../boot/app';
import { DrawerContent } from './DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                cardStyle: { backgroundColor: 'white' },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Drawer.Screen
                name="Home"
                component={StackNav}
                options={{ gestureEnabled: false }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;