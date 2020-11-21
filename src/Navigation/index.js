import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigator from '../Navigation/MainNavigation.js'
import { createStackNavigator } from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationService from '../Navigation/NavigationService'

const Stack = createStackNavigator();
const Container = (props) => {
    return (
        <SafeAreaProvider>
        <NavigationContainer ref={(ref)=>NavigationService.setTopLevelNavigator(ref)}>
                <Stack.Navigator
                    mode={'card'}
                    screenOptions={
                        {
                            headerShown:false
                        }
                    }
                    >
                    <Stack.Screen name="Home" component={MainNavigator}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>

    );
};

export default Container;
