import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface SocialButtonProps {
    iconSource: ImageSourcePropType;
    onPress?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ iconSource, onPress }) => (
    <TouchableOpacity style={styles.socialBtn} onPress={onPress}>
        <Image source={iconSource} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    socialBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#f83663',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
});

export default SocialButton;
