import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {

   return (
      <View style={styles.container}>
         <MapView
            style={styles.map}
            initialRegion={{
               latitude: 55.793157312756335,
               longitude: 49.11843522787157,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
            }}
            customMapStyle={styles.customMapStyle}
         />
      </View>
   );
};

export default Map;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      borderRadius: 10,
      width: "90%",
      height: "100%",
   },
   map: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
   },
   customMapStyle: [
      {
         featureType: "administrative.land_parcel",
         elementType: "labels",
         stylers: [
            {
               visibility: "off",
            },
         ],
      },
      {
         featureType: "poi",
         elementType: "labels.text",
         stylers: [
            {
               visibility: "off",
            },
         ],
      },
      {
         featureType: "poi.business",
         stylers: [
            {
               visibility: "off",
            },
         ],
      },
      {
         featureType: "poi.park",
         elementType: "labels.text",
         stylers: [
            {
               visibility: "off",
            },
         ],
      },
      {
         featureType: "road.local",
         elementType: "labels",
         stylers: [
            {
               visibility: "off",
            },
         ],
      },
   ],
});
