import { StatusBar } from "expo-status-bar";
import { useLayoutEffect, useState } from "react";
import { Text, View, SafeAreaView, KeyboardAvoidingView } from "react-native";
import { Icon } from '@rneui/themed';
import { Button, Input, Image, color } from "@rneui/base";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1 bg-neutral-800 justify-center items-center p-10">
      {/* <Text className="text-white">Welcome to the Login Page!</Text>
       */}
       <Icon name="sports-esports" color="white" size={100}/>
      <View className=" w-full">
        <Input
          placeholder="Email"
          inputStyle={{ color: "white" }}
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          inputStyle={{ color: "white" }}
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button title="Login" color="#A855F7" />
      <View style={{ height: 100}}/>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
