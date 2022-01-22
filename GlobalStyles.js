import {
    StyleSheet,
    Platform
} from 'react-native'

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        paddingTop: Platform.OS === "android" ? 25 : 0
    }
})