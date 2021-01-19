import React from 'react';
import { View, Text } from 'react-native';
import {Column, Row} from '../../Common/Column';
import ArticleCollapsedStyles from './styles';
import ArticleBody from './ArticleBody';
import ArticleImage from './ArticleImage';

const ArticleCollapsed = () => {
  return (
    <View style={ArticleCollapsedStyles.container}>
      <Row>
        <ArticleBody />
        <ArticleImage />
      </Row>
    </View>
  );
};

export default ArticleCollapsed;
