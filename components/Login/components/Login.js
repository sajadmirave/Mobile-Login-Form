import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";

//components
import AppButton from "../../tools/AppButton";
import AppInput from "../../tools/AppInput";

// styles
import AppButtonStyle from "../../tools/styles/AppButtonStyle";
import LoginStyles from "../styles/LoginStyles";

import apiClient from "../../../api/Client";

const Login = () => {
  // cretae usestate to save data from input and check them
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usersData, setUsersData] = useState([]);
  const [adminsData, setAdminsData] = useState([]);

  const checkUsers = () => {
    usersData.map((i) => {
      if (username == i.username) {
        alert("Welcome Back Bro");
        
      }
    });
  };

  const HandleLogin = () => {
    // check
    adminsData.map((i) => {
      if (username == i.username) {
        alert(`Hello Admin ${i.username}`);
      } else {
        checkUsers();
      }
    });
  };

  // get data from database and check it here
  useEffect(() => {
    loadData();
    loadAdminData();
  }, []);

  const loadData = async () => {
    const response = await apiClient.get("/users");
    setUsersData(response.data);
  };

  const loadAdminData = async () => {
    const response = await apiClient.get("/admins");

    setAdminsData(response.data);
  };

  return (
    <View style={[LoginStyles.container]}>
      <Text
        name="headerTitle"
        style={{ color: "#252525", fontSize: 24, marginBottom: 30 }}
      >
        Welcome Back :D
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
          { backgroundColor: "green", marginTop: 20 },
        ]}
        onPress={HandleLogin}
      />
    </View>
  );
};

export default Login;
