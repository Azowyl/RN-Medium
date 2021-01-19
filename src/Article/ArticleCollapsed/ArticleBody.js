import React from 'react';
import {View, Text} from 'react-native';
import {Column, Row} from '../../Common/Column';
import styles from './styles';

const ArticleBody = () => (
  <View style={styles.bodyContainer}>
    <Column>
      <Text style={styles.articleTitle}>4 Things emotionally intelligent people dont do</Text>
      <Row>
        <Text style={styles.articleSubtitle}>Ono Mergen</Text>
        <Text style={styles.articleSubtitle}> {"\u2022"} </Text>
        <Text style={styles.articleSubtitle}>4 min read</Text>
      </Row>
    </Column>
  </View>
);

export default ArticleBody;
