import React, { Component } from 'react';
import { ScrollView, View, StatusBar, Text, StyleSheet, Platform, TouchableOpacity, Dimensions } from 'react-native';
import * as theme from '../../Themes';
import { getStatusBarHeight } from '../../Common/Utils/Core'
import NavigationService from '../../Navigation/NavigationService'
import { MemoizeResponsiveStyleSheet } from '../../Common/Responsive';
import styleSheet from './index.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import IconSort from 'react-native-vector-icons/FontAwesome';
import IconCheck from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

class Header extends Component {

    render() {
        const styles = MemoizeResponsiveStyleSheet(styleSheet);
        const {
            menu,
            backHander,
            style,
            gradient,
            color,
            startColor,
            endColor,
            end,
            start,
            locations,
            shadow,
            children,
            navigation,
            headerTapbar,
            listIcon,
            onPressIcon,
            ...props
        } = this.props;
        const currentRoute = NavigationService.getCurrentRoute()?.name;
        const headerStyles = [
            styles.header,
            styles.gradient,
            shadow && styles.shadow,
            color && styles[color], // predefined styles colors for backgroundColor
            color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
            style,
        ];
        if (gradient) {
            return (
                <View
                    style={headerStyles}
                    {...props}
                >
                    <LinearGradient
                        start={start}
                        end={end}
                        locations={locations}
                        style={headerStyles}
                        colors={[startColor, endColor]}
                    >
                        <Text style={styles.headerText} center bold white
                            h3>{menu}</Text>
                    </LinearGradient>
                </View>
            );
        }
        return (
            <View
                style={{
                    paddingTop: Platform.OS === 'android' ? 0 : getStatusBarHeight(),
                    justifyContent: 'center',
                    height:
                        Platform.select({
                            android: headerTapbar ? 110 : 50,
                            default: 40,
                            ios: 40 + getStatusBarHeight()
                        }),
                }}
            >
                {
                    Platform.OS === 'android' &&
                    <StatusBar />
                }
                <View style={{
                    flexDirection: 'row',
                    height: 60,
                    backgroundColor: theme.colors.white,
                    shadowColor: theme.colors.gray3,
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,
                    //elevation: 4,
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} flex={5}>
                        <View style={{ flexDirection: 'row', backgroundColor: theme.colors.white, alignItems: 'center', justifyContent: 'center' }} flex={1}>
                            {
                                backHander ? <TouchableOpacity
                                    onPress={() => NavigationService.goBack()}>
                                    <Icon name="chevron-left" size={theme.sizes.iconMD}
                                        color={theme.colors.orange} />
                                </TouchableOpacity> : null
                            }
                        </View>
                        <View style={{
                            flexDirection: 'row', backgroundColor: theme.colors.white,
                            alignItems: 'center', justifyContent: 'center'
                        }} flex={3}>
                            <Text style={{ color: theme.colors.orange, fontSize: theme.sizes.title }}>
                                {menu}
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row', backgroundColor: theme.colors.white
                            , alignItems: 'center', justifyContent: 'center'
                        }} flex={1}>
                            {
                                currentRoute !== "Notification" && <TouchableOpacity
                                    onPress={() => NavigationService.navigate('CreatTack')}>
                                    <View>
                                        <Ionicons name={'notifications-outline'} size={theme.sizes.iconMD}
                                            color={theme.colors.orange} />
                                    </View>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>

                </View>
                {   headerTapbar &&
                    <View  style={{...styles.container,flex: 1,}}>
                        <ScrollView horizontal={true}>
                            {
                                listIcon.map((iteam, index) => (
                                    <TouchableOpacity
                                        key={"row_" + index}
                                        onPress={()=>onPressIcon}
                                    >
                                        <View style={styles.button}>
                                            <Text style={styles.textButton}><IconCheck name={iteam.name ? iteam.name : 'check-all'} size={18} /> {iteam.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                    </ScrollView>
                    </View>
                    
                }
            </View>
        );
    }
}
export default Header;