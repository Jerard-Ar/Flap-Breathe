import { StyleSheet, View, Image } from "react-native";
import userIcon from '@/assets/images/icon.png';

export default function NavBar() {
    return (
        <View style={styles.navBar}>
            <Image source={userIcon} style={styles.userIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    userIcon: {
        width: 30,
        height: 30,
    },
});
