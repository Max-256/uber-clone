import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import NavFavorites from "./NavFavorites";

function NavigateCard(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.fullContainer}>
      <Text style={styles.text}>Good day, Maxwell</Text>
      <View>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              backgroundColor: "white",
              paddingTop: 10,
              flex: 0,
            },
            textInput: {
              backgroundColor: "#DDDDDF",
              borderRadius: 5,
              fontSize: 18,
            },
            textInputContainer: {
              paddingHorizontal: 15,
              paddingBottom: 0,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );

            navigation.navigate("RideOptions");
          }}
          minLength={2}
          placeholder="Where to?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={"search"}
        />
      </View>
      <NavFavorites />
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptions")}
          style={styles.icon}
        >
          <MaterialCommunityIcons color="white" name="car" size={25} />
          <Text style={styles.iconText}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.eatsIcon}>
          <MaterialCommunityIcons color="black" name="food-outline" size={25} />
          <Text>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  eatsIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 85,
    height: 30,
    backgroundColor: "lightgray",
    borderRadius: 30,
    paddingBottom: 5,
    paddingTop: 2,
  },
  fullContainer: {
    backgroundColor: "#fff",
    flex: 1,
    paddingBottom: 30,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 85,
    height: 30,
    backgroundColor: "black",
    borderRadius: 30,
    paddingBottom: 5,
    paddingTop: 2,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconText: {
    color: "white",
  },
  text: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "500",
  },
});

export default NavigateCard;
