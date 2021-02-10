import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
  }
});

const ArticleImage = (props) => {
  return (
    <View style={{flex: 0.2}}>
      <Image source={{uri: props.data.image}} style={styles.image} />
    </View>
  );
};

export default ArticleImage;
