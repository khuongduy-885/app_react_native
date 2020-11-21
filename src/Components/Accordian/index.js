import React, { Component } from 'react';
import { Dimensions, View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from './index.style';
export default class Accordian extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //data: props.data,
      //expanded : props.expanded,
    }
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    const {
      flex,
      row,
      column,
      center,
      middle,
      left,
      right,
      card,
      shadow,
      color,
      space,
      style,
      padding,
      margin,
      children,
      animated,
      icon,
      titles,
      nameIcon,
      iconDown,
      iconUp,
      iconRight,
      nameIconRight,
      expanded,
      sizeIcon,
      ...props
    } = this.props;
    const blockStyles = [
      styles.block,
      flex && { flex },
      flex === false && { flex: 0 }, // reset / disable flex
      row && styles.row,
      column && styles.column,
      center && styles.center,
      middle && styles.middle,
      left && styles.left,
      right && styles.right,
      card && styles.card,
      shadow && styles.shadow,
      margin && { ...this.handleMargins() },
      padding && { ...this.handlePaddings() },
      space && { justifyContent: `space-${space}` },
      color && styles[color], // predefined styles colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      style, // rewrite predefined styles
    ];
    return (
      <View {...props} style={blockStyles}>
        <TouchableOpacity ref={this.accordian} style={styles.rowAccordian} onPress={() => this.toggleExpand()}>
          {
            icon && <Icon name={expanded && this.state.expanded ? (iconUp ? iconUp : 'keyboard-arrow-up') : iconDown ? iconDown : 'keyboard-arrow-down'} size={sizeIcon ? sizeIcon : 30} />
          }
          <Text style={{...styles.title,flex: 5}}> {titles}</Text>
          <TouchableOpacity style={{ flex: 1,justifyContent: 'flex-end',flexDirection: 'row',}}>
            {
              iconRight && <Icon name={nameIconRight ? nameIconRight : 'ellipsis1'} size={sizeIcon ? sizeIcon : 30} />
            }
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.parentHr} />
        {
          (expanded && this.state.expanded) &&
          <View style={styles.child} {...props}>
            {children}
          </View>
        }

      </View>
    )
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded })
  }

}