import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Controls = ({spinImage, rotateImage, zoomOutImage, zoomInImage}) =>
  <View style={styles.buttonsContainer}>
    <TouchableHighlight onPress={spinImage}>
      <MaterialIcon name={'refresh'} size={40} color={'black'}/>
    </TouchableHighlight>
    <TouchableHighlight onPress={rotateImage}>
      <MaterialIcon name={'flip'} size={40} color={'black'}/>
    </TouchableHighlight>
    <TouchableHighlight onPress={zoomOutImage}>
      <MaterialCommunityIcons name={'arrow-collapse'} size={40} color={'black'}/>
    </TouchableHighlight>
    <TouchableHighlight onPress={zoomInImage}>
      <MaterialIcon name={'crop-landscape'} size={40} color={'black'}/>
    </TouchableHighlight>
  </View>;


const styles = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 220
  }
});

export default Controls;