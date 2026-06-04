import { StyleSheet, View, Text, Image } from 'react-native';
function Categories({ title, image, backgroundColor }) {
    return (
        <View style={[styles.categoryBox, { backgroundColor: backgroundColor }]}>
            <Image style={styles.categoryImage} source={image} />
            <Text>{title}</Text>
        </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
    categoryImage: {
        width: 70,
        height: 70
    },
    categoryBox: {
        borderRadius: 10,
        padding: 6,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
})