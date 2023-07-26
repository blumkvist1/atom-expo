import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExcursionsScreen from "./pages/ExcursionsScreen";
import FavoriteScreen from "./pages/FavoriteScreen";
import FreeWalkScreen from "./pages/FreeWalkScreen";
import ProfileScreen from "./pages/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Tab.Navigator
            initialRouteName="Профиль"
            screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Экскурсии") {
                     iconName = focused ? "home" : "home-outline";
                  } else if (route.name === "Избранное") {
                     iconName = focused ? "book" : "book-outline";
                  } else if (route.name === "Карта") {
                     iconName = focused ? "earth" : "earth-outline";
                  } else {
                     iconName = focused ? "person" : "person-outline";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
               },
               tabBarActiveTintColor: "tomato",
               tabBarInactiveTintColor: "gray",
            })}
         >
            <Tab.Screen name="Карта" component={FreeWalkScreen} />
            <Tab.Screen name="Экскурсии" component={ExcursionsScreen} />
            <Tab.Screen name="Избранное" component={FavoriteScreen} />
            <Tab.Screen name="Профиль" component={ProfileScreen} />
         </Tab.Navigator>
      </NavigationContainer>
   );
}
