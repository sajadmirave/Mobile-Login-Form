import { View, Text } from "react-native";
import React from "react";

// components
import AppButton from "../../tools/AppButton";

//styles
import FeedStyles from "../style/FeedStyle";
import AppButtonStyle from "../../tools/styles/AppButtonStyle";

// use navigation prop to using navigate system
const Feed = ({ navigation }) => {
  return (
    <View style={FeedStyles.container}>
      <AppButton
        title={"Login"}
        style={[AppButtonStyle.Button, { backgroundColor: "orange" }]}
        onPress={() => navigation.navigate("Login")}
      />

      <AppButton
        title={"SingUp"}
        style={[AppButtonStyle.Button, { backgroundColor: "red" }]}
        onPress={() => navigation.navigate("SingUp")}
      />
    </View>
  );
};

export default Feed;
