import React, { useState,useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { useSelector } from 'react-redux';


const styles = StyleSheet.create({
    container:{
      width:'100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });
  
const Map = ({latitude,longitude}) => {
    const appLocation = useSelector(state=>state.appLocation);
    const currentLat = appLocation.location.coords.latitude;
    const currentLong = appLocation.location.coords.longitude;
    return (
        <View style={styles.container}>          
            <MapView
              style={{ alignSelf: 'stretch', height: 200 }}
              region={{
                latitude: currentLat,
                longitude: currentLong, 
                latitudeDelta: 0.0922, 
                longitudeDelta: 0.0421 
            }}
              showsUserLocation={true}
              provider={PROVIDER_GOOGLE}
              showsIndoorLevelPicker={true}
              followsUserLocation={true}
            >
              <Marker
                coordinate={{latitude,longitude}}
              />

            </MapView>
          
        </View>
          
      );
}

export default Map;