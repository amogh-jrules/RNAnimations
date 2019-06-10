import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Animated } from 'react-native';
import Ball from './src/ball'

export default class App extends React.Component {
  state = {
    animation : new Animated.Value(0)
  }
  startAnimation = () => {
    Animated.timing(this.state.animation,{
      toValue: 300,
      //positive y values go down, negative values go up
      duration : 1500
    }).start(()=>{
      Animated.timing(this.state.animation,{
        toValue:0,
        duration:1500
      }).start();
    });

  }

  render() {
    const animStyles = {
      transform  : [
        {
          translateY : this.state.animation,
        }
      ]
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={this.startAnimation}>
              <Animated.View style={[styles.box,animStyles]}/> 
        </TouchableWithoutFeedback>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"center"
  },
  box : {
    width:150,
    height : 150,
    backgroundColor:"tomato"
  }
});