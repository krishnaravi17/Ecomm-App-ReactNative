// context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { AuthService } from '../AuthService';
import { router } from 'expo-router'; // or useNavigation() if React Navigation

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const login = async (username: string, password: string) => {
        setLoading(true);
        setError('');
        
        try {
            const data = await AuthService.login(username, password);
            console.log('Login success:', data);

            // ✅ Navigate to signup page after success
            router.push('/(tabs)/home_screen');
            // or navigation.navigate('Signup') if using React Navigation
        } catch (err: any) {
            console.log('Login success:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ loading, error, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
