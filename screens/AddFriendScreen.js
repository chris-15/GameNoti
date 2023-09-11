import { View, Text, SafeAreaView, KeyboardAvoidingView } from "react-native";
import React from "react";
import { Button, Input } from "@rneui/base";
import { Icon } from "@rneui/themed";

const AddFriendScreen = () => {
  return (
    <KeyboardAvoidingView className="flex-1 bg-neutral-800 ">
      {/* Add Friend Form-  add by email */}
      <View className="flex-row justify-center items-center px-8 mt-10">
        <Icon name="search" color="white" size={30} />
        <View className=" w-full">
          <Input placeholder="Add Your Friend's Email!" inputStyle={{ color: "white" }} />
        </View>
      </View>
      <View className="w-1/2 mx-auto">
        <Button title="Add Friend" buttonStyle={{
            backgroundColor: "#A855F7",
            borderRadius: 30,
          }}/>
      </View>

      {/* Friends List */}
      <View className="mt-20 mx-8">
        <Text className="text-white text-xl font-bold" >Your Friends List! (0)</Text>
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default AddFriendScreen;
