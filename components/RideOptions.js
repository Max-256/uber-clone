import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function RideOptions(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.back}
          name="chevron-back-circle-outline"
          size={30}
        />

        <Text style={styles.selectRide}>Select a ride</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    top: 10,
    left: 15,
    zIndex: 1,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  selectRide: {
    textAlign: "center",
    paddingVertical: 13,
    fontSize: 20,
    verticalAlign: "middle",
  },
});

export default RideOptions;
