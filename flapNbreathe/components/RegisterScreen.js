import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";

export default function RegisterScreen({ onLoginPress }) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Firstname" />
            <TextInput style={styles.input} placeholder="Lastname" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
            <Pressable style={styles.signUpButton}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <Pressable style={styles.loginLink} onPress={onLoginPress}>
                <Text style={styles.linkText}>Back to Login</Text>
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
        marginBottom: 10,
        padding: 8,
    },
    signUpButton: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    loginLink: {
        marginTop: 15,
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
