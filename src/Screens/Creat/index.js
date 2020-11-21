import React, { Component } from 'react';
import { Switch, Dimensions, Animated, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default class Creat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        {
          name: 'Tack name',
          hidden: true,
        },
        {
          name: 'Tack name2',
          hidden: true,
        },
        {
          name: 'Tack name3',
          hidden: true,
        }],
      assignee: true,
      top: new Animated.Value(deviceHeight)
    }
  }
  heandShowModal = () => {
    Animated.spring(this.state.top, {
      toValue: 100
    }).start()
  }
  heandHideModal = () => {
    Animated.spring(this.state.top, {
      toValue: deviceHeight
    }).start()
  }
  toggleSwitch = (value, name) => {
    const arr = this.state.tableHead;
    arr.map(item => {
      if (item.name === name) {
        item.hidden = value
      }
    })
    this.setState(prevState => ({
      ...prevState.tableHead,
      tableHead: arr
    }))
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'blue',
      }}>
        {
          this.state.tableHead.map(({ name, hidden }, index) =>
            (
              <View style={{ backgroundColor: 'white' }}>
                <Text>{name}</Text>
                <Switch

                  key={'assigneeSwitch_' + index}
                  trackColor={{ false: "#767577", true: "#01a65a" }}
                  thumbColor={hidden ? "white" : "#f4f3f4"}
                  ios_backgroundColor="#01a65a"
                  onValueChange={(value) => this.toggleSwitch(value, name)}
                  value={hidden}
                />
              </View>
            ))
        }
      </View>
    );
  }
}