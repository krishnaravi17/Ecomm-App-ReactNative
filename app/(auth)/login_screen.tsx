import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import InputField from '../../components/common/InputField';
import PrimaryButton from '../../components/common/PrimaryButton';
import SocialButton from '../../components/common/SocialButton';
import { colors } from '@/utils';

const LoginScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome{'\n'}Back!</Text>

            <InputField iconName="person" placeholder="Username or Email" />
            <InputField
                iconName="lock"
                placeholder="Password"
                secureTextEntry
                rightIcon="visibility"
                onRightIconPress={() => { }}
            />

            <TouchableOpacity style={{ alignSelf: 'flex-end' }}
                onPress={() => router.push('/(auth)/forgotpass_screen')}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <PrimaryButton title="Login" onPress={() => { }} />

            <Text style={styles.orText}>- OR Continue with -</Text>

            <View style={styles.socialRow}>
                <SocialButton iconSource={require('../../assets/images/icons/google.png')} />
                <SocialButton iconSource={require('../../assets/images/icons/apple.png')} />
                <SocialButton iconSource={require('../../assets/images/icons/facebook.png')} />
            </View>

            <View style={styles.signupRow}>
                <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Regular'  }}>Create An Account </Text>
                <TouchableOpacity>
                    <Text style={styles.signupText} onPress={() => router.push('/(auth)/signup_screen')}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: colors.white },
    title: { fontSize: 34, fontWeight: '700', marginBottom: 60, fontFamily: 'Montserrat-Bold' },
    forgotText: { color: '#f83663', marginVertical: 10, marginBottom: 30, fontFamily: 'Montserrat-Regular'  },
    orText: { textAlign: 'center', marginVertical: 20, color: '#555', marginBottom: 20,fontFamily: 'Montserrat-Regular'  },
    socialRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
    signupRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    signupText: { color: '#f83663', fontWeight: '600', textDecorationLine: 'underline', fontFamily: 'Montserrat-Bold'  },
});

export default LoginScreen;
