import { View, Text, SafeAreaView, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" flex-1 bg-neutral-800">
        <StatusBar style="light"/>

      <View className="flex-1 justify-center items-center space-y-2">
        <View className="">
          <Text className="text-white text-2xl font-bold">Welcome to GameNoti!</Text>
        </View>

        <View className="">
          <View className="bg-purple-500 rounded-lg">
            <Button title="Login" color="white" onPress={()=> navigation.navigate("Login")} className=" " />
          </View>
          <View className="">
            <Button title="Register" color="#A855F7" className="" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
