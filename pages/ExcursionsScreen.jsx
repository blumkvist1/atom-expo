import * as React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Card from "./../components/Card";

export default function ExcursionsScreen() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30,
      }}
    >
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
            margin: 10,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "gray",
            width: "90%",
          }}
        >
          <TextInput
            placeholder="Введите название места"
            style={{ padding: 5, paddingLeft: 8 }}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.container} onPress={() => {}}>
          <Text style={styles.text}>Поиск</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "tomato",
      padding: 10,
      marginHorizontal: 20,
      width: 120,
      borderRadius: 15,
      alignItems: "center",
    },
    text: {
      fontWeight: "bold",
      color: "white",
      fontSize: 16,
    },
  });
  