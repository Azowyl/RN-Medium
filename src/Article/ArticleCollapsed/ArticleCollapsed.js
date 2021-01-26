import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import {Column, Row} from '../../Common/Column';
import ArticleCollapsedStyles from './styles';
import ArticleBody from './ArticleBody';
import ArticleImage from './ArticleImage';

const ArticleCollapsed = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={ArticleCollapsedStyles.container}>
        <Row>
          <ArticleBody article={props.article} />
          <ArticleImage article={props.article} />
        </Row>
      </View>
    </TouchableHighlight>
  );
};

export default ArticleCollapsed;
