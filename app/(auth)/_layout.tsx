import React from 'react';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';


export default function AuthLayout() {
    return (
        <Stack screenOptions={{
            //headerShown: false,
            gestureEnabled: false,
        }} >
            <Stack.Screen name="login_screen" options={{ headerShown: false }} />
            <Stack.Screen name="signup_screen" options={{ headerShown: false }} />
            <Stack.Screen name="forgotpass_screen" options={{ headerShown: false }} />

        </Stack>


    );
}