import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const ArticleImage = () => (
  <Image source={{uri: "https://picsum.photos/200/300"}} style={styles.articleImage} />
);

export default ArticleImage;
