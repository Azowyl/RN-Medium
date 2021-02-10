import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  decoration: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 28,
  }
});

const ArticleDecoration = () => (
  <Text style={styles.decoration}>...</Text>
);

export default ArticleDecoration;
