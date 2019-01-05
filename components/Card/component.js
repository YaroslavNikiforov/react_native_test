/**
 *
 * component
 *
 */

import React from "react";
import PropTypes from "prop-types";

import { View, Text, Image } from "react-native";

import styles from "./styles";

export default class component extends React.Component {
  static propTypes = {
    prop: PropTypes.object
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>component</Text>
      </View>
    );
  }
}
