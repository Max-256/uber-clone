import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

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
              paddingTop: 20,
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  text: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "500",
  },
});

export default NavigateCard;
