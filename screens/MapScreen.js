import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Map from "../components/Map";

function MapScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Holla, I am the map screen</Text>
      <AntDesign
        onPress={() => navigation.goBack()}
        name="leftcircleo"
        size={25}
        style={styles.back}
      />

      <View style={styles.topHalf}>
        <Map />
      </View>
      <View style={styles.bottomHalf}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  bottomHalf: {
    height: "50%",
    width: "100%",
  },
  container: {
    flex: 1,
  },
  topHalf: {
    height: "50%",
    width: "100%",
  },
});

export default MapScreen;
