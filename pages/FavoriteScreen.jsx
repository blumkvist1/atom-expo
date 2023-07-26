import * as React from "react";
import { Text, ScrollView, View } from "react-native";
import Card from "./../components/Card";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30,
      }}
    >
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

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30,
      }}
    >
      <ScrollView
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

export default function FavoriteScreen() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: { backgroundColor: "tomato" },
      }}
    >
      <TopTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Мои экскурсии" }}
      />
      <TopTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: "Мои места" }}
      />
    </TopTab.Navigator>
  );
}

