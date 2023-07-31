import React from "react";
import { Touchable, TouchableOpacity, View } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import { useNavigation, useRoute } from "@react-navigation/native";

const CardEx = () => {
   const navigation = useNavigation();
   const route = useRoute();
   console.log(route);
   return (
      <TouchableOpacity
         activeOpacity={0.8}
         onPress={() => {
            navigation.push("ExcursionScreen");
         }}
      >
         <View
            style={{
               backgroundColor: "green",
               width: vw(95),
               height: 230,
               margin: 5,
            }}
         ></View>
      </TouchableOpacity>
   );
};

export default CardEx;
