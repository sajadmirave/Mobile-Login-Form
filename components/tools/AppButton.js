import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

// styles
import styles from "./styles/AppButtonStyle";

const AppButton = ({ title, style, onPress }) => {
  return (
    <View>
      {/* create custom button */}
      <TouchableOpacity style={[style]} onPress={onPress}>
        <Text style={{ fontSize: 18, color: "#fff" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;
