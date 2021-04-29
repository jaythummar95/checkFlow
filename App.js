/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import I18n from './src/I18n'
import Internationalization from './src/screens/internationaliation';
import RTLCheck from './src/screens/rtlCheck';


const Stack = createStackNavigator();


const App = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('')
  useEffect(() => {

    AsyncStorage.getItem('lng')
      .then(resp => {
        if (resp) {
          I18n.locale = resp
          setSelectedLanguage(resp)
        } else {
          I18n.locale = 'en'
          setSelectedLanguage('en')
        }

      }).catch(error => {
        console.log(error)
      })

  }, [selectedLanguage])




  return (
    selectedLanguage ?
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="RTLCheck"
            component={RTLCheck} />
          
        <Stack.Screen
          name="Internationalization"
            component={Internationalization} />
          
      </Stack.Navigator>
    </NavigationContainer> : null
  );
};


export default App;
