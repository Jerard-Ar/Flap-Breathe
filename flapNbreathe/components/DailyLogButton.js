import { StyleSheet, View, Text, Pressable, Image } from "react-native";

export default function DailyLogButton() {
    return (
        <Pressable style={styles.button}>
            <Image source={require('@/assets/images/logIcon.png')} style={styles.icon} />
            <Text style={styles.text}>Daily Log</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#5e4835',
        fontWeight: 'bold',
    },
});
