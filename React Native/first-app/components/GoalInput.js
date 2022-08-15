import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandeller(enteredText) {
        setEnteredGoalText(enteredText)

    }

    function addGoalHandeller() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.visiable} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput placeholder={'Enter Your Goal'} style={styles.textInput} onChangeText={goalInputHandeller}
                           value={enteredGoalText}></TextInput>

                <View style={styles.buttonCointer}>

                    <View style={styles.button}>
                        <Button title={'Cancle'} onPress={props.toCancle} color="#f31282"/>

                    </View>
                    <View style={styles.button}>
                        <Button title={'Add Goal'} onPress={addGoalHandeller} color="#b180f0"></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120483',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonCointer: {
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
        marginTop: 16
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})


export default GoalInput;
