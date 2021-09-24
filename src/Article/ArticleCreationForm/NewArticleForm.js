import React from 'react';
import { ScrollView, View } from 'react-native';
import {Button, Icon, Input, Text} from 'react-native-elements';

const NewArticleForm = ({ onChange, onSubmit, article }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, flexDirection: 'row', padding: 35, backgroundColor: 'black', alignItems: 'center' }}>
        <Text h2 style={{ color: 'white' }}>New Article</Text>
        <Icon name="newspaper" type="font-awesome-5" color="white" style={{ paddingLeft: 20, marginTop: 10 }} size={30} />
      </View>
      <View style={{ margin: 25 }}>
        <Input
          label="Title"
          placeholder="How to..."
          leftIcon={{ type: 'font-awesome-5', name: 'heading', size: 15, color: 'grey' }}
          onChangeText={(value) => onChange('title', value)}
          value={article.title}
        />
        <Input
          label="Author"
          placeholder="John Wick..."
          leftIcon={{ type: 'font-awesome-5', name: 'user', size: 15, color: 'grey' }}
          onChangeText={(value) => onChange('author', value)}
          value={article.author}
        />
        <Input
          label="Read Time"
          placeholder="5 min"
          keyboardType="numeric"
          onChangeText={(value) => onChange('readingTime', value)}
          value={article.readingTime}
        />
        <Input
          label="Article"
          placeholder="Write something cool..."
          multiline={true}
          numberOfLines={15}
          onChangeText={(value) => onChange('body', value)}
          value={article.body}
        />
        <Button title="Post!" buttonStyle={{ backgroundColor: 'green' }} onPress={onSubmit} />
      </View>
    </ScrollView>
  );
}

export default NewArticleForm;
