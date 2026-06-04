import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Image style={styles.profileImage} source={require('../assets/images/profile.jpeg')} />
            <View style={styles.userInfo}>
                <View style={styles.nameContainer}>
                    <Text style={styles.userDetails}>Mujay M.M Nabieu</Text>
                    <Text style={styles.userDetails1}>mujaymillicentnabieu005@gmail.com</Text>
                </View>
                <View style={styles.otherProfile}>
                    <View style={styles.first}>
                        <Ionicons name="settings-outline" size={35} />
                        <Text style={styles.text}>Settings</Text>
                    </View>
                    <View>
                        <Ionicons name="arrow-forward" size={35} />
                    </View>
                </View>
                <View style={styles.otherProfile}>
                    <View style={styles.first}>
                        <View style={styles.helpView}>
                            <Ionicons name="help" size={35} color='white' />
                        </View>
                        <Text style={styles.text}>Help Center</Text>
                    </View>
                    <View>
                        <Ionicons name="arrow-forward" size={35} />
                    </View>
                </View>
                <View style={styles.otherProfile}>
                    <View style={styles.first}>
                        <Ionicons name="log-out-outline" size={35} color='red' />
                        <Text style={styles.text}>Log out</Text>
                    </View>
                    <View>
                        <Ionicons name="arrow-forward" size={35} />
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebe9e9',
        marginTop: 250,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center'
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: -150
    },
    userDetails: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    userDetails1: {
        fontSize: 16,
        textAlign: 'center'
    },
    userInfo: {
        marginTop: 40
    },
    first: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    nameContainer: {
        marginBottom: 30
    },
    otherProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#333',
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        marginTop: 20
    },
    text: {
        paddingLeft: 5,
        fontSize: 20
    },
    helpView: {
        backgroundColor: '#2d6a4f',
        borderRadius: 50
    }
})