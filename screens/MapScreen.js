import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";

function MapScreen(props) {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        onPress={() => navigation.goBack()}
        name="menu"
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
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
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
    left: 20,
    zIndex: 1,
    width: 36,
    height: 36,
    backgroundColor: "white",
    borderRadius: 18,
    textAlign: "center",
    verticalAlign: "middle",
    padding: 2,
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
