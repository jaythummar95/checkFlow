import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

function CheckFlow() {
    const content = () => {
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <Text>This one to check PR in main branch</Text>
            </View>
        )
    }
    return content();
}
const styles = StyleSheet.create({
    container: {
        flex: 1.0
    }
})
export default CheckFlow;