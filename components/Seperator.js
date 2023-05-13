import React from "react";
import { View, StyleSheet } from "react-native";

function Seperator(props) {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 0.7,
    width: "100%",
    backgroundColor: "lightgray",
  },
});

export default Seperator;
