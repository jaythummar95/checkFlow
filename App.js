/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';

import HelloWorld from './src/screens/helloWorld'

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <HelloWorld />
      </View>
    </SafeAreaView >
  );
};


export default App;
