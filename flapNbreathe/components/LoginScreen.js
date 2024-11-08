import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";

export default function LoginScreen({ onRegisterPress }) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <Pressable style={styles.signInButton}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
            <Pressable style={styles.registerButton} onPress={onRegisterPress}>
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignItems: 'center',
        width: '80%',
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 15,
        padding: 8,
    },
    signInButton: {
        backgroundColor: '#5e4835',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    registerButton: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
