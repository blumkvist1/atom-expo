import React from "react";
import {
   Text,
   View,
   TouchableOpacity,
   Image,
   ScrollView,
   ImageBackground,
} from "react-native";

const ExcursionList = (params) => {
   setModalVisible = params.setModalVisible;
   return (
      <ScrollView horizontal style={{ paddingHorizontal: 10, paddingLeft: 30 }}>
         <View style={{ display: "flex", flexDirection: "column" }}>
            <View
               style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 30,
               }}
            >
               <TouchableOpacity
                  style={{
                     height: 210,
                     width: 450,
                     borderRadius: 30,
                  }}
                  onPress={() => setModalVisible(true)}
               >
                  <Image
                     source={require("../assets/Group33.png")}
                     style={{
                        width: "100%",
                        height: 240,
                        position: "relative",
                        paddingLeft: 25,
                        paddingTop: 15,
                        display: "flex",
                        justifyContent: "flex-start",
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
               <TouchableOpacity
                  style={{
                     height: 210,
                     width: 450,
                     borderRadius: 30,
                  }}
                  onPress={() => setModalVisible(true)}
               >
                  <Image
                     source={require("../assets/Group33.png")}
                     style={{
                        width: "100%",
                        height: 240,
                        position: "relative",
                        paddingLeft: 25,
                        paddingTop: 15,
                        display: "flex",
                        justifyContent: "flex-start",
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
               <TouchableOpacity
                  style={{
                     height: 210,
                     width: 450,
                     borderRadius: 30,
                  }}
                  onPress={() => setModalVisible(true)}
               >
                  <Image
                     source={require("../assets/Group33.png")}
                     style={{
                        width: "100%",
                        height: 240,
                        position: "relative",
                        paddingLeft: 25,
                        paddingTop: 15,
                        display: "flex",
                        justifyContent: "flex-start",
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
               <TouchableOpacity
                  style={{
                     height: 210,
                     width: 450,
                     borderRadius: 30,
                  }}
                  onPress={() => setModalVisible(true)}
               >
                  <Image
                     source={require("../assets/Group33.png")}
                     style={{
                        width: "100%",
                        height: 240,
                        position: "relative",
                        paddingLeft: 25,
                        paddingTop: 15,
                        display: "flex",
                        justifyContent: "flex-start",
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
               <TouchableOpacity
                  style={{
                     height: 240,
                     width: 450,
                     borderRadius: 30,
                  }}
                  onPress={() => setModalVisible(true)}
               >
                  <Image
                     source={require("../assets/Group33.png")}
                     style={{
                        width: "100%",
                        height: 220,
                        position: "relative",
                        paddingLeft: 25,
                        display: "flex",
                        justifyContent: "flex-start",
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
               <TouchableOpacity
                  style={{
                     height: 240,
                     width: 450,
                     borderRadius: 30,
                  }}
                  onPress={() => setModalVisible(true)}
               >
                  <Image
                     source={require("../assets/Group33.png")}
                     style={{
                        width: "100%",
                        height: 220,
                        position: "relative",
                        paddingLeft: 25,
                        display: "flex",
                        justifyContent: "flex-start",
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
               <TouchableOpacity
                  style={{
                     height: 240,
                     width: 450,
                     borderRadius: 30,
                  }}
                  onPress={() => setModalVisible(true)}
               >
                  <Image
                     source={require("../assets/Group33.png")}
                     style={{
                        width: "100%",
                        height: 220,
                        position: "relative",
                        paddingLeft: 25,
                        display: "flex",
                        justifyContent: "flex-start",
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
               <TouchableOpacity
                  style={{
                     height: 240,
                     width: 450,
                     borderRadius: 30,
                  }}
                  onPress={() => setModalVisible(true)}
               >
                  <Image
                     source={require("../assets/Group33.png")}
                     style={{
                        width: "100%",
                        height: 220,
                        position: "relative",
                        paddingLeft: 25,
                        display: "flex",
                        justifyContent: "flex-start",
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
   );
};

export default ExcursionList;
