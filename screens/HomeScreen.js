import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import ProductItem from "../components/ProductItem";

function HomeScreen({ navigation }) {
    const categories = [
        {
            id: 1,
            title: 'Fruits',
            image: require('../assets/images/Apple fruit.png'),
            backgroundColor: '#c7e3f5'
        },
        {
            id: 2,
            title: 'Vegetables',
            image: require('../assets/images/Vegetable.png'),
            backgroundColor: '#fff9c4'
        },
        {
            id: 3,
            title: 'Beverages',
            image: require('../assets/images/Beverage.png'),
            backgroundColor: '#f8d7da'
        },
        {
            id: 4,
            title: 'Snacks',
            image: require('../assets/images/Snacks.png'),
            backgroundColor: '#d4edda'
        }
    ]

    const products = [
        {
            id: 1,
            image: require('../assets/images/Grapes.png'),
            name: 'Grapes',
            description: 'Sweet, fresh and juicy grapes, perfect for snacking or adding to your favorite recipes.',
            price: 50,
        },
        {
            id: 2,
            image: require('../assets/images/Mango.png'),
            name: 'Mango',
            description: 'Sweet, fresh and juicy mangoes, perfect for snacking or adding to your favorite recipes.',
            price: 20,
        },
        {
            id: 3,
            image: require('../assets/images/Orange.png'),
            name: 'Orange',
            description: 'Sweet, fresh and juicy oranges, perfect for snacking or adding to your favorite recipes.',
            price: 10,
        },
        {
            id: 4,
            image: require('../assets/images/Water.png'),
            name: 'Watermelon',
            description: 'Sweet, fresh and juicy watermelons, perfect for snacking or adding to your favorite recipes.',
            price: 60,
        },
    ]

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <ScrollView>

                <View style={styles.welcomeMessage}>
                    <Text style={styles.welcomeMessageText}>Hello, Mujay</Text>
                    <Ionicons size={40} name="notifications-outline" />
                </View>

                <View style={styles.searchContainer}>
                    <Ionicons style={styles.searchIcon} name="search-outline" size={40} />
                    <TextInput style={styles.searchInput} placeholder="Search groceries..." />
                </View>

                <View>
                    <View style={styles.categoriesSection}>
                        <Text style={styles.categories}>Categories</Text>
                        <Text style={styles.seeAll}>See all</Text>
                    </View>

                    <View style={styles.categoryList}>
                        {categories.map((category) => (
                            <Categories key={category.id} image={category.image} title={category.title} backgroundColor={category.backgroundColor} />
                        ))}
                    </View>
                </View>

                <View>
                    <View style={styles.productSection}>
                        <Text style={styles.categories}>Featured Products</Text>
                        <Text style={styles.seeAll}>See all</Text>
                    </View>

                    <View style={styles.productList}>
                        {products.map((product) => (
                            <ProductItem key={product.id} image={product.image} name={product.name} price={product.price} description={product.description} onPress={() => navigation.navigate('ProductDetails', { product })} />
                        ))}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    welcomeMessage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    welcomeMessageText: {
        fontSize: 27,
        fontWeight: 'bold'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderRadius: 25,
        borderColor: '#333',
        paddingHorizontal: 1,
        height: 55,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18
    },
    searchIcon: {
        marginLeft: 15
    },
    categoriesSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    categories: {
        fontWeight: 'bold',
        fontSize: 20
    },
    seeAll: {
        color: '#2d6a4f',
        fontWeight: 'bold',
        fontSize: 16
    },
    categoryList: {
        flexDirection: 'row',
        marginHorizontal: 16,
    },
    productSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    productList: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
})