import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@rneui/base";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" flex-1 bg-neutral-800">
      <StatusBar style="light" />

      <View className="flex-1 justify-center items-center space-y-8">
        {/* Title */}
        <View className="">
          <Text className="text-white text-3xl font-bold">
            Welcome to GameNoti!
          </Text>
        </View>

        {/* Buttons  */}
        <View className="">
          <Button
            title="Login"
            titleStyle={{ fontSize: 24 }}
            buttonStyle={{
              backgroundColor: "#A855F7",
              borderRadius: 30,
            }}
            onPress={() => navigation.navigate("Login")}
            className=" "
          />

          <Button
            title="Register"
            type="clear"
            titleStyle={{ color: "#A855F7", textDecorationLine: "underline", fontSize: 24 }}
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
