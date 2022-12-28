import { View, Text } from "react-native";
import React, { useState } from "react";

//components
// styles
import AppButtonStyle from "../../tools/styles/AppButtonStyle";
import LoginStyles from "../../Login/styles/LoginStyles";
import AppButton from "../../tools/AppButton";
import AppInput from "../../tools/AppInput";

// import api
import apiClient from "../../../api/Client";

const SingUp = () => {
  // cretae usestate to save data from input and check them
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = () => {
    // send data into api
    addUser();
  };

  //   post into api
  const addUser = async () => {
    const response = await apiClient.post("/users", {
      username: username,
      password: password,
    });

    if (!response.ok) {
      alert("cant singup...");
    }

    console.log(response.data);
    alert("Success");
  };

  return (
    <View style={[LoginStyles.container]}>
      <Text
        name="headerTitle"
        style={{ color: "#252525", fontSize: 24, marginBottom: 30 }}
      >
        New User
      </Text>
      <AppInput
        placeholder={"UserName"}
        onChangeText={(value) => setUsername(value)}
      />
      <AppInput
        placeholder={"Password"}
        onChangeText={(value) => setPassword(value)}
      />
      <AppButton
        title={"Login"}
        style={[
          AppButtonStyle.Button,
          { backgroundColor: "purple", marginTop: 20 },
        ]}
        onPress={HandleLogin}
      />
    </View>
  );
};

export default SingUp;
