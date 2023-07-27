import React from "react";
import {
   Text,
   View,
   TextInput,
   TouchableOpacity,
   ScrollView,
} from "react-native";

import Card from "../components/Card";
import History from "../components/History";
import CardEx from "../components/CardEx";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Root = createStackNavigator();

const FirstScreen = () => {
   return (
      <ScrollView>
         <ScrollView
            horizontal
            style={{ backgroundColor: "orange", height: 150 }}
         >
            <View
               style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
               }}
            >
               <History />
               <History />
               <History />
               <History />
               <History />
               <History />
               <History />
               <History />
               <History />
               <History />
               <History />
            </View>
         </ScrollView>
         <Text>Популярные экскурсии</Text>
         <ScrollView
            horizontal
            style={{ backgroundColor: "orange", height: 240 }}
         >
            <View
               style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
               }}
            >
               <CardEx />
               <CardEx />
            </View>
         </ScrollView>
      </ScrollView>
   );
};

export const Screen3 = () => {
   return <Text>rgfnerjon</Text>;
};

const HomeSreen = () => {
   return (
      <Root.Navigator>
         <Root.Screen name="Screen1" component={FirstScreen} />
         <Root.Screen name="Screen3" component={Screen3} />
      </Root.Navigator>
   );
};

export default HomeSreen;
