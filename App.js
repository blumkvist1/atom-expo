import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import HomeSreen from "./pages/HomeSreen";
import ProfileScreen from "./pages/ProfileScreen";
const Drawer = createDrawerNavigator();

export default function App() {
   const dimensions = useWindowDimensions();
   // const navigation = useNavigation();

   return (
      <NavigationContainer>
         <Drawer.Navigator
            useLegacyImplementation
            screenOptions={{
               drawerStyle: {
                  width: 240,
               },
               drawerPosition: "right",
            }}
         >
            <Drawer.Screen
               name="Главная"
               component={HomeSreen}
               options={{ headerShown: false }}
            />
            <Drawer.Screen
               name="Профиль"
               options={{ headerShown: false }}
               component={ProfileScreen}
            />
         </Drawer.Navigator>
      </NavigationContainer>
   );
}
