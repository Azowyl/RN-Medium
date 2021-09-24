import React from 'react';
import { ScrollView, View } from 'react-native';
import {Button, Icon, Input, Text} from 'react-native-elements';

const NewArticleForm = ({ onChange, onSubmit }) => {
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
        />
        <Input
          label="Author"
          placeholder="John Wick..."
          leftIcon={{ type: 'font-awesome-5', name: 'user', size: 15, color: 'grey' }}
          onChangeText={(value) => onChange('author', value)}
        />
        <Input
          label="Read Time"
          placeholder="5 min"
          keyboardType="numeric"
          onChangeText={(value) => onChange('readTime', value)}
        />
        <Input
          label="Article"
          placeholder="Write something cool..."
          multiline={true}
          numberOfLines={15}
          onChangeText={(value) => onChange('body', value)}
        />
        <Button title="Post!" buttonStyle={{ backgroundColor: 'green' }} onPress={onSubmit} />
      </View>
    </ScrollView>
  );
}

export default NewArticleForm;
