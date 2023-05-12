import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function MapScreen(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Holla, I am the map screen</Text>
      <AntDesign
        onPress={() => navigation.goBack()}
        name="leftcircleo"
        size={25}
        style={styles.back}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
