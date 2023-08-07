import React, { useState } from "react";
import {
   Text,
   View,
   Pressable,
   TouchableOpacity,
   Modal,
   Image,
   ImageBackground,
   StyleSheet,
   Alert,
   ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/Header";
import ExcursionList from "../components/ExcursionList";
import Map from "../components/Map";
import data from "../data";

export default function ExcursionsScreen() {
   const insets = useSafeAreaInsets();
   const [modalVisible, setModalVisible] = useState(false);
   const [id, setId] = useState(0);

   return (
      <ImageBackground
         source={require("../assets/BCGEx.png")}
         style={{
            width: "100%",
            height: "100%",
            position: "relative",
         }}
      >
         <View
            style={{
               flex: 1,
               justifyContent: "flex-start",
               alignItems: "center",

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
                  paddingHorizontal: 25,

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
                        width: 930,
                        height: 36,
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
               <TouchableOpacity>
                  <Image
                     source={require("../assets/Filter.png")}
                     style={{
                        width: 600,
                        height: 76,
                        // left: 18,
                        right: 80,
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
            </View>
            <Text
               style={{
                  color: "#E6E6E6",
                  paddingBottom: 5,
                  top: -7,
                  fontSize: 22,
                  fontWeight: "700",
               }}
            >
               8 экскурсий для Вас уже готовы, ещё миллион на подходе*
            </Text>
            <ExcursionList setModalVisible={setModalVisible} setId={setId} />
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
                     <ImageBackground
                        source={require("../assets/BcgImModal.png")}
                        resizeMode="stretch"
                        style={styles.modalView}
                        // blurRadius={50}
                     >
                        <View
                           style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              flexDirection: "row",
                              marginBottom: 10,
                           }}
                        >
                           <Text style={styles.modalText}>
                              Экскурсия: “От Кремля до Маркса”
                           </Text>
                           <View
                              style={{
                                 display: "flex",
                                 width: 120,
                                 justifyContent: "space-between",
                                 alignItems: "center",
                                 flexDirection: "row",
                              }}
                           >
                              <TouchableOpacity>
                                 <Image
                                    source={require("../assets/Star.png")}
                                    style={styles.closeButton}
                                    resizeMode="contain"
                                 ></Image>
                              </TouchableOpacity>
                              <TouchableOpacity
                                 onPress={() => setModalVisible(!modalVisible)}
                              >
                                 <Image
                                    source={require("../assets/Close.png")}
                                    style={styles.closeButton}
                                    resizeMode="contain"
                                 ></Image>
                              </TouchableOpacity>
                           </View>
                        </View>
                        <View
                           style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              flexDirection: "row",
                           }}
                        >
                           <View
                              style={{
                                 width: "50%",
                                 display: "flex",
                                 justifyContent: "flex-start",
                              }}
                           >
                              <Image
                                 source={require("../assets/Frame371.png")}
                              ></Image>
                           </View>
                           <View
                              style={{
                                 width: "50%",
                                 justifyContent: "flex-start",
                              }}
                           >
                              <Image
                                 source={require("../assets/Frame362.png")}
                              ></Image>
                           </View>
                        </View>
                        {/* линия */}
                        <View
                           style={{
                              borderBottomColor: "#E6E6E6",
                              borderBottomWidth: 1,
                              width: "100%",
                              marginTop: 5,
                              marginBottom: 10,
                           }}
                        />
                        {/* линия */}

                        <View
                           style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                              flexDirection: "row",
                           }}
                        >
                           <View
                              style={{
                                 width: "50%",
                                 display: "flex",
                                 justifyContent: "flex-start",
                              }}
                           >
										{/* <Map/> */}
                              <Image
                                 source={require("../assets/Map2.png")}
                              ></Image>
                           </View>
                           <View
                              style={{
                                 width: "50%",
                                 // backgroundColor: "#fff",
                                 height: "72.6%",
                                 display: "flex",
                                 justifyContent: "space-between",
                                 alignItems: "flex-start",
                              }}
                           >
                              <View
                                 style={{
                                    borderWidth: 1,
                                    height: 153,
                                    borderColor: "white",
                                    width: "100%",
                                    borderRadius: 10,
                                 }}
                              >
                                 <View
                                    style={{
                                       display: "flex",
                                       justifyContent: "space-between",
                                       flexDirection: "row",
                                    }}
                                 >
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          fontWeight: "700",
                                          marginLeft: 10,
                                          marginTop: 5,
                                          color: "white",
                                       }}
                                    >
                                       Описание:
                                    </Text>
                                    <View
                                       style={{
                                          flexDirection: "row",
                                          alignItems: "center",
                                          marginRight: 10,
                                       }}
                                    >
                                       <Text
                                          style={{
                                             fontSize: 21,
                                             fontWeight: "400",
                                             marginRight: 10,
                                             marginTop: 5,
                                             color: "white",
                                          }}
                                       >
                                          Скрыть
                                       </Text>
                                       <Image
                                          style={{ top: 3 }}
                                          source={require("../assets/Hide1.png")}
                                       ></Image>
                                    </View>
                                 </View>
                                 <View
                                    style={{
                                       borderBottomColor: "#E6E6E6",
                                       borderBottomWidth: 1,
                                       width: "100%",
                                       marginTop: 5,
                                       marginBottom: 10,
                                    }}
                                 />
                                 <Text
                                    style={{
                                       fontSize: 24,
                                       marginLeft: 10,
                                       paddingRight: 10,
                                       color: "white",
                                    }}
                                 >
                                    От Казанского Кремля до Площади Свободы вы
                                    проедете по историческим улицам города, где
                                    увидите множество интересных зданий и
                                    памятников.
                                 </Text>
                              </View>
                              <View
                                 style={{
                                    borderWidth: 1,
                                    height: 243,
                                    borderColor: "white",
                                    width: "100%",
                                    marginTop: 15,
                                    marginBottom: 15,

                                    borderRadius: 10,
                                    // borderBottomWidth: 0,
                                    // borderBottomLeftRadius: 0,
                                    // borderBottomRightRadius: 0,
                                 }}
                              >
                                 <View
                                    style={{
                                       display: "flex",
                                       justifyContent: "space-between",
                                       flexDirection: "row",
                                    }}
                                 >
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          fontWeight: "700",
                                          marginLeft: 10,
                                          marginTop: 5,
                                          color: "white",
                                       }}
                                    >
                                       Список локаций по маршруту
                                    </Text>
                                    <View
                                       style={{
                                          flexDirection: "row",
                                          alignItems: "center",
                                          marginRight: 10,
                                       }}
                                    >
                                       <Text
                                          style={{
                                             fontSize: 21,
                                             fontWeight: "400",
                                             marginRight: 10,
                                             marginTop: 5,
                                             color: "white",
                                          }}
                                       >
                                          Скрыть
                                       </Text>
                                       <Image
                                          style={{ top: 3 }}
                                          source={require("../assets/Hide1.png")}
                                       ></Image>
                                    </View>
                                 </View>
                                 <View
                                    style={{
                                       borderBottomColor: "#E6E6E6",
                                       borderBottomWidth: 1,
                                       width: "100%",
                                       marginTop: 5,

                                       marginBottom: 10,
                                    }}
                                 />

                                 <ScrollView>
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          marginLeft: 10,
                                          paddingRight: 10,
                                          color: "white",
                                       }}
                                    >
                                       1. Казанский Кремль (начало маршрута:
                                       остановка Улица Батурина)
                                    </Text>
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          marginLeft: 10,
                                          paddingRight: 10,
                                          color: "white",
                                       }}
                                    >
                                       2. Низменная часть города 19 века
                                    </Text>
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          marginLeft: 10,
                                          paddingRight: 10,
                                          color: "white",
                                       }}
                                    >
                                       3. Вокзал
                                    </Text>
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          marginLeft: 10,
                                          paddingRight: 10,
                                          color: "white",
                                       }}
                                    >
                                       4. Портовая часть города
                                    </Text>
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          marginLeft: 10,
                                          paddingRight: 10,
                                          color: "white",
                                       }}
                                    >
                                       5. Театр им. Г. Камала
                                    </Text>
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          marginLeft: 10,
                                          paddingRight: 10,
                                          color: "white",
                                       }}
                                    >
                                       6. Площадь Г. Тукая
                                    </Text>
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          marginLeft: 10,
                                          paddingRight: 10,
                                          color: "white",
                                       }}
                                    >
                                       7. Театр Оперы и Балета
                                    </Text>
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          marginLeft: 10,
                                          paddingRight: 10,
                                          color: "white",
                                       }}
                                    >
                                       8. Площадь Свободы (К. Маркса)
                                    </Text>
                                    <Text
                                       style={{
                                          fontSize: 24,
                                          marginLeft: 10,
                                          paddingRight: 10,
                                          color: "white",
                                       }}
                                    >
                                       9. Дворец Земледельцев
                                    </Text>
                                 </ScrollView>
                              </View>
                              <View
                                 style={{
                                    flexDirection: "row",
                                    width: "100%",
                                    justifyContent: "space-between",
                                 }}
                              >
                                 <Pressable
                                    onPress={() => {}}
                                    style={{
                                       backgroundColor: "#ffffff",
                                       width: 370,
                                       height: 45,
                                       justifyContent: "center",
                                       alignItems: "center",
                                       borderRadius: 10,
                                    }}
                                 >
                                    <Text
                                       style={{
                                          fontSize: 30,
                                          fontWeight: "bold",
                                          color: "#00B2CB",
                                       }}
                                    >
                                       Поехали!
                                    </Text>
                                 </Pressable>
                                 <Pressable
                                    onPress={() => {}}
                                    style={{
                                       width: 190,
                                       height: 45,
                                       justifyContent: "center",
                                       alignItems: "center",
                                       borderRadius: 10,
                                       borderColor: "#E6E6E6",
                                       borderWidth: 1,
                                    }}
                                 >
                                    <View
                                       style={{
                                          justifyContent: "center",
                                          alignItems: "center",
                                          flexDirection: "row",
                                       }}
                                    >
                                       <Text
                                          style={{
                                             fontSize: 16,
                                             fontWeight: "bold",
                                             color: "#D9D9D9",
                                             width: 110,
                                          }}
                                       >
                                          Следующая экскурсия
                                       </Text>
                                       <Image
                                          source={require("../assets/Next.png")}
                                       ></Image>
                                    </View>
                                 </Pressable>
                              </View>
                           </View>
                        </View>
                     </ImageBackground>
                  </View>
               </Modal>
            </View>
         </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#000000c",
   },
   modalView: {
      margin: 10,
      width: 1270,
      height: 670,

      borderRadius: 30,
      padding: 50,
      alignItems: "center",
      justifyContent: "flex-start",
      // shadowColor: "#000",
      // shadowOffset: {
      //    width: 0,
      //    height: 2,
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 4,
      // elevation: 5,
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
      color: "white",
      fontSize: 36,
      textAlign: "center",
      fontWeight: "bold",
   },
});
