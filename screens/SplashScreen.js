import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import PrimaryButtons from "../components/PrimaryButtons";

function SplashScreen({ navigation }) {
    function handleGetstartedPressed() {
        navigation.replace('MainTabs')
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.container} resizeMode='cover' source={require('../assets/images/BackGround.png')}>
                <View style={styles.splahDetails}>
                    <Image style={styles.mimiLogo} source={require('../assets/images/Logo1.png')} />
                    <Text style={styles.mimisText}>Mimi's<Text style={styles.martText}>Mart</Text></Text>
                    <View style={styles.mainOtherText}>
                        <Text style={styles.otherText}>Fresh groceries, delivered</Text>
                        <Text style={styles.otherText}>to your doorstep</Text>
                    </View>
                    <View style={styles.getStartedButton}>
                        <PrimaryButtons onPress={handleGetstartedPressed}> <Ionicons name="cart" color="#ffd166" size={30} /> Get Started</PrimaryButtons>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    splahDetails: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mimiLogo: {
        width: 300,
        height: 200
    },
    mimisText: {
        fontSize: 50,
        fontWeight: '800',
        fontFamily: 'Montserrat'
    },
    martText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffd166'
    },
    mainOtherText: {
        marginTop: 7,
    },
    otherText: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'inter'
    }
})