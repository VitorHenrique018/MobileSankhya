import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Menu from './pages/Menu';
import NewOrder from './pages/NewOrder';


//cadastrar as rotas a partir do AppStack

export default function Routes(){
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Menu" component={Menu} />
                <AppStack.Screen name="NewOrder" component={NewOrder} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}