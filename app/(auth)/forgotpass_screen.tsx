import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import InputField from '../../components/common/InputField';
import PrimaryButton from '../../components/common/PrimaryButton';
import { colors } from '@/utils';


const ForgotPasswordScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forget{'\n'}password?</Text>

            <InputField iconName="mail" placeholder="Enter your email address" />

            <View style={styles.registerMultiTextRow}>
                <Text style={styles.middleText}>*
                    <Text style={styles.leftAlignText}>
                        We will send you a message to set or reset your new password</Text>
                </Text>
            </View>

            <PrimaryButton title="Login" onPress={() => { }} />

        </View>
    );
};

const styles = StyleSheet.create({
     container: {
        flex: 1,
        padding: 20,
        marginTop: 20,  
        justifyContent: 'flex-start',
        backgroundColor: colors.white
    },
    title: { fontSize: 34, fontWeight: '700', marginBottom: 60, fontFamily: 'Montserrat-Bold', marginTop: 100 },
    signupText: { color: '#f83663', fontWeight: '600', textDecorationLine: 'underline' },
    registerMultiTextRow: { flexDirection: 'row', alignItems: 'center' },
    leftAlignText: { textAlign: 'left', marginVertical: 20, color: '#555', marginBottom: 20, fontFamily: 'Montserrat-Regular' },
    middleText: { textAlign: 'left', marginVertical: 20, color: colors.redLight, marginBottom: 20 },
});

export default ForgotPasswordScreen;
