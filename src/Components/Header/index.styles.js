import {uniqueId} from 'lodash';
import * as theme from '../../Themes';
import {Platform,Dimensions} from 'react-native';
import {getStatusBarHeight} from '../../Common/Utils/Core'

const uId = uniqueId();
export default [
    uId,
    () => [
        {
            query: {},
            style: {
                header: {
                    paddingTop: Platform.OS === 'android' ? 0 : getStatusBarHeight(),
                    justifyContent: 'center',
                    height:
                        Platform.select({
                            android: 50,
                            default: 40,
                            ios: 40 + getStatusBarHeight()
                        }),
                    // + getStatusBarHeight()
                },
                // header: {
                //     height: theme.sizes.base * (Platform.OS === 'android' ? 3 : 5),
                //     justifyContent: 'center',
                // },
                // gradient: {
                //     //paddingTop: getStatusBarHeight(),
                //     justifyContent: 'center',
                //     height:
                //         Platform.select({
                //             android: 56,
                //             default: 44,
                //         }) + getStatusBarHeight(),
                // },
                headerText: {
                    ///paddingTop: getStatusBarHeight(),
                    color: theme.colors.orange,
                    fontSize: theme.sizes.title,
                },
                shadow: {
                    shadowColor: theme.colors.black,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                },
                accent: {backgroundColor: theme.colors.accent},
                primary: {backgroundColor: theme.colors.primary},
                secondary: {backgroundColor: theme.colors.secondary},
                tertiary: {backgroundColor: theme.colors.tertiary},
                black: {backgroundColor: theme.colors.black},
                white: {backgroundColor: theme.colors.white},
                gray: {backgroundColor: theme.colors.gray},
                gray2: {backgroundColor: theme.colors.gray2},
                gray3: {backgroundColor: theme.colors.gray3},
                gray4: {backgroundColor: theme.colors.gray4},
                button: {
                    elevation: 1,
                    backgroundColor: "#F2F2F2",
                    borderRadius: 20,
                    marginRight:15,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  textButton: {
                    padding: 10
                  },
                  container:{
                    flexDirection: 'row',
                    paddingBottom: 5,
                    paddingLeft: 20,
                    borderBottomWidth: 0.3,
                    //borderTopWidth: 0.2,
                    width:Dimensions.get("window").width,
                    backgroundColor: theme.colors.white,
                  },
            },
        },
    ],
];
