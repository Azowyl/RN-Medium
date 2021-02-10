import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';

const HelloWorld = () => {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default HelloWorld;
