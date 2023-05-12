import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

function NavOptions(props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.navContainer}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={styles.text}>{item.title}</Text>
            <AntDesign style={styles.icon} name="arrowright" size={17} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  navContainer: {
    backgroundColor: "lightgray",
    padding: 8,
    paddingBottom: 20,
    marginHorizontal: 5,
  },
  icon: {
    alignSelf: "flex-start",
    borderRadius: 15,
    backgroundColor: "black",
    color: "white",
    height: 25,
    marginTop: 10,
    paddingTop: 3,
    textAlign: "center",
    width: 25,
  },
  text: {
    marginTop: 2,
    fontSize: 17,
    fontWeight: 500,
  },
});

export default NavOptions;