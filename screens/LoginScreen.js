import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Button, Input, Image, color } from "@rneui/base";

const LoginScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-neutral-800">
      <Text className="text-white">Welcome to the Login Page!</Text>

      <View className="">
        <Input placeholder="Email" inputStyle={{color:'white'}} autoFocus type="email"/>
        <Input placeholder="Password" inputStyle={{color:'white'}} secureTextEntry type="password"/>
      </View>
    </View>


  );
};

export default LoginScreen;
