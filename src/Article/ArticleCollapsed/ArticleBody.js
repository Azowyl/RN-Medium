import React from 'react';
import {View, Text} from 'react-native';
import {Column, Row} from '../../Common/Column';
import styles from './styles';

const ArticleBody = (props) => (
  <View style={styles.bodyContainer}>
    <Column>
      <Text style={styles.articleTitle}>{props.article.title}</Text>
      <Row>
        <Text style={styles.articleSubtitle}>{props.article.author}</Text>
        <Text style={styles.articleSubtitle}> {"\u2022"} </Text>
        <Text style={styles.articleSubtitle}>{props.article.readingTime}</Text>
      </Row>
    </Column>
  </View>
);

export default ArticleBody;
