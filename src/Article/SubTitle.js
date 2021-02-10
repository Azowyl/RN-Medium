import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import Row from '../Common/Row';

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 14,
    color: 'grey',
    paddingRight: 10,
  }
});

const SubtitleText = (props) => (
  <Text style={styles.subtitle}>{props.children}</Text>
);

const ArticleSubTitle = (props) => (
  <Row style={{alignItems: 'center'}}>
    <SubtitleText>{props.data.author}</SubtitleText>
    <SubtitleText>{"\u2022"}</SubtitleText>
    <SubtitleText>{props.data.readingTime}</SubtitleText>
    <Icon name="star" color="grey" size={15} />
  </Row>
);

export default ArticleSubTitle;
