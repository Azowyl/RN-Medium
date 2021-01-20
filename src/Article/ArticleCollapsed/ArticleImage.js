import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const ArticleImage = (props) => (
  <Image source={{uri: props.article.image}} style={styles.articleImage} />
);

export default ArticleImage;
