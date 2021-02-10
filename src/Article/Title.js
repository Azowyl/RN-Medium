import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

const ArticleTitle = (props) => (
  <Text style={styles.title}>{props.data.title}</Text>
);

export default ArticleTitle;
