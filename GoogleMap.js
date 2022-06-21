import React, {useState} from 'react';
import Styled from 'styled-components';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Container = Styled.View`
    flex: 1;
`;

const GoogleMap = props => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 35.91395373474155,
    longitude: 127.73829440215488,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });
  const latitude = props.latitude;
  const longitude = props.longitude;
  console.log('latitude', latitude);
  console.log('longitude', longitude);
  return (
    <Container>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}></MapView>
    </Container>
  );
};

export default GoogleMap;
