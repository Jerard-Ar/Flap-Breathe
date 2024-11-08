import { StyleSheet, View, ImageBackground } from 'react-native';
import ProfileButton from '../../components/ProfileButton';
import StartGameButton from '../../components/StartGameButton';
import AssessmentButton from '../../components/AssessmentButton';
import DailyLogButton from '../../components/DailyLogButton';

export default function HomeScreen() {
    return (
        <ImageBackground source={require('@/assets/images/background.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <ProfileButton />
                    <StartGameButton />
                </View>
                <View style={styles.row}>
                    <AssessmentButton />
                    <DailyLogButton />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
});
