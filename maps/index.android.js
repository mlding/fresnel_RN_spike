import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, Image } from 'react-native'
import MapView from 'react-native-maps'

class maps extends Component {

  render() {
    return (
      <View style={styles.main}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}>
            <View style={styles.radius}>
              <Text>10081</Text>
              <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                     style={styles.marker} />
            </View>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}>
            <View style={styles.radius}>
              <Text>10082</Text>
              <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                     style={styles.marker} />
            </View>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4124
            }}>
            <View style={styles.radius}>
              <Text>10083</Text>
              <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                     style={styles.marker} />
            </View>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4124
            }}>
            <View style={styles.radius}>
              <Text>10084</Text>
              <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                     style={styles.marker} />
            </View>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4524
            }}>
            <View style={styles.radius}>
              <Text>10085</Text>
              <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                     style={styles.marker} />
            </View>
            <MapView.Callout tooltip style={styles.customView}>
              <Text>This is a custom callout bubble view</Text>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{
              latitude: 37.79825,
              longitude: -122.4524
            }}
            onSelect={(e) => console.log('onSelect', e)}
            onDrag={(e) => console.log('onDrag', e)}
            onDragStart={(e) => console.log('onDragStart', e)}
            onDragEnd={(e) => console.log('onDragEnd', e)}
            onPress={(e) => console.log('onPress', e)}
            draggable>
            <View style={styles.container}>
              <View style={styles.bubble}>
                <Text style={styles.amount}>19999</Text>
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </MapView.Marker>

          <MapView.Polygon
            coordinates={[
            {
              latitude: 37.78825,
              longitude: -122.4324
            },
            {
              latitude: 37.78825,
              longitude: -122.4124
            },
            {
              latitude: 37.79825,
              longitude: -122.4124
            }]}
            strokeColor="#000"
            fillColor="rgba(255,0,0,0.5)"
            strokeWidth={1}
          />

          <MapView.Polyline
            coordinates={[
            {
              latitude: 37.78825,
              longitude: -122.4324
            },
            {
              latitude: 37.78825,
              longitude: -122.4124
            }]}
            strokeColor="#000"
            fillColor="rgba(255,0,0,0.5)"
            strokeWidth={1}
          />

          <MapView.Circle
            center={{
              latitude: 37.79925,
              longitude: -122.4524
            }}
            radius={1750}
            strokeColor="#000"
            fillColor="rgba(255,0,0,0.5)"
            strokeWidth={1}
          />
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  },
  map: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: 'absolute'
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: 'green'
  },
  customView: {
    width: 100,
    height: 50,
  },
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#FF5A5F',
    padding: 2,
    borderRadius: 3,
    borderColor: '#D23F44',
    borderWidth: 0.5,
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#FF5A5F',
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#D23F44',
    alignSelf: 'center',
    marginTop: -0.5,
  }
})

AppRegistry.registerComponent('maps', () => maps);
