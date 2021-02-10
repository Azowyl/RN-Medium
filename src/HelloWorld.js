import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import ArticleList from './Article/ArticleList';

const HelloWorld = () => {
  return (
    <SafeAreaProvider>
      <ArticleList />
    </SafeAreaProvider>
  );
};

export default HelloWorld;
