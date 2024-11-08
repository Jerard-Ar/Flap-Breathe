import { StyleSheet, View, Text, Pressable } from "react-native";

export default function WelcomeScreen({ onStartPress }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Flap...Breathe</Text>
            <Pressable style={styles.startButton} onPress={onStartPress}>
                <Text style={styles.buttonText}>Start</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    startButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
