import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileButton from '../../components/ProfileButton';
import StartGameButton from '../../components/StartGameButton';
import AssessmentButton from '../../components/AssessmentButton';
import DailyLogButton from '../../components/DailyLogButton';
import AirflowSelection from '../../components/AirflowSelection';

export default function HomeScreen() {
    const [showAirflowSelection, setShowAirflowSelection] = useState(false);

    return (
        <View style={styles.container}>
            {showAirflowSelection ? (
                <AirflowSelection onBack={() => setShowAirflowSelection(false)} />  {/* Render AirflowSelection with back handler */}
            ) : (
                <View style={styles.buttonsContainer}>
                    <View style={styles.row}>
                        <ProfileButton />
                        <StartGameButton onPress={() => setShowAirflowSelection(true)} />  {/* Show AirflowSelection on press */}
                    </View>
                    <View style={styles.row}>
                        <AssessmentButton />
                        <DailyLogButton />
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginVertical: 10,
    },
});
