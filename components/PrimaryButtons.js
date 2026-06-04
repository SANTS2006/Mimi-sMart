import { StyleSheet, View, Text, Pressable } from "react-native";
function PrimaryButtons({ children }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer}>
                <Text style={styles.buttontext}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButtons;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        backgroundColor: '#2d6a4f',
        borderRadius: 8,
        overflow: 'hidden',
        marginTop: 40
    },
    buttonInnerContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    buttontext: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'inter',
        fontWeight: 'bold'
    }
})