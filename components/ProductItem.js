import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function ProductItem({ name, price, image, description, onPress }) {
    return (
        <View style={styles.productBox}>
            <Pressable onPress={onPress}>
                <Image style={styles.productImage} source={image} />
                <View style={styles.productInfo}>
                    <View>
                        <Text style={styles.productName}>{name}</Text>
                        <Text style={styles.productPrice}>NLe {price}</Text>
                    </View>
                    <View style={styles.addIcon}>
                        <Ionicons size={20} name="add" color='white' />
                    </View>
                </View>

            </Pressable>
        </View>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    productImage: {
        width: 150,
        height: 120
    },
    productBox: {
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: '#333',
        margin: 10,
    },
    productName: {
        fontWeight: 'bold',
    },
    productPrice: {
        color: '#2d6a4f',
        fontWeight: 'bold'
    },
    productInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 7
    },
    addIcon: {
        backgroundColor: '#2d6a4f',
        borderRadius: 50,
    }
})