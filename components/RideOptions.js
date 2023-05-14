import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { selectTravelTimeInformation } from "../slices/navSlice";

const SURGE_CHARGE_RATE = 1.5;

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

function RideOptions(props) {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.back}
          name="chevron-back-circle-outline"
          size={30}
        />

        <Text style={styles.selectRide}>
          Select a ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[
              styles.rideContainer,
              item === selected ? styles.highlight : "",
            ]}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel time </Text>
            </View>
            <Text style={styles.price}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={!selected}
          style={[
            styles.footer,
            !selected ? { backgroundColor: "lightgray" } : {},
          ]}
        >
          <Text style={styles.footerText}>Choose {selected?.title}</Text>
        </TouchableOpacity>
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
    paddingBottom: 20,
  },
  footer: {
    backgroundColor: "black",
    margin: 5,
    paddingVertical: 5,
  },
  footerText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
  image: {
    width: 65,
    height: 65,
    resizeMode: "contain",
  },
  rideContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
  },
  selectRide: {
    textAlign: "center",
    paddingVertical: 13,
    fontSize: 20,
    verticalAlign: "middle",
  },
  highlight: {
    backgroundColor: "lightgray",
  },
  title: {
    fontWeight: "700",
    fontSize: 15,
  },
});

export default RideOptions;
