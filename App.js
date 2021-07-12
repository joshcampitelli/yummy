import React from 'react';
import Home from './pages/Home';
import { SwipePage } from './pages/swiping';
import Results from './pages/Results';
import Settings from './pages/Settings';
import GuestLobby from './pages/GuestLobby';
import HostLobby from './pages/HostLobby';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { yummyStore } from './store';

const Stack = createStackNavigator();

export default function App() {
    return (
      <Provider store={yummyStore}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Home"
                    component={Home} />
                <Stack.Screen
                    name="GuestLobby"
                    component={GuestLobby} />
                <Stack.Screen
                    name="HostLobby"
                    component={HostLobby} />
                <Stack.Screen
                    name="Swiping"
                    component={SwipePage} />
                <Stack.Screen
                    name="Results"
                    component={Results} />
                <Stack.Screen
                    name="Settings"
                    component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}
