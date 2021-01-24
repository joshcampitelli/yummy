import React, {useState} from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import Indicator from './Indicator';
import RestaurantDetails from './RestaurantDetails'

export default function Restaurant({images}) {
    const [count, setCount] = useState(0);

    const leftPress = () => {
        if (count > 0) setCount(count - 1);
    }

    const rightPress = () => {
        if (count < images.length - 1) setCount(count + 1);
    }

    return (
        <ImageBackground
            style={styles.image}
            imageStyle={styles.imageStyle}
            source={images[count].image}>
            <View style={styles.imageIndicators}>
                {images.map(image => (
                    <Indicator active={count === image.index} key={image.index} />
                ))}
            </View>
            <View style={styles.touchContainer}>
                <TouchableOpacity style={styles.leftNavigation} onPress={leftPress} />
                <TouchableOpacity style={styles.rightNavigation} onPress={rightPress} />
            </View>
            <RestaurantDetails
                price='$$$'
                name='Pho bo ga la'
                description='Vietnamese Restaurant'
                distance='5 kilometers away' />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    swiper: {
        margin: 0,
        padding: 0,
        width: 500
    },
    container: {
        flex: 1,
        backgroundColor: '#292929',
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchContainer: {
        flexDirection: 'row',
        flex: 18
    },
    imageIndicators: {
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        margin: 10,
        marginBottom: 0,
        flex: 10,
        width: '100%'
    },
    imageStyle: {
        borderRadius: 20
    },
    leftNavigation: {
        flex: 1
    },
    rightNavigation: {
        flex: 1
    }
});