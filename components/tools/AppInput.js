import { View, Text, TextInput } from "react-native";
import React from "react";
import AppInputStyles from "./styles/AppInput";

// use prop to create custome tools in another file
const AppInput = ({ placeholder, onChangeText }) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder={placeholder}
        style={AppInputStyles.Input}
        placeholderTextColor={"#fff"}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default AppInput;
