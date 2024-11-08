import { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import LoginScreen from '../../components/LoginScreen';
import RegisterScreen from '../../components/RegisterScreen';

export default function SettingsScreen() {
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    return (
        <ImageBackground source={require('@/assets/images/background.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                {isLoginVisible ? (
                    <LoginScreen onRegisterPress={() => setIsLoginVisible(false)} />
                ) : (
                    <RegisterScreen onLoginPress={() => setIsLoginVisible(true)} />
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
