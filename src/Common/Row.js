import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
});

const Row = (props) => (
  <View style={{...styles.row, ...props.style}}>{props.children}</View>
);

export default Row
