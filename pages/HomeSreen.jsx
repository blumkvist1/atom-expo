import React from "react";
import {
   Text,
   View,
   TextInput,
   TouchableOpacity,
   Button,
   ScrollView,
   ImageBackground,
} from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import History from "../components/History";
import CardEx from "../components/CardEx";
import { createStackNavigator } from "@react-navigation/stack";

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

export const ExcursionScreen = () => {
   return (
      <View style={{ backgroundColor: "orange" }}>
         <ScrollView>
            <View
               style={{
                  backgroundColor: "gray",
                  width: "100%",
                  height: vh(55),
               }}
            >
               <ImageBackground
                  style={{
                     flex: 1,
                  }}
                  width="100%"
                  height={vh(55)}
                  fadeDuration={500}
                  source={{
                     uri: "https://interier-foto.ru/wp-content/uploads/dlinnye-fotografii.jpg",
                  }}
               >
                  <View
                     style={{
                        width: vw(100),
                        height: vh(55),
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        paddingVertical: 40,
                        paddingHorizontal: 60,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                        flexDirection: "column",
                     }}
                  >
                     <Text
                        style={{
                           color: "white",
                           fontSize: 16,
                           fontWeight: "500",
                        }}
                     >
                        Концерт - Поп - 6+
                     </Text>
                     <Text
                        style={{
                           color: "white",
                           fontSize: 50,
                           fontWeight: "bold",
                           marginBottom: 15,
                        }}
                     >
                        Zivert
                     </Text>
                     <Text
                        style={{
                           color: "white",
                           fontSize: 16,
                           fontWeight: "500",
                        }}
                     >
                        Концерт в Казани - Казань Экспо
                     </Text>
                  </View>
               </ImageBackground>
            </View>
            <Text>Экскурсии</Text>
         </ScrollView>
      </View>
   );
};

const HomeSreen = ({ navigation }) => {
   return (
      <Root.Navigator
         screenOptions={{
            headerRight: () => (
               <Ionicons
                  onPress={() => navigation.openDrawer()}
                  color="#00cc00"
                  name="menu"
                  size={38}
                  style={{ marginRight: 10 }}
               />
            ),
         }}
      >
         <Root.Screen name="FirstScreen" component={FirstScreen} />
         <Root.Screen name="ExcursionScreen" component={ExcursionScreen} />
      </Root.Navigator>
   );
};

export default HomeSreen;
