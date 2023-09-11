import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import AddFriendScreen from "./screens/AddFriendScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const globalScreenOptions = {
    headerStyle: { backgroundColor: "#262626" },
    headerTintColor: "white",
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Add Friend" component={AddFriendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
