import GlobalStyles from './GlobalStyles'
import Task from "./components/Task"

import { useState } from "react"

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native'

export default () => {
    const [task, setTask] = useState()
    const [taskItems, setTaskItems] = useState([])

    const handleAddTask = () => {
        if (!task) {
            return
        }
        setTaskItems([...taskItems, task])
        setTask(null)
    }

    const handleCompleteTask = (index) => {
        const itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1)
        setTaskItems(itemsCopy)
    }

    return (
        <SafeAreaView style={GlobalStyles.safeArea}>
            <Text style={styles.title}>Today's tasks</Text>
            <ScrollView style={styles.tasksScrollWrapper}>
                <View style={styles.tasksWrapper}>
                    <View style={styles.items}>
                        {taskItems.length > 0
                            ? taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => handleCompleteTask(index)}>
                                        <Task text={item} />
                                    </TouchableOpacity>
                                )
                            })
                            : <Text style={styles.empty}>no tasks</Text>
                        }
                    </View>
                </View>
            </ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.addTaskWrapper}>
                <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 210,
        marginLeft: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 20
    },
    empty: {
        fontSize: 20,
        textAlign: "center",
        paddingTop: 150
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
        marginRight: 20
    },
    tasksWrapper: {
        paddingHorizontal: 20
    },
    addTaskWrapper: {
        position: "absolute",
        bottom: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    tasksScrollWrapper: {
        marginBottom: 90
    }
})
