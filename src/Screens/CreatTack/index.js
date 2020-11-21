import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect, useDispatch} from 'react-redux';
import { hideModal, showModal } from '../../Redux/Actions/Modal';
import Creact from '../Creat/index.js'
/* const dispatch = useDispatch(); */
export default class CreatTack extends Component {
   /* heandShow = (value)=>{
       console.log("Creact: "+ value);
    dispatch(showModal(value));
   };
   heandHide =(value)=>{
     dispatch(hideModal(value));
   }; */
   
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Creact/>
        <TouchableOpacity onPress ={()=>this.heandShow(true)}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

 /* const mapStateToProps = (state, props) => {
  return {
    isVisible : state.Modal.isVisible
  };
};
export default connect(mapStateToProps)(CreatTack); */