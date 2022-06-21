import React, {useState} from 'react';
import {Text, View} from 'react-native';
import GoogleMap from './GoogleMap';
import Geolocation from 'react-native-geolocation-service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ItemList from './screenView';

async function requestPermissions() {
  if (Platform.OS === 'ios') {
    const auth = await Geolocation.requestAuthorization('whenInUse');
    if (auth === 'granted') {
      return true;
    }
  }
}

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLogitude] = useState(0);

  const geoLocation = () => {
    requestPermissions()
      .then(res => {
        if (res === true) {
          Geolocation.getCurrentPosition(
            position => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              setLatitude(latitude);
              setLogitude(longitude);
            },
            error => {
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };

  return (
    <>
      <View style={{flex: 1}}>
        <GoogleMap latitude={latitude} longitude={longitude} />
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => geoLocation()}>
          <Text> Get GeoLocation </Text>
        </TouchableOpacity>
        <ItemList />
      </View>
    </>
  );
}

export default App;
