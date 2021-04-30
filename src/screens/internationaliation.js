import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import {
    I18nManager, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native'
import RNRestart from 'react-native-restart'
import I18n from '../I18n'

function Internationalization(props) {
    const [selectedLanguage, setSelectedLanguage] = useState('')
  useEffect(() => {

        AsyncStorage.getItem('lng')
            .then((resp) => {
                if (resp) {
          setLanguage(resp, false)
                } else {
                    setLanguage('en', false)
                }

            }).catch(error => {
                console.log(error)
            })

    }, [selectedLanguage])


    const listOfFruits = [
        I18n.t('grapes'),
        I18n.t('lime'),
        I18n.t('lemon'),
        I18n.t('cherry'),
        I18n.t('blueberry'),
        I18n.t('banana'),
        I18n.t('apple'),
        I18n.t('watermelon'),
    ]

    const setLanguage = (language, restart) => {
        if (language == 'en') {
            I18n.locale = 'en'
            I18nManager.forceRTL(false)
            setSelectedLanguage('en')
            AsyncStorage.setItem('lng', 'en')
            if (restart) {
                RNRestart.Restart();
            }
        } else if (language == 'ar') {
            I18n.locale = 'ar'
            I18nManager.forceRTL(true)
            setSelectedLanguage('ar')
            AsyncStorage.setItem('lng', 'ar')
            if (restart) {
                RNRestart.Restart();
            }
        }
    }

    const renderHeader = () => {
        return (
            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>{I18n.t('fruits')}</Text>
            </View>
        )
    }

    const renderLanguageList = () => {
        return (
            <View style={styles.languageListContainer}>
                <Text
                    onPress={() => { setLanguage('en', true) }}
                    style={[styles.languageSelectionCell, selectedLanguage == 'en' && styles.languageSelectionCellSelected]}>
                    {'English'}
                </Text>
                <Text
                    onPress={() => { setLanguage('ar', true) }}
                    style={[styles.languageSelectionCell, selectedLanguage == 'ar' && styles.languageSelectionCellSelected]}>
                    {'Arabic'}
                </Text>
            </View>
        )
    }

    const renderListOfFruits = () => {
        return (
            <View>
                {
                    listOfFruits.map((item, index) =>
                        <Text
                            key={index}
                            style={styles.styleFruitListItem}>
                            {item}
                        </Text>)
                }
            </View>
        )
    }

    const renderNextButton = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('RTLCheck')
                }}>
                <Text style={styles.styleNextButton}>Next</Text>
            </TouchableOpacity>
        )
    }

    const renderSpace = () => {
        return <View style={styles.space} />
    }

    const content = () => {
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <StatusBar backgroundColor={'#98FB98'} barStyle={'dark-content'} />
                {
                    selectedLanguage != '' ?
                        <View style={styles.container}>
                            {renderHeader()}
                            {renderLanguageList()}
                            {/* {renderListOfFruits()} */}
                            {renderSpace()}
                            {renderNextButton()}
                        </View>
                        : null
                }

            </View>
        )
    }
    return content();
}
const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    headerView: {
        backgroundColor: '#98FB98',
        height: 56,
        elevation: 4,
        width: '100%',
        marginBottom: 16,
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        alignSelf: 'flex-start',
    },
    languageListContainer: {
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#DCDCDC',
        height: 56
    },
    languageSelectionCell: {
        borderRadius: 4,
        backgroundColor: 'white',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 16,
        paddingHorizontal: 16,
        textAlignVertical: 'center',
        color: 'black',
        height: 38
    },
    languageSelectionCellSelected: {
        backgroundColor: '#ee5549',
        fontWeight: '700'
    },
    languageText: {
        color: 'black',
        fontSize: 16
    },
    styleFruitListItem: {
        color: 'black',
        fontSize: 15,
        width: '100%',
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 0.3,
        textAlignVertical: 'center',
        height: 48,
        paddingHorizontal: 16
    },
    space: {
        flex: 1.0
    },
    styleNextButton: {
        backgroundColor: '#98FB98',
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 16,
        height: 44,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 16,
    }
})
export default Internationalization;