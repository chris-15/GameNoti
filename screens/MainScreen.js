import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Icon } from "@rneui/themed";
import { authInstance } from "../firebase"

const MainScreen = ({ navigation }) => {

  const signOutUser = () =>{
    authInstance.signOut().then(() => {
      navigation.replace("Login");
    });
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "GameNoti",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser}>
            <Text className="text-white">LOG OUT</Text>
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <Icon name="search" color="white" />
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800 justify-center items-center">
      <StatusBar style="light" />
      <View>
        <Text className="text-white">
          This is the main page- send noti to your friends!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
