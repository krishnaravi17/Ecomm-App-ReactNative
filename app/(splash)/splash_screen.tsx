import { View, Image, ActivityIndicator } from 'react-native'
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

import styles from './styles';
import { colors } from '@/utils';

function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/(splash)/preview_screen'); 
        }, 1000); // 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return <View style={styles.containerSplash}>
        <Image
            source={require('../../assets/images/logos/splash_img.png')}
            style={styles.headerImage} />
        <ActivityIndicator size="small" color={colors.black} />
    </View>
}
export default SplashScreen;

