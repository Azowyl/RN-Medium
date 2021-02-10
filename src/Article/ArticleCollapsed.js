import React from 'react';
import {View, Text} from 'react-native';
import ArticleBody from './ArticleBody';
import ArticleImage from './ArticleImage';
import Row from '../Common/Row';


const ArticleCollapsed = (props) => {
  return (
    <Row style={{margin: 10}}>
      <ArticleBody data={props.data} />
      <ArticleImage data={props.data} />
    </Row>
  );
};

export default ArticleCollapsed;
