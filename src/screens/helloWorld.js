import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorld extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>{'Hello World...'}</Text>
            </View>
        )
    }
}

export default HelloWorld;