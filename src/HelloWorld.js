import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorldStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffb73b',
    fontWeight: 'bold',
    fontSize: 24,
  }
});

const HelloWorld = (props) => {
  return (
    <View style={HelloWorldStyles.container}>
      <Text style={HelloWorldStyles.text}>
        {props.title}
      </Text>
    </View>
  );
};

export default HelloWorld;
