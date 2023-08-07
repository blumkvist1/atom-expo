import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, TouchableOpacity, Image } from "react-native";

const Header = () => {
   const navigation = useNavigation();
   return (
      <View
         style={{
            marginTop: 10,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 10,
         }}
      >
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
               source={require("../assets/BackArrow.png")}
               style={{
                  width: 170,
                  height: 70,
               }}
               //resizeMode="contain"
               onPress={() => navigation.goBack()}
            ></Image>
         </TouchableOpacity>
         <Image
            source={require("../assets/ExHeader.png")}
            style={{
               width: 660,
               height: 70,
            }}
            //resizeMode="contain"
         ></Image>
         <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
               source={require("../assets/MenuEx.png")}
               style={{
                  width: 170,
                  height: 70,
               }}
               //resizeMode="stretch"
               onPress={() => navigation.openDrawer()}
            ></Image>
         </TouchableOpacity>
      </View>
   );
};

export default Header;
