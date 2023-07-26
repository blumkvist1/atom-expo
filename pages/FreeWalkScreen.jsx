import * as React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import MapView from "react-native-maps";

MapStyles = StyleSheet.create({
  map: {
    width: vw(100),
    height: vh(100),
  },
});

export default function FreeWalkScreen() {
  return (
    <View style={{ backgroundColor: "white" }}>
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
            width: "80%",
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
      <MapView
        style={MapStyles.map}
        initialRegion={{
          latitude: 55.78874,
          longitude: 49.12214,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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
