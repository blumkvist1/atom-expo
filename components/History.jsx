import React from "react";
import { TouchableOpacity } from "react-native";
import { Touchable } from "react-native";
let BlueAtom1 = require("../assets/BlueAtom1.png");
import { ImageBackground } from "react-native";
import { View, Image, Text } from "react-native";

const History = () => {
   return (
      <TouchableOpacity>
         <View
            style={{
               backgroundColor: "white",
               width: 136,
               height: 139,
               margin: 10,
               borderRadius: 10,
               borderWidth: 2,
               borderColor: "gray",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <View
               style={{
                  backgroundColor: "gray",
                  width: 125,
                  height: 128.41,
                  borderRadius: 10,

                  position: "relative",
               }}
            >
               <Image
                  style={{
                     position: "absolute",
                     bottom: 5,
                     left: 5,
                     width: 110,
                     height: 73,
                  }}
                  source={BlueAtom1}
               />
               <Text
                  style={{
                     fontFamily: "Inter",
                     fontSize: 18,
                     fontWeight: "bold",
                     marginTop: 12,
                     marginLeft: 10,
                     width: 116,
                     height: 129,
                     zIndex: 9,
                     color: "white",
                  }}
               >
                  ОТ КРЕМЛЯ И ОБРАТНО
               </Text>
            </View>
         </View>
      </TouchableOpacity>
   );
};

export default History;
