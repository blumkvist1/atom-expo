import * as React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Card() {
   return (
      <View
         style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: 110,
            width: "96%",
            backgroundColor: "white",
            borderRadius: 10,
            elevation: 20,
            shadowColor: "#52006A",
            marginTop: 10,
            marginBottom: 15,
            marginLeft: 20,
         }}
      >
         <Image
            style={{
               width: 150,
               height: 110,
               resizeMode: "stretch",
               borderBottomLeftRadius: 10,
               borderTopLeftRadius: 10,
            }}
            source={{
               uri: "https://kuda-kazan.ru/uploads/335d618f1451af76a544069eefde8894.jpg",
            }}
         />
         <View style={{ marginLeft: 15, width: "63%" }}>
            <Text style={{ fontSize: 20, fontWeight: "800" }}>
               Название экскурсии!
            </Text>
            <Text style={{ fontSize: 18 }}>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
               perspiciatis fuga dolor nesciunt placeat repellendus id
               temporibus atque .
            </Text>
         </View>
         <View>
            <TouchableOpacity style={styles.container} onPress={() => {}}>
               <Text style={styles.text}>300 P</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "tomato",
      padding: 10,
      margin: 20,
      marginLeft: 40,
      width: "90%",
      borderRadius: 15,
      alignItems: "center",
   },
   text: {
      fontWeight: "bold",
      color: "white",
      fontSize: 16,
   },
});
