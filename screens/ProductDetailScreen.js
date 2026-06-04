import { StyleSheet, View, Text, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButtons from '../components/PrimaryButtons';
import { useState } from "react";

function ProductDetailScreen({ route, navigation }) {
    const [isFavourite, setIsFavourite] = useState(false);
    const { product } = route.params;
    return (
        <SafeAreaView edges={['top']}>
            <ScrollView>
                <View style={styles.arrowHeart}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={40} />
                    </Pressable>

                    <Pressable onPress={() => setIsFavourite(!isFavourite)}>
                        <Ionicons name={isFavourite ? "heart" : "heart-outline"} size={40} color={isFavourite ? "red" : "black"} />
                    </Pressable>
                </View>
                <View style={styles.productBox}>
                    <Image style={styles.productImage} source={product.image} />
                </View>

                <Text style={[styles.container, styles.detailsInfo]}>{product.name}</Text>
                <Text style={[styles.container, styles.detailsInfo, styles.detailsInfoPrice]}>NLe {product.price}</Text>
                <Text style={[styles.container]}>{product.description}</Text>
                <Text style={[styles.container, styles.detailsQuantity]}>Quantity</Text>
                <View style={[styles.container, styles.quantityCount]}>
                    <Ionicons name="remove" size={40} color='#2d6a4f' />
                    <Text>1</Text>
                    <Ionicons name="add" size={40} color='#2d6a4f' />
                </View>
                <View style={styles.getStartedButton}>
                    <PrimaryButtons style={styles.button}> <Ionicons name="cart" color="#ffd166" size={30} /> Add ToCart</PrimaryButtons>
                </View>
            </ScrollView>


        </SafeAreaView>

    )
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    arrowHeart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },
    productBox: {
        margin: 16,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: "center"
    },
    productImage: {
        width: 370,
        height: 400
    },
    detailsInfo: {
        fontSize: 32,
    },
    detailsInfoPrice: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2d6a4f',
        paddingVertical: 10
    },
    detailsQuantity: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    quantityCount: {
        width: '40%',
        borderColor: '#2d6a4f',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    getStartedButton: {
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
})