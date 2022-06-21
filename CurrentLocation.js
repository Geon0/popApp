import React, { useState } from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { TouchableOpacity } from 'react-native-gesture-handler';

async function requestPermissions() {
    if (Platform.OS === 'ios') {
        const auth = await Geolocation.requestAuthorization("whenInUse");
        if(auth === "granted") {
           return true;
        }
    }
}
  


const GeoLocationAPI = ({

}) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLogitude] = useState(null);

    const geoLocation = () => {
        requestPermissions()
        .then((res) => {
            if(res === true) {
                Geolocation.getCurrentPosition(
                    position => {
                        const latitude = JSON.stringify(position.coords.latitude);
                        const longitude = JSON.stringify(position.coords.longitude);
        
                        setLatitude(latitude);
                        setLogitude(longitude);
                    },
                    error => { console.log(error.code, error.message); },
                    {enableHighAccuracy:true, timeout: 15000, maximumAge: 10000 },
                )
            }
        });

    }

    return (
        <View>
            <Text> latitude: {latitude} </Text>
            <Text> longitude: {longitude} </Text>
            <TouchableOpacity onPress={() => geoLocation()}>
                <Text> Get GeoLocation </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default GeoLocationAPI;