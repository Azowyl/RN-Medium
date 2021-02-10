import React from 'react';
import {View, StyleSheet} from 'react-native';
import ArticleTitle from './Title';
import ArticleSubTitle from './SubTitle';
import ArticleDecoration from './Decoration';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  }
});

const ArticleBody = (props) => {
  return (
    <View style={{flex: 0.8, paddingRight: 15}}>
      <ArticleTitle data={props.data} />
      <ArticleSubTitle data={props.data} />
      <ArticleDecoration />
    </View>
  );
};

export default ArticleBody;
