import React from "react";
import { Text } from "react-native";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Seperator from "./Seperator";

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

function NavFavorites(props) {
  return (
    <FlatList
      ItemSeparatorComponent={Seperator}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container}>
          <MaterialCommunityIcons
            style={styles.icon}
            name={item.icon}
            size={18}
            color="#fff"
          />
          <View style={styles.details}>
            <Text style={styles.home}>{item.location}</Text>
            <Text style={styles.destination}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  details: {
    justifyContent: "center",
  },
  destination: {
    color: "gray",
    fontWeight: "500",
  },
  home: {
    fontWeight: "700",
    fontSize: 17,
  },
  icon: {
    backgroundColor: "lightgray",
    textAlign: "center",
    verticalAlign: "middle",
    width: 36,
    height: 36,
    margin: 15,
    borderRadius: 18,
  },
});

export default NavFavorites;
