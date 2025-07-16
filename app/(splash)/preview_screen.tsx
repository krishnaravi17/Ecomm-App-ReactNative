import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';

const previewScreenData = [
    {
        id: '1',
        title: 'Choose Products',
        description: 'Get your orders delivered fast at your doorstep with live tracking.',
        image: require('../../assets/images/preview1_img.png'),
    },
    {
        id: '2',
        title: 'Make Payment',
        description: 'Pay easily with multiple payment methods and quick checkout process.',
        image: require('../../assets/images/preview2_img.png'),
    },
    {
        id: '3',
        title: 'Get Your Order',
        description: 'Get your orders delivered fast at your doorstep with live tracking.',
        image: require('../../assets/images/preview3_img.png'),
    },
];

export default function PreviewScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            //router.replace('/(auth)/login_screen');
        }
    };

    const nextSlide = () => {
        if (currentIndex < previewScreenData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            router.replace('/(auth)/login_screen');
        }
    };


    const skipOnboarding = () => {
        router.replace('/(auth)/login_screen');
    };

    const { title, description, image } = previewScreenData[currentIndex];

    return (
        <View style={styles.containerPreview}>
            <View style={styles.topRow}>
                <Text style={styles.pageCount}>{`${currentIndex + 1}/${previewScreenData.length}`}</Text>
                <TouchableOpacity onPress={skipOnboarding}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bodyStyle}>
                <Image source={image} style={styles.image} resizeMode="cover" />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>

            </View>




            <View style={styles.bottomRow}>
                <TouchableOpacity onPress={prevSlide} >
                    <Text style={styles.prevText}>{currentIndex === 0 ? '    ' : 'Prev'}</Text>
                </TouchableOpacity>

                <View style={styles.pagination}>
                    {previewScreenData.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                currentIndex === index && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>

                <TouchableOpacity onPress={nextSlide} >
                    <Text style={styles.nextText}>{currentIndex === previewScreenData.length - 1 ? 'Get Started' : 'Next'}</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}
