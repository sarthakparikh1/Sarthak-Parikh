import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../Components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={Styles.imputContainer}>
      <TextInput
        style={Styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={Styles.buttonsContainer}>
        <View style={Styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={Styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const Styles = StyleSheet.create({
  imputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 1,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "Bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer:{
    flex:1
  }
});
