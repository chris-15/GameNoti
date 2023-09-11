import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useState } from "react";
import { Text, View, SafeAreaView, KeyboardAvoidingView } from "react-native";
import { Icon } from "@rneui/themed";
import { Button, Input } from "@rneui/base";

import { auth, authInstance } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const unsubscribe = authInstance.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Main");
      }
    });
    return unsubscribe;
  }, []);

  const logIn = () => {
    signInWithEmailAndPassword(authInstance, email, password).catch((error) =>
      alert(error)
    );
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex-1 bg-neutral-800 justify-center items-center p-10"
    >
      <StatusBar style="light" />
      <Text className="text-white text-3xl font-bold text-center">
        Welcome to GameNoti!
      </Text>
      <Icon name="sports-esports" color="white" size={100} />
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

      <View className="w-1/2">
        <Button
          title="Login"
          onPress={logIn}
          buttonStyle={{
            backgroundColor: "#A855F7",
            borderRadius: 30,
          }}
        />

        <Button
          title="Register"
          type="clear"
          titleStyle={{
            color: "#A855F7",
            textDecorationLine: "underline",
          }}
          onPress={() => navigation.navigate("Register")}
        />
      </View>

      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
