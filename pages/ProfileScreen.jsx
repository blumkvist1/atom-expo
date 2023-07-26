import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProfileScreen() {
  return (
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
          //   backgroundColor: "green",
          padding: 20,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            width: "50%",
            //   backgroundColor: "green",
            padding: 20,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 220,
              height: 240,
              elevation: 20,
              shadowColor: "#52006A",
            }}
          >
            <Image
              style={{
                width: 220,
                height: 240,
                //   resizeMode: "stretch",
                borderRadius: 10,
              }}
              source={{
                uri: "https://www.tadviser.ru/images/thumb/4/47/Screjkluioenshot_2.png/840px-Screjkluioenshot_2.png",
              }}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 5 }}>
              Фамилия
            </Text>
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                paddingLeft: 10,
                width: 220,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
                marginBottom: 15,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>Иванов</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 5 }}>
              Имя
            </Text>
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                paddingLeft: 10,
                width: 220,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
                marginBottom: 15,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>Иван</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 5 }}>
              Отчество
            </Text>
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                paddingLeft: 10,
                width: 220,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
                marginBottom: 15,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>Иванович</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            paddingLeft: 0,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "row",
            marginLeft: 20,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Настройки</Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 470,
              height: 60,
              marginTop: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "black",
              paddingHorizontal: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Настройки 1</Text>
            <Ionicons name="chevron-forward-outline" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 470,
              height: 60,
              marginTop: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "black",
              paddingHorizontal: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Настройки 1</Text>
            <Ionicons name="chevron-forward-outline" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 470,
              height: 60,
              marginTop: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "black",
              paddingHorizontal: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Настройки 1</Text>
            <Ionicons name="chevron-forward-outline" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ width: "50%", padding: 20, marginTop: 20, marginLeft: 20 }}
      >
        <View
          style={{
            // backgroundColor: "blue",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            width: 460,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 5 }}>
            Интересы
          </Text>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              width: 460,
              flexWrap: "wrap",
              alignContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                marginRight: 10,
                marginBottom: 10,

                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
              }}
            >
              <Text style={{ fontSize: 18 }}>Музей</Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 10,
                marginBottom: 10,

                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
              }}
            >
              <Text style={{ fontSize: 18 }}>История</Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 10,
                marginBottom: 10,

                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
              }}
            >
              <Text style={{ fontSize: 18 }}>Природа</Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 10,
                marginBottom: 10,

                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
              }}
            >
              <Text style={{ fontSize: 18 }}>Еда</Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 10,
                marginBottom: 10,

                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
              }}
            >
              <Text style={{ fontSize: 18 }}>Архитектура</Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 10,
                marginBottom: 10,

                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
              }}
            >
              <Text style={{ fontSize: 18 }}>Театр</Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 10,
                marginBottom: 10,

                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
              }}
            >
              <Text style={{ fontSize: 18 }}>Парки</Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 10,
                marginBottom: 10,

                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                borderColor: "gray",
                elevation: 20,
                shadowColor: "#52006A",
              }}
            >
              <Text style={{ fontSize: 18 }}>Достопримечательности</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
