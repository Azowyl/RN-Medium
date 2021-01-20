import React from 'react';
import { View, Text } from 'react-native';
import {Column, Row} from '../../Common/Column';
import ArticleCollapsedStyles from './styles';
import ArticleBody from './ArticleBody';
import ArticleImage from './ArticleImage';

const ArticleCollapsed = (props) => {
  return (
    <View style={ArticleCollapsedStyles.container}>
      <Row>
        <ArticleBody article={props.article} />
        <ArticleImage article={props.article} />
      </Row>
    </View>
  );
};

export default ArticleCollapsed;
