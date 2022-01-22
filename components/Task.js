import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default (props) => {
    return (
        <View style={styles.item}>
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    }
})