import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import InputField from '../../components/common/InputField';
import PrimaryButton from '../../components/common/PrimaryButton';
import SocialButton from '../../components/common/SocialButton';
import { colors, scale } from '@/utils';
import { router } from 'expo-router';

const SignUpScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an {'\n'}account</Text>

            <InputField iconName="person" placeholder="Username or Email" />
            <InputField
                iconName="lock"
                placeholder="Password"
                secureTextEntry
                rightIcon="visibility"
                onRightIconPress={() => { }}
            />
            <InputField
                iconName="lock"
                placeholder="Confirm Password"
                secureTextEntry
                rightIcon="visibility"
                onRightIconPress={() => { }}
            />

            <View style={styles.registerMultiTextRow}>
                <Text style={styles.leftAlignText}>By clicking the <Text style={styles.middleText}>Register</Text> button, you agree {'\n'}to the public offer</Text>
            </View>


            <PrimaryButton title="Create Account" onPress={() => { }} />

            <Text style={styles.orText}>- OR Continue with -</Text>

            <View style={styles.socialRow}>
                <SocialButton iconSource={require('../../assets/images/icons/google.png')} />
                <SocialButton iconSource={require('../../assets/images/icons/apple.png')} />
                <SocialButton iconSource={require('../../assets/images/icons/facebook.png')} />
            </View>

            <View style={styles.signupRow}>
                <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Regular'  }}>I Already Have an Account </Text>
                <TouchableOpacity>
                    <Text style={styles.signupText} onPress={() => router.push('/(auth)/login_screen')}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: scale(20), justifyContent: 'center', backgroundColor: colors.white },
    title: { fontSize: scale(34), fontWeight: '700', marginBottom: scale(60), fontFamily: 'Montserrat-Bold' },
    forgotText: { color: colors.pinkReddish, marginVertical: scale(10), marginBottom: scale(30) },
    leftAlignText: { textAlign: 'left', marginVertical: scale(20), color: colors.grayDark700, marginBottom: scale(20),fontFamily: 'Montserrat-Regular'  },
    middleText: { textAlign: 'left', marginVertical: scale(20), color: colors.redLight, marginBottom: scale(20), fontFamily: 'Montserrat-Regular'  },
    orText: { textAlign: 'center', marginVertical: scale(20), color: colors.grayDark700, marginBottom: scale(20), fontFamily: 'Montserrat-Regular'  },
    socialRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: scale(20) },
    signupRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    registerMultiTextRow: { flexDirection: 'row', alignItems: 'center' },
    signupText: { color: colors.pinkReddish, fontWeight: '600', textDecorationLine: 'underline', fontFamily: 'Montserrat-Bold'  },
});

export default SignUpScreen;
