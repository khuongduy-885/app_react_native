import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {injectIntl} from 'react-intl';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HOME, CREAT} from '../../Common/Constants';
import navigation from '../../Common/Languages/msg/navigation';
import Home from '../../Screens/Home';
import Creat from '../Creat/index'
import * as theme from "../../Themes"
import Icon from 'react-native-vector-icons/Entypo';

const BottomTabStackConfig = [
    {
        key: HOME,
        route: 'Home',
        name: navigation.home,
        component: Home,
    },
    {
        key: CREAT,
        route: 'Creat',
        name: navigation.Creat,
        component: Creat,
    }
];

const BottomTabBarNavigator = ({intl}) => {
    const BottomTabBarStack = createBottomTabNavigator();
    return (
        <BottomTabBarStack.Navigator
            style={{
                borderColor: theme.colors.white,
            }}
            screenOptions={({route, screenProps}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'Creat') {
                        iconName = focused ? 'grid-outline' : 'grid-outline';
                    } else if (route.name === 'Account') {
                        iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
                    }
                    return <Icon name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: theme.colors.orange,
                inactiveTintColor: theme.colors.gray3,
                style: {
                    backgroundColor: theme.colors.white,
                },
                tabStyle: {},
                labelStyle: {
                    fontSize: theme.sizes.base,
                    fontWeight: 'bold'
                },
            }}>
            {
                BottomTabStackConfig.map(item => {
                    return <BottomTabBarStack.Screen
                        key={item.key}
                        name={item.route}
                        component={item.component}/>;
                })
            }
        </BottomTabBarStack.Navigator>
    );
};

export default ((BottomTabBarNavigator));
