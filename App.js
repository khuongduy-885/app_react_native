import React from 'react';
import { View,Text } from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import Navigation from './src/Navigation';


const App = () => {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Navigation/>
        </React.Fragment>
      </Provider>
        
    );
};
export default App;
