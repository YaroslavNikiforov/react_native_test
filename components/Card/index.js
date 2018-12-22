import React, {Component} from 'react';
import {Animated, StyleSheet} from 'react-native';

const Card = ({scaleValue, spinValue, rotateValue}) => {
  const animatedStyles = {
    width: scaleValue.x,
    height: scaleValue.y,
    transform: [
      {
        rotateZ: spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '90deg']
        })
      },
      {
        rotateY: rotateValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg']
        })
      }
    ],
  };

  return (
    <Animated.Image
      source={require('./image.jpg')}
      style={[styles.img, animatedStyles]}/>
  )
};

const styles = StyleSheet.create({
  img: {
    width: 220,
    height: 220,
    borderRadius: 10
  }
});

export default Card;