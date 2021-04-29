import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    Text,
    Image,
    I18nManager,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import I18n from '../I18n'

const IS_RTL = I18nManager.isRTL;

const DIMENSIOS = Dimensions.get('window')

function RTLCheck(props) {

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

    const heros = [
        "https://cdn.pixabay.com/photo/2017/07/15/20/50/iron-man-2507706_960_720.png",
        "https://cdn.pixabay.com/photo/2014/12/23/07/40/hulk-578088__340.jpg",
        "https://cdn.pixabay.com/photo/2019/03/21/02/51/deadpool-4070071__340.jpg",
        "https://cdn.pixabay.com/photo/2015/03/11/01/33/hulk-667988__340.jpg",
    ]

    const renderHeader = () => {
        return (
            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>{I18n.t('fruits')}</Text>
            </View>
        )
    }

    const renderListOfFruits = () => {
        return (
            <View>
                {
                    listOfFruits.map((item, index) =>
                        <View
                            key={index}
                            style={styles.styleFruitListItemContainer}>
                            <Image source={require('../assets/images/poke.png')} style={styles.stylePokeIcon} />
                            <Text
                                style={styles.styleFruitListItem}>
                                {item}
                            </Text>
                            <Image source={require('../assets/images/like.png')} style={styles.styleLikeIcon} />
                        </View>
                    )
                }
            </View>
        )
    }

    const renderChangeLanguageButton = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('Internationalization')
                }}>
                <Text style={styles.styleChangeLanguageButton}>Change Language</Text>
            </TouchableOpacity>
        )
    }

    const renderSpace = () => {
        return <View style={styles.space} />
    }

    const renderHeros = () => {

        const renderBannerItem = (item, index) => {
            return (
                <View style={styles.styleBannerImageContainer}>
                    <Image
                        style={styles.styleBannerImage}
                        source={{ uri: item }}
                        resizeMode={'stretch'} />
                </View>
            )
        }
        return (
            <View style={styles.styleCarouselContainer}>
                <Carousel
                    sliderWidth={DIMENSIOS.width}
                    itemWidth={DIMENSIOS.width}
                    useScrollView={I18nManager.isRTL ? true : false}
                    data={heros}
                    autoplay={true}
                    loop={true}
                    autoplayInterval={5000}
                    renderItem={({ item, index }) => renderBannerItem(item, index)}
                />
            </View>
        )
    }

    const content = () => {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <StatusBar backgroundColor={'#98FB98'} barStyle={'dark-content'} />
                    <View style={styles.container}>
                        {renderHeader()}
                        {renderHeros()}
                        <ScrollView>
                            <View>
                                {renderListOfFruits()}
                            </View>
                        </ScrollView>
                        {renderSpace()}
                        {renderChangeLanguageButton()}
                    </View>
                </SafeAreaView>
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
    styleFruitListItemContainer: {
        width: '100%',
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 0.3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    styleFruitListItem: {
        color: 'black',
        fontSize: 15,
        textAlignVertical: 'center',
        height: 48,
        paddingHorizontal: 16,
        flex: 1.0
    },
    stylePokeIcon: {
        width: 44,
        height: 44,
        resizeMode: 'center',
    },
    styleLikeIcon: {
        width: 30,
        height: 30,
        resizeMode: 'center',
        marginEnd: 16,
        transform: [{ scaleX: IS_RTL ? -1 : 1 }],
    },
    space: {
        flex: 1.0
    },
    styleChangeLanguageButton: {
        backgroundColor: '#98FB98',
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 16,
        height: 44,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 16,
    },
    styleCarouselContainer: {
        height: 200,
        elevation: 5,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        shadowOffset: { height: 1, width: 0 },
        backgroundColor: 'white',
    },
    styleBannerImage: {
        width: '100%',
        height: 200,
    },
    styleBannerImageContainer: {
        overflow: 'hidden',
        elevation: 5,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        shadowOffset: { height: 1, width: 0 },
    }

})
export default RTLCheck;