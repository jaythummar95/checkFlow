import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  NativeModules,
  TouchableOpacity,
} from 'react-native';

function NativeModuleTest() {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchLine] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const {CurrentDateModule, JokesModule} = NativeModules;

  const fetchCurrentDate = () => {
    CurrentDateModule.getCurrentDate(date => {
      setCurrentDate(date);
    });
  };

  const fetchJokes = () => {
    JokesModule.getJokes(
      '',
      response => {
        console.log(response);
        const resp = JSON.parse(response);
        setSetup(resp.setup);
        setPunchLine(resp.punchline);
      },
      error => {
        console.log(error);
      },
    );
  };

  const content = () => (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            fetchCurrentDate();
          }}>
          <Text>{`Get Current Date\n`}</Text>
        </TouchableOpacity>
        <Text>{`\nCurrent Date\n\n${currentDate}\n`}</Text>
        <TouchableOpacity
          onPress={() => {
            fetchJokes();
          }}>
          <Text>Get Jokes</Text>
        </TouchableOpacity>
        <Text>{`\nSetup\n\n${setup}\n`}</Text>
        <Text>{`Punchline\n\n${punchline}`}</Text>
      </View>
    </SafeAreaView>
  );
  return content();
}

export default NativeModuleTest;
