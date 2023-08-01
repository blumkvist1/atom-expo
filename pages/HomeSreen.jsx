import React, {useState} from "react";
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
import CardEx from "../components/CardEx";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   SafeAreaProvider,
   useSafeAreaInsets,
} from "react-native-safe-area-context";

const Root = createStackNavigator();

const FirstScreen = () => {
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
                        borderRadius: 33,
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
                     width: "50%",
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
                           source={require("../assets/KeyBcg.png")}
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
                                       color: "white",
                                       fontSize: 28,
                                       width: 180,
                                       fontWeight: "bold",
                                    }}
                                 >
                                    Ключевые точки
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
                                    Режим{"\n"}самостоятельного изучения
                                    достопримечательностей
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
                        marginLeft: 20,
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

                                 //backgroundColor: "white",
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

export const Header = () => {
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
         }}
      >
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
               source={require("../assets/BackArrow.png")}
               style={{
                  width: 160,
                  height: 80,
               }}
               resizeMode="stretch"
               onPress={() => navigation.goBack()}
            ></Image>
         </TouchableOpacity>
         <Image
            source={require("../assets/ExHeader.png")}
            style={{
               width: 600,
               height: 80,
            }}
            resizeMode="contain"
         ></Image>
         <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
               source={require("../assets/MenuEx.png")}
               style={{
                  width: 160,
                  height: 80,
               }}
               resizeMode="stretch"
               onPress={() => navigation.openDrawer()}
            ></Image>
         </TouchableOpacity>
      </View>
   );
};

export const ExcursionsScreen = () => {
   const insets = useSafeAreaInsets();
	const [modalVisible, setModalVisible] = useState(false);
   return (
      <View
         style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#009999",

            // Paddings to handle safe area
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
         }}
      >
         <Header />
         <View
            style={{
               padding: 10,
               width: "100%",
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               flexDirection: "row",
            }}
         >
            <TouchableOpacity>
               <Image
                  source={require("../assets/SearchField.png")}
                  style={{
                     width: 770,
                     height: 36,
                  }}
                  resizeMode="contain"
               ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
               <Image
                  source={require("../assets/Filter.png")}
                  style={{
                     width: 150,
                     height: 36,
                  }}
                  resizeMode="contain"
               ></Image>
            </TouchableOpacity>
         </View>
         <ScrollView horizontal style={{ paddingHorizontal: 10 }}>
            <View style={{ display: "flex", flexDirection: "column" }}>
               <View
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     marginBottom: 15,
                  }}
               >
                  <TouchableOpacity
                     style={{
                        height: 173,
                        marginRight: 20,
                        width: 350,
                        backgroundColor: "white",
                        borderRadius: 30,
                     }}
                     onPress={() => setModalVisible(true)}
                  />
                  <View
                     style={{
                        height: 173,
                        marginRight: 20,
                        width: 350,
                        backgroundColor: "white",
                        borderRadius: 30,
                     }}
                  />
                  <View
                     style={{
                        height: 173,
                        marginRight: 20,
                        width: 350,
                        backgroundColor: "white",
                        borderRadius: 30,
                     }}
                  />
                  <View
                     style={{
                        height: 173,
                        marginRight: 20,
                        width: 350,
                        backgroundColor: "white",
                        borderRadius: 30,
                     }}
                  />
               </View>
               <View style={{ display: "flex", flexDirection: "row" }}>
                  <View
                     style={{
                        height: 173,
                        marginRight: 20,
                        width: 350,
                        backgroundColor: "white",
                        borderRadius: 30,
                     }}
                  />
                  <View
                     style={{
                        height: 173,
                        marginRight: 20,
                        width: 350,
                        backgroundColor: "white",
                        borderRadius: 30,
                     }}
                  />
                  <View
                     style={{
                        height: 173,
                        marginRight: 20,
                        width: 350,
                        backgroundColor: "white",
                        borderRadius: 30,
                     }}
                  />
                  <View
                     style={{
                        height: 173,
                        marginRight: 20,
                        width: 350,
                        backgroundColor: "white",
                        borderRadius: 30,
                     }}
                  />
               </View>
            </View>
         </ScrollView>
         <View style={styles.centeredView}>
            <Modal
               animationType="fade"
               transparent={true}
               visible={modalVisible}
               onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
               }}
					
            >
               <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                     <Text style={styles.modalText}>Hello World!</Text>
                     <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                     >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                     </Pressable>
                  </View>
               </View>
            </Modal>
         </View>
      </View>
   );
};

const HomeSreen = ({ navigation }) => {
   return (
      <Root.Navigator
      // screenOptions={{
      //    headerRight: () => (
      //       <Ionicons
      //          onPress={() => navigation.openDrawer()}
      //          color="#00cc00"
      //          name="menu"
      //          size={38}
      //          style={{ marginRight: 10 }}
      //       />
      //    ),
      // }}
      >
         <Root.Screen
            name="FirstScreen"
            component={FirstScreen}
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

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
		backgroundColor:"#000000c"
   },
   modalView: {
      margin: 20,
		width:890,
		height:490,
      backgroundColor: "white",
      borderRadius: 30,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
   },
   button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
   },
   buttonOpen: {
      backgroundColor: "#F194FF",
   },
   buttonClose: {
      backgroundColor: "#2196F3",
   },
   textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
   },
   modalText: {
      marginBottom: 15,
      textAlign: "center",
   },
});

