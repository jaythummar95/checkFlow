import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Button,
  NativeModules,
  Text,
} from 'react-native';

function StorageCheck() {
  const {StorageModule} = NativeModules;
  const [value, setValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

  const fetchStoredValue = () => {
    StorageModule.getItem('name', name => {
      setStoredValue(name);
    });
  };

  const content = () => (
    <SafeAreaView>
      <View>
        <TextInput
          value={value}
          onChangeText={text => setValue(text)}
          placeholder={'Enter the name to be stored'}
        />
        <Button
          title={'Store'}
          onPress={() => {
            StorageModule.setItem('name', value);
          }}
        />
        <View style={{height: 16}} />
        <Button
          title={'Fetch'}
          onPress={() => {
            fetchStoredValue();
          }}
        />
        <Text>{`\n\nStored Value : ${storedValue}`}</Text>
      </View>
    </SafeAreaView>
  );
  return content();
}
export default StorageCheck;
