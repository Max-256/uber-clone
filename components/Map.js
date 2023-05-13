import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";

import { selectDestination, selectOrigin } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";

function Map(props) {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <MapView
      style={styles.map}
      mapType="standard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;
