import React, { useState } from "react";
import {
   Text,
   View,
   Pressable,
   TouchableOpacity,
   Modal,
   Image,
   ScrollView,
   ImageBackground,
   StyleSheet,
   Alert,
} from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import History from "../components/History";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import ExcursionsScreen from "./ExcursionsScreen";

const Root = createStackNavigator();

const HomePage = () => {
   const navigation = useNavigation();

   return (
      <SafeAreaView>
         <ScrollView style={{ display: "flex" }}>
            <View
               style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                  marginHorizontal: 11,
                  flex: 1,
               }}
            >
               <ScrollView horizontal style={{}}>
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
               </ScrollView>
               <TouchableOpacity
                  activeOpacity={0.96}
                  onPress={() => {
                     navigation.openDrawer();
                  }}
               >
                  <View
                     style={{
                        backgroundColor: "white",
                        width: 136,
                        height: 139,
                        margin: 10,
                        borderRadius: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        elevation: 10,
                        shadowColor: "#52006A",
                     }}
                  >
                     <Image
                        source={require("../assets/Menu.png")}
                        style={{ width: 60, height: 64 }}
                     />
                     <Text
                        style={{ marginTop: 7, fontSize: 20, color: "#009999" }}
                     >
                        Меню
                     </Text>
                  </View>
               </TouchableOpacity>
            </View>

            <View
               style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: 10,
               }}
            >
               <View
                  style={{
                     //backgroundColor: "orange",
                     width: "51%",
                     height: 330,
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "flex-start",
                  }}
               >
                  <View
                     style={{
                        height: 160,
                        width: "100%",
                     }}
                  >
                     <TouchableOpacity>
                        <ImageBackground
                           source={require("../assets/FreeRideBcg.png")}
                           style={{
                              width: "103%",
                              height: 160,
                              position: "relative",
                              paddingLeft: 30,
                              paddingTop: 12,
                           }}
                           resizeMode="stretch"
                        >
                           <View
                              style={{
                                 display: "flex",
                                 justifyContent: "space-between",
                                 alignItems: "space-between",
                                 flexDirection: "row",
                                 paddingRight: 25,
                              }}
                           >
                              <View
                                 style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                 }}
                              >
                                 <Text
                                    style={{
                                       color: "#3E3E3E",
                                       fontSize: 28,
                                       width: 220,
                                       fontWeight: "bold",
                                    }}
                                 >
                                    Свободный режим поездки
                                 </Text>
                                 <Text
                                    style={{
                                       fontSize: 16,
                                       width: 280,
                                       zIndex: 9,
                                       fontWeight: "bold",
                                       color: "gray",
                                    }}
                                 >
                                    Вы едете по своим делам, {"\n"}а мы
                                    расскажем об интересных местах на вашем пути
                                 </Text>
                              </View>
                              <Image
                                 style={{
                                    width: 110,
                                    height: 110,
                                 }}
                                 resizeMode="stretch"
                                 source={require("../assets/BlueMap.png")}
                              />
                           </View>
                        </ImageBackground>
                     </TouchableOpacity>
                  </View>
                  <View
                     style={{
                        height: 160,

                        width: "100%",
                     }}
                  >
                     <TouchableOpacity>
                        <ImageBackground
                           source={require("../assets/NightAziat.png")}
                           style={{
                              width: "103%",
                              height: 160,
                              position: "relative",
                              paddingLeft: 25,
                              paddingTop: 15,
                              display: "flex",
                              justifyContent: "flex-start",
                           }}
                           resizeMode="stretch"
                        >
                           <View
                              style={{
                                 display: "flex",
                                 justifyContent: "flex-start",
                                 alignItems: "flex-end",
                                 flexDirection: "column",
                                 paddingRight: 40,
                              }}
                           >
                              <Text
                                 style={{
                                    color: "white",
                                    fontSize: 30,
                                    width: 180,
                                    fontWeight: "bold",
                                    textAlign: "right",
                                 }}
                              >
                                 Ночной самурай
                              </Text>
                              <Text
                                 style={{
                                    fontSize: 20,
                                    width: 180,
                                    zIndex: 9,
                                    fontWeight: "bold",
                                    color: "#D6D6D6",
                                    textAlign: "right",
                                 }}
                              >
                                 У самурая есть только путь
                              </Text>
                           </View>
                        </ImageBackground>
                     </TouchableOpacity>
                  </View>
               </View>
               <TouchableOpacity
                  style={{ width: "50%" }}
                  onPress={() => {
                     navigation.push("ExcursionsScreen");
                  }}
               >
                  <View
                     style={{
                        width: "100%",
                        height: 330,
                        marginLeft: 10,
                     }}
                  >
                     <ImageBackground
                        source={require("../assets/BackGroundHomeCard.png")}
                        style={{
                           width: "100%",
                           height: 330,
                           position: "relative",
                           paddingLeft: 25,
                           paddingTop: 20,
                        }}
                     >
                        <Text
                           style={{
                              fontSize: 45,
                              width: 250,
                              zIndex: 9,
                              fontWeight: "bold",
                              color: "white",
                           }}
                        >
                           Откройте для себя город
                        </Text>
                        <Text
                           style={{
                              fontSize: 20,
                              width: 180,
                              zIndex: 9,
                              fontWeight: "bold",
                              color: "#D6D6D6",
                           }}
                        >
                           Туристические маршруты {"\n"}с AI-гидом
                        </Text>
                        <View
                           style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              paddingRight: 10,
                              height: 330,
                              left: 167.5,
                              position: "absolute",
                           }}
                        >
                           <Image
                              source={require("../assets/AtomSide1.png")}
                              style={{
                                 width: 270,
                                 height: "95%",
                                 top: 30,
                              }}
                              resizeMode="contain"
                           ></Image>
                        </View>
                     </ImageBackground>
                  </View>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};




const HomeSreen = ({ navigation }) => {
   return (
      <Root.Navigator>
         <Root.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
         />
         <Root.Screen
            name="ExcursionsScreen"
            component={ExcursionsScreen}
            options={{
               headerShown: false,
            }}
         />
      </Root.Navigator>
   );
};

export default HomeSreen;


