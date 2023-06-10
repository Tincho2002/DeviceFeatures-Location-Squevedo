/*import { View, Text } from "react-native";

import { styles } from "./styles";

const PlaceDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Place Detail</Text>
    </View>
  );
};

export default PlaceDetail;*/

import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { MapPreview } from "../../components";
import { styles } from "./styles";

const PlaceDetail = ({ route }) => {
  const { placeId } = route.params;

  const place = useSelector((state) => state.place.places.find((item) => item.id === placeId));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: place.image }} />

      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{ lat: place.coords.lat, lng: place.coords.lng }}>
          <Text>Ubicación no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
