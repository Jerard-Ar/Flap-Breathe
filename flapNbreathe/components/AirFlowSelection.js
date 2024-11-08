import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function AirflowSelection({ onBack }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select your prescribed airflow rate:</Text>
            {/* Your airflow options here */}
            <Pressable style={styles.backButton} onPress={onBack}>
                <Text style={styles.backButtonText}>Back</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    backButton: {
        backgroundColor: 'gray',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
