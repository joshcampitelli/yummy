import React from 'react';
import Home from './pages/Home';
import Swiping from './pages/SwipePage';
import Results from './pages/Results';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Home"
                    component={Home} />
                <Stack.Screen
                    name="Swiping"
                    component={Swiping} />
                <Stack.Screen
                    name="Results"
                    component={Results} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}