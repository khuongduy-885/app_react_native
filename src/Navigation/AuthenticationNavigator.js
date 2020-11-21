import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import OnBoarding from '../Screens/Auth';

enableScreens();
const AuthenticationNavigator = () => {
    const AuthenticationStack = createNativeStackNavigator();
    return (
        <AuthenticationStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            {/*<AuthenticationStack.Screen name={'Login'} component={Login}/>*/}
            <AuthenticationStack.Screen name={'OnBoarding'} component={OnBoarding}/>
            {/*<AuthenticationStack.Screen name={'WellCome'} component={WellCome}/>*/}
        </AuthenticationStack.Navigator>
    );
};
export default AuthenticationNavigator;
