import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import NewArticle from './src/Article/ArticleCreationForm/NewArticle';
import {Provider} from 'react-redux';
import store from './src/Redux/store';

const App: () => React$Node = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'grid-outline'
                    : 'menu-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings-outline' : 'cog-outline';
                } else if (route.name === 'New') {
                  iconName = focused ? 'add-circle-outline' : 'add-outline';
                }

                return <Ionicons name={'iconName'} size={size} color={color} />;
              },
            })}
            screenOptions={{
              "tabBarActiveTintColor": "tomato",
              "tabBarInactiveTintColor": "gray",
              "tabBarStyle": [
                {
                  "display": "flex"
                },
                null
              ]
            }}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="New" component={NewArticle} />
            <Tab.Screen name="Settings" component={View} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
