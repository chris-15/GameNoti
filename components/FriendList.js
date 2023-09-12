import { View, Text } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";

const FriendList = ({ userID }) => {
  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default FriendList;
