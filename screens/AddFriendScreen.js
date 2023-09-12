import { View, Text, SafeAreaView, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";
import { Icon } from "@rneui/themed";
import FriendList from "../components/FriendList";
import { db, authInstance, addFriend } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const AddFriendScreen = () => {
  const [friendEmail, setFriendEmail] = useState("");

  //get the signed in users ID
  const signedInUser = authInstance.currentUser.uid;

  const addFriendByEmail = async () => {
    try {
      const usersCollection = collection(db, "users");
      const querySnapshot = await getDocs(usersCollection)

      const friendDoc = querySnapshot.docs.find((doc) => doc.data().email === friendEmail)

      if (friendDoc) {
        const friendUID = friendDoc.id

        await addFriend(signedInUser, friendUID);

        setFriendEmail("")
        //alert("Friend added successfully")
      }

    } catch (error) {
      console.error("Error adding friend", error)
    }
  };

  return (
    <KeyboardAvoidingView className="flex-1 bg-neutral-800 ">
      {/* Add Friend Form-  add by email */}
      <View className="flex-row justify-center items-center px-8 mt-10">
        <Icon name="search" color="white" size={30} />
        <View className=" w-full">
          <Input
            placeholder="Add Your Friend's Email!"
            inputStyle={{ color: "white" }}
            value={friendEmail}
            onChangeText={(text) => setFriendEmail(text)}
          />
        </View>
      </View>
      <View className="w-1/2 mx-auto">
        <Button
          title="Add Friend"
          buttonStyle={{
            backgroundColor: "#A855F7",
            borderRadius: 30,
          }}
          onPress={addFriendByEmail}
        />
      </View>

      {/* Friends List */}
      <View className="mt-20 mx-8">
        <Text className="text-white text-xl font-bold">
          Your Friends List! (0)
        </Text>
        {/* Friends list component */}
        <FriendList />
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default AddFriendScreen;
