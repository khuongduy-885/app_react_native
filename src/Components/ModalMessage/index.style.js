import {uniqueId} from 'lodash';
import {Dimensions, Platform} from 'react-native';
import * as theme from '../../Themes';

const uId = uniqueId();
export default [
    uId,
    () => [
        {
            query: {},
            style: {
                container: {
                    flex: 1,
                    height: Dimensions.get('screen').height,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: (Platform.OS === 'ios') ? 20 : 0,
                    zIndex: 500,
                },
                line: {
                    width: '100%',
                    height: 0.2,
                    backgroundColor: 'rgba(100,100,100, 0.5)',
                },
                containerView: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgb(255,255,255)',
                    minHeight: 150,
                    width: '100%',
                    borderRadius: 10,
                },
                header: {
                    width: '100%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                },
                title: {
                    fontSize: 18,
                    textAlign: 'center',
                    padding: 10,
                    fontWeight: 'bold',
                    color: theme.colors.white,
                },
                messageView: {
                    width: '100%',
                },
                messages: {
                    fontSize: 16,
                    flexWrap: 'wrap',
                    color: 'white',
                    textAlign: 'center',
                    padding: 10,
                },
                button: {
                    width: '50%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#3E7BCF',
                },
                buttonView: {
                    flexDirection: 'row',
                    maxHeight: 80,
                },
                buttonText: {
                    color: '#3E7BCF',
                    textAlign: 'center',
                    fontSize: 17,
                    marginTop: -5,
                },
                info: {
                    backgroundColor: theme.colors.gray,
                },
                error: {
                    backgroundColor: theme.colors.accent,
                    color: theme.colors.white,
                },
                primary: {
                    backgroundColor: theme.colors.appColor,
                },
                warning: {
                    backgroundColor: theme.colors.tertiary,
                },
            },
        },
    ],
];
