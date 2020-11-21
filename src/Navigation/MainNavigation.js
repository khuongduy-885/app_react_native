import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import Home from '../Screens/Home'
import Creat from '../Screens/Creat'
import CreatTack from '../Screens/CreatTack'
import ButtonTapBarNavigator from '../Screens/TapBarNavigator'

const MainStack = createStackNavigator();
enableScreens();
const MainNavigatior =()=>{
    return(
        <MainStack.Navigator
        headerMode={'none'}
            mode={'card'}
        >
            <MainStack.Screen name ="ButtonTapBarNavigator" component={ButtonTapBarNavigator}/>
            <MainStack.Screen name ="Home" component={Home}/>
            <MainStack.Screen name ="Creat" component={Creat}/>
            <MainStack.Screen name = "CreatTack" component={CreatTack}/>
    </MainStack.Navigator>
    )
    
}
export default MainNavigatior;