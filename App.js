import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import Card from './components/Card';
import Controls from './components/Controls'

export default class App extends React.Component {
  state = {
    spin: 0,
    rotate: 0
  };

  scaleValue = new Animated.ValueXY({x: 220, y: 220});
  spinValue = new Animated.Value(this.state.spin);
  rotateValue = new Animated.Value(this.state.rotate);

  zoomOutImage = () => {
    Animated.timing(this.scaleValue, {
      toValue: {x: 100, y: 100},
      duration: 1000
    }).start()
  };

  zoomInImage = () => {
    Animated.timing(this.scaleValue, {
      toValue: {x: 220, y: 220},
      duration: 1000
    }).start()
  };

  spinImage = () => {
    Animated.timing(this.spinValue, {
      toValue: this.state.spin + 1,
      duration: 1000
    }).start();
    this.setState({spin: this.state.spin + 1});
  };

  rotateImage = () => {
    Animated.timing(this.rotateValue, {
      toValue: this.state.rotate + 1,
      duration: 1000
    }).start();
    this.setState({rotate: this.state.rotate + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Card
          scaleValue={this.scaleValue}
          spinValue={this.spinValue}
          rotateValue={this.rotateValue}
        />
        <Controls
          spinImage={this.spinImage}
          rotateImage={this.rotateImage}
          zoomOutImage={this.zoomOutImage}
          zoomInImage={this.zoomInImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20
  }
});
