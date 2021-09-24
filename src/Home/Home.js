import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ArticleList from '../Article/ArticleCollapsed/ArticleList';
import ArticleDetails from '../Article/ArticleDetails/ArticleDetails';
const Stack = createStackNavigator();

const Home = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ArticleList" component={ArticleList} />
    <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
  </Stack.Navigator>
);

export default Home;
