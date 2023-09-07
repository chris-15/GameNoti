import { Text, View, KeyboardAvoidingView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input } from "@rneui/base";
import { auth, authInstance } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegisterScreen = ( { navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Home"
    })
  }, [navigation])

  const register = () => {
    createUserWithEmailAndPassword(authInstance, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: username
        })
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1 justify-center items-center p-10 bg-neutral-800 space-y-8">
      <Text className="text-white text-3xl font-bold text-center">
        Create Your GameNoti Account
      </Text>

      {/* Register Form */}
      <View className="w-full">
        <Input
          placeholder="Username"
          inputStyle={{ color: "white" }}
          autoFocus
          type="username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          placeholder="Email"
          inputStyle={{ color: "white" }}
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
      {/* Register Button */}
      <View className="w-1/2">
        <Button
          onPress={register}
          title="Register"
          buttonStyle={{
            backgroundColor: "#A855F7",
            borderRadius: 30,
          }}
        />
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
