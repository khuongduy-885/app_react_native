import { Dimensions } from 'react-native';
import * as theme from '../../Themes';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  button: {
    elevation: 1,
    backgroundColor: "#F2F2F2",
    borderRadius: 19,
    paddingVertical: 2,
    paddingHorizontal: 2,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    padding: 10
  },
  container:{
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
    paddingLeft: 20,
    borderBottomWidth: 0.3,
    backgroundColor: theme.colors.white,
  },
  viewLeft:{
   marginTop:30,
   height:deviceHeight,
   backgroundColor:"white",
   position: 'absolute', zIndex: 1000,
   opacity:0.9
 },
 viewIteamCreat:{
    justifyContent: "center", alignItems: "center"
    , width: 50, height: 50,
    position: 'absolute', zIndex: 1000, bottom: 10, right: 10
  },
 iteamCreact:{
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 2
  },
  headerTable:{
    paddingLeft:16,
    flexDirection: 'row'
    , justifyContent: 'center'
    , height: 30
    , alignItems: 'center',
    backgroundColor: '#e0e0e0'
  },
  childrenHeaderTable:{
    width: 180,
    height: 30,
    borderRightWidth: 0.3,
     justifyContent: 'center',
      paddingLeft: 10
  },
  rowTable:{
    flexDirection: 'row',
     justifyContent: 'center'
    , alignItems: 'center'
  },
  rowChildrenTable:{
    width: 180,
    height: 30,
    borderRightWidth: 0.3,
    borderBottomWidth:0.3,
     justifyContent: 'center',
      paddingLeft: 10
  },
  childrenField:{
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10,
    fontSize: 30,
    fontWeight: "bold" 
  },
}