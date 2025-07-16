import { useRouter } from 'expo-router';

import { View, Text, Button } from 'react-native';
import React, { useState, useEffect } from 'react'

import * as Font from 'expo-font'
import { colors } from '@/utils';
import { ActivityIndicator } from 'react-native';

const HomeScreen = () => {
    const router = useRouter();
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        loadAppData()
    }, [])

    async function loadAppData() {
        await Font.loadAsync({
            'Montserrat-Black': require('../assets/fonts/montserrat/Montserrat-Black.ttf'),
            'Montserrat-Bold': require('../assets/fonts/montserrat/Montserrat-Bold.ttf'),
            'Montserrat-Regular': require('../assets/fonts/montserrat/Montserrat-Regular.ttf'),
            'Montserrat-SemiBold': require('../assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
            'Montserrat-Light': require('../assets/fonts/montserrat/Montserrat-Light.ttf'),
        })
        setFontLoaded(true)
    }

    if (fontLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Ecommerce App</Text>
                <Text></Text>
                <Button
                    title="Splash Screen"
                    onPress={() => router.push('/(splash)/splash_screen')}
                />
                <Button
                    title="Login Screen"
                    onPress={() => router.push('/(auth)/login_screen')}
                />
                <Button
                    title="SignUp Screen"
                    onPress={() => router.push('/(auth)/signup_screen')}
                />
                <Button
                    title="HomePage Screen"
                    onPress={() => router.push('/(tabs)/home_screen')}
                />


            </View>
        )
    } else return <ActivityIndicator size="small" color={colors.black} />



        ;
};

export default HomeScreen;