import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import NavOptions from "../components/NavOptions";

function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where from"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default HomeScreen;
