import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
// import { fetch } from 'react-native-ssl-pinning';

function Pinning() {

    const checkCertificate = () => {
        // fetch('https://mydermastore.in', {
        //     method: "GET",
        //     timeoutInterval: 3000, // milliseconds
        //     //your certificates array(needed only in android) ios will pick it automatically
        //     // sslPinning: {
        //     //     certs: ['googleapis_new', 'mycert_new'] // your certificates name (without extension), for example cert1.cer, cert2.cer
        //     // },
        //     pkPinning: true,
        //     sslPinning: {
        //         certs: ["sha256//4W3tamgK+GgWB2yhiDqwhf2hzSUISQKmYaS9lJeq8BE="] // your certificates name (without extension), for example cert1.cer, cert2.cer
        //     },
        //     headers: {
        //         Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
        //     }
        // })
        //     .then(response => {
        //         console.log(`response received ${response}`)
        //     })
        //     .catch(err => {
        //         console.log(`error: ${err}`)
        //     })
    }


    const checkNormalCertificate = () => {
        fetch('https://mydermastore.in/ws/v1/api/getBanner_list', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            console.log(JSON.stringify(response))
        }).catch(error => {
            console.log(error)
        })
    }

    const content = () => {
        return (
            <View>
                <Button
                    style={{ alignSelf: 'center' }}
                    title={"Fetch"}
                    onPress={() => { checkNormalCertificate() }} />
            </View>
        )
    }

    return content();
}


export default Pinning;