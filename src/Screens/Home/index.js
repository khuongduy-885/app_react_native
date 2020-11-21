import React, { Component } from 'react';
import { Switch, Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../Components/Header/index';
import * as theme from '../../Themes';
import { Row, Table } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/Entypo';
import IconSort from 'react-native-vector-icons/FontAwesome';
import IconCheck from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from './index.style'
import Accordian from '../../Components/Accordian'

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [{
        name: 'Tack name',
        hidden: true,
      }, {
        name: 'Assignee',
        hidden: true,
      }, {
        name: 'Due date',
        hidden: true,
      }, {
        name: 'Projects',
        hidden: true,
      }, {
        name: 'Priority',
        hidden: true,
      }],
      rowTable: [
        {
          tackName: 'Tack name5',
          assignee: 'Assignee',
          dueDate: 'Due date',
          projects: 'Projects',
          priority: 'Priority'
        }, {
          tackName: 'Tack name2',
          assignee: 'Assignee2',
          dueDate: 'Due date2',
          projects: 'Projects2',
          priority: 'Priority2'
        }, {
          tackName: 'Tack name3',
          assignee: 'Assignee3',
          dueDate: 'Due date3',
          projects: 'Projects3',
          priority: 'Priority3'
        }, {
          tackName: 'Tack name4',
          assignee: 'Assignee4',
          dueDate: 'Due date4',
          projects: 'Projects4',
          priority: 'Priority4'
        }
      ],
      tableData: [],
      checkIcon: true,
      listIcon: [
        {
          title: 'All check',
          name: 'check-all'
        },
        {
          title: 'Sort',
          name: 'sort'
        },
        {
          title: 'Field',
          name: 'focus-field'
        }
      ],
      menu: [
        {
          title: 'To do',
          data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
        },
        {
          title: 'Doing',
          data: null
        },
        {
          title: 'Done',
          data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
        }
      ],
      top: new Animated.Value(deviceHeight),
      isEnabled: false,
    }
  }

  creatTack = () => {
    const navigation = this.props.navigation;
    navigation.navigate('CreatTack');
  }
  hendchek = () => {
    this.setState({
      checkIcon: !this.state.checkIcon
    });
  }
  renderTodo() {
    return (
      <View>
        <Text>
          eqweqweqw
          </Text>
      </View>
    )
  }
  componentWillMount = () => {
  }
  componentDidMount = () => {
  }
  heandShowModal = () => {
    Animated.spring(this.state.top, {
      toValue: 0.1
    }).start()
  }
  heandHideModal = () => {
    Animated.spring(this.state.top, {
      toValue: deviceHeight
    }).start()
  }
  toggleSwitch(value, name) {
    const arr = this.state.tableHead;
    arr.map(item => {
      if (item.name === name) {
        item.hidden = value;
        item.key = "ádasd";
      }
    })
    this.setState(prevState => ({
      ...prevState.tableHead,
      tableHead: arr,
    }))
    console.log("qwe: ", this.state.tableHead)
  }
  heandItem(item) {
    let itemNew = item.repeat(' ', '');
    console.log('itemNew: ' + itemNew);
    console.log('heandItem: ' + this.state.itemNew);
    return (this.state.itemNew)
  }
  heandSort = (item, check) => {
    const sortProperty = [item];
    const myData = [].concat(this.state.rowTable)
      .sort((a, b) => a[sortProperty] > b[sortProperty] ? -1 : 1);
    this.setState({
      rowTable: myData
    })
  }
  renderField = () => {
    return (
      <Animated.View style={{
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        height: '100%',
        flex: 1,
        top: this.state.top,
        backgroundColor: 'transparent'
      }}>

        <View style={{
          backgroundColor: '#a9a9a9',
          opacity: 0.4,
          flex: 3,
        }}>
          <TouchableOpacity style={{
            width: '100%',
            height: '100%',
          }} onPress={() => this.heandHideModal()}>
            {/* <Text> đóng modal </Text> */}
          </TouchableOpacity>
        </View>
        <View style={{
          flex: 4,
          backgroundColor: 'white'
        }}>
          <View style={{ backgroundColor: 'white' }}>
            <Text style={{ fontWeight: "bold", fontSize: 20, margin: 20 }}>Field</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 20 }}><IconAntDesign name={'eyeo'} size={30} /> Show fiteld </Text>
          </View>
          <View>
            <ScrollView >
              <View style={{ alignItems: 'stretch', margin: 20 }}>
                {
                  this.state.tableHead.map(({ name, hidden }, index) => (
                    name != 'Tack name' && <View >
                      <View style={{ ...styles.childrenField, flexDirection: 'row' }}>
                        <View style={{ flex: 5, }}>
                          <Text style={{ fontSize: 20, }} >{name}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                          <Switch
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            key={'assigneeSwitch_' + index}
                            trackColor={{ false: "#767577", true: "#01a65a" }}
                            thumbColor={hidden ? "white" : "#f4f3f4"}
                            ios_backgroundColor="#01a65a"
                            onValueChange={(value) => this.toggleSwitch(value, name)}
                            value={hidden}
                          />
                        </View>
                      </View>
                    </View>
                  ))
                }
              </View>
            </ScrollView>
          </View>

        </View>
      </Animated.View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>

        {this.renderField()}
        <Header menu={"Home"} />
        <View style={{ ...styles.container, flex: 1, }}>
          <ScrollView horizontal={true}>
            {
              this.state.listIcon.map((iteam, index) => (
                <TouchableOpacity
                  key={"rowIcon_" + index}
                  onPress={() => this.heandShowModal()}
                >
                  <View style={styles.button}>
                    <Text style={styles.textButton}><IconCheck name={iteam.name ? iteam.name : 'check-all'} size={18} /> {iteam.title}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
        <View style={{
          flex: 12,
          backgroundColor: theme.colors.white
        }}>
          <ScrollView horizontal={true}>
            <View>
              <View style={styles.headerTable}>
                {
                  this.state.tableHead.map(({ name, hidden }, index) => (
                    <View style={{ flexDirection: 'row', }}>
                      {hidden && <View key={'tackName_' + index} style={styles.childrenHeaderTable}>
                        <Text>{name}</Text>
                      </View>}
                    </View>
                  ))
                }
              </View>
              <View style={styles.viewLeft}>
                {this.state.menu.map((item, index) =>
                  <Accordian
                    key={"rowAccordian_" + index}
                    titles={item.title}
                    icon={'IconAntDesign'}
                    iconUp={'caretdown'}
                    sizeIcon={15}
                    iconRight
                    iconDown={'caretright'}
                    expanded={() => this.checkitem.data ? true : false}
                  >
                    <View >
                      {
                        this.state.rowTable.map((iteam, index) => (
                          <View style={styles.rowTable}>
                            {this.state.tackName && <View key={'rowtackName_' + index} style={styles.rowChildrenTable}>
                              <Text>{iteam.tackName}</Text>
                            </View>}
                            {this.state.assignee && <View key={'rowassignee_' + index} style={styles.rowChildrenTable}>
                              <Text>{iteam.assignee}</Text>
                            </View>}
                            {this.state.dueDate && <View key={'rowdueDate_' + index} style={styles.rowChildrenTable}>
                              <Text>{iteam.dueDate}</Text>
                            </View>}
                            {this.state.projects && <View key={'rowprojects_' + index} style={styles.rowChildrenTable}>
                              <Text>{iteam.projects}</Text>
                            </View>}
                            {this.state.priority && <View key={'rowpriority_' + index} style={styles.rowChildrenTable}>
                              <Text>{iteam.priority}</Text>
                            </View>}
                          </View>
                        ))
                      }
                    </View>
                  </Accordian>
                )}
              </View>
            </View>
          </ScrollView>
          <View style={styles.viewIteamCreat}>
            <TouchableOpacity style={styles.iteamCreact} onPress={() => this.creatTack()}>
              <View style={{ justifyContent: "center", alignItems: "center", width: 50, height: 50 }}>
                <Icon name='plus' size={theme.sizes.iconMD} color={theme.colors.orange} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    );
  }
}
export default Home;