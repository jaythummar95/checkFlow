import React from 'react'
import {
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
  },
})

function CheckFlow() {
  const content = () => (
    <View style={styles.container}>
      <SafeAreaView />
      <Text>This one to check PR in main branch</Text>
      <Text>This one to check PR in main branch</Text>
      <Text>This one to check PR in main branch</Text>
      <Text>This one to check PR in main branch</Text>
      <Text>This one to check PR in main branch</Text>
    </View>
  )
  return content()
}

export default CheckFlow
