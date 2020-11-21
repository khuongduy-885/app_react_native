import * as theme from '../../Themes';
import { Dimensions} from 'react-native';
const deviceWidth = Dimensions.get("window").width;
export default {
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: 'back',
    },
    rowAccordian:{
        flexDirection: 'row',
        height:40,
        width:deviceWidth,
        paddingLeft:10,
        paddingRight:18,
        alignItems:'center',
    },
    parentHr:{
        height:1,
        color: 'white',
        width:'100%'
    },
    child:{
        backgroundColor: 'white',
        paddingLeft:20,
        paddingRight:20,
    },
    column: {
        flexDirection: 'column',
    },
    card: {
        borderRadius: theme.sizes.border,
    },
    center: {
        alignItems: 'center',
    },
    middle: {
        justifyContent: 'center',
    },
    left: {
        justifyContent: 'flex-start',
    },
    right: {
        justifyContent: 'flex-end',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 2
    },
    
}