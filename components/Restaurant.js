import React, {useState} from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import Indicator from './Indicator';
import RestaurantDetails from './RestaurantDetails'

export default function Restaurant(props) {
    const [count, setCount] = useState(0);
    let images = props.images;
    let imageURL = { uri: props.images[count]}

    const leftPress = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const rightPress = () => {
        if (count < images.length - 1) {
            setCount(count + 1);
        }
    }

    return (
        <ImageBackground
            style={styles.image}
            imageStyle={styles.imageStyle}
            source={imageURL}>
            <View style={styles.imageIndicators}>
                {images.map((image, index) => (
                    <Indicator active={count === index} key={index} />
                ))}
            </View>
            <View style={styles.touchContainer}>
                <TouchableOpacity style={styles.leftNavigation} onPress={leftPress} />
                <TouchableOpacity style={styles.rightNavigation} onPress={rightPress} />
            </View>
            <RestaurantDetails
                price={props.price}
                name={props.name}
                description={props.description}
                distance={props.distance} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    touchContainer: {
        flexDirection: 'row',
        flex: 18
    },
    imageIndicators: {
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        marginTop: 10,
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