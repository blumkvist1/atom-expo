import * as React from "react";
import {View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

function Profile() {
   return (
      <View
         style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row",
         }}
      >
      </View>
   );
}

export default function ProfileScreen({ navigation }) {
   return (
      <ProfileStack.Navigator
         screenOptions={{
            headerRight: () => (
               <Ionicons
                  onPress={() => navigation.openDrawer()}
                  color="black"
                  name="menu"
                  size={38}
                  style={{ marginRight: 10 }}
               />
            ),
         }}
      >
         <ProfileStack.Screen
            name="Профиль"
            component={Profile}
            options={{ tabBarLabel: "Settings!" }}
         />
      </ProfileStack.Navigator>
   );
}
