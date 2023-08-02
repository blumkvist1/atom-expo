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
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/Header";
import ExcursionList from "../components/ExcursionList";
import { BlurView } from "@react-native-community/blur";

export default function ExcursionsScreen() {
   const insets = useSafeAreaInsets();
   const [modalVisible, setModalVisible] = useState(false);
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
                        width: 750,
                        height: 36,
                     }}
                     resizeMode="contain"
                  ></Image>
               </TouchableOpacity>
               <TouchableOpacity>
                  <Image
                     source={require("../assets/Filter.png")}
                     style={{
                        width: 160,
                        height: 66,
                        left: 14,
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
                  fontSize: 20,
                  fontWeight: "700",
               }}
            >
               8 экскурсий для Вас уже готовы, ещё миллион на подходе*
            </Text>
            <ExcursionList setModalVisible={setModalVisible} />
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
                        resizeMode="contain"
                        style={styles.modalView}
                        // blurRadius={50}
                     >
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                           style={[styles.button, styles.buttonClose]}
                           onPress={() => setModalVisible(!modalVisible)}
                        >
                           <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
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
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000c",
   },
   modalView: {
      margin: 20,
      width: 950,
      height: 530,

      borderRadius: 30,
      padding: 35,
      alignItems: "flex-end",
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
      marginBottom: 15,
      textAlign: "center",
   },
});