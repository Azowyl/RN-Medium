import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColumnStyles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});

export const Column = (props) => (
  <View style={ColumnStyles.column}>
    {props.children}
  </View>
);

export const Row = (props) => (
  <View style={ColumnStyles.row}>
    {props.children}
  </View>
);
