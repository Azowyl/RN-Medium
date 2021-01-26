import React from 'react';
import {View, Text} from 'react-native';

const ArticleDetails = (props) => {
  const { article } = props.route.params;

  return (
    <View>
      <Text>{article.title}</Text>
    </View>
  );
};

export default ArticleDetails;
