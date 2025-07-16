import React from 'react';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';


export default function AuthLayout() {
    return (
        <Stack screenOptions={{
            //headerShown: false,
            gestureEnabled: false,
        }} >
            <Stack.Screen name="splash_screen" options={{ headerShown: false }} />
            <Stack.Screen name="preview_screen" options={{ headerShown: false }} />
            

        </Stack>


    );
}