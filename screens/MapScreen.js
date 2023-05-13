import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";

function MapScreen(props) {
  const Stack = createStackNavigator();
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
      <View style={styles.bottomHalf}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
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
