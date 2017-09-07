import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import MapView from 'react-native-maps'

const { width, height } = Dimensions.get('window')
const ZOOM_LEVEL = 0.09
const ASPECT_RADIO = width / height
const LATITUDE_DELTA = ZOOM_LEVEL
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RADIO

class maps extends Component {
  render() {
    console.log('ASPECT_RADIO ', ASPECT_RADIO);
    console.log('LATITUDE_DELTA ', LATITUDE_DELTA);
    console.log('LONGITUDE_DELTA ', LONGITUDE_DELTA);

    return (
      <View style={styles.main}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 50.267,
            longitude: -119.272,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          zoomEnabled={true}>
          <MapView.Marker
            coordinate={{
              latitude: 50.267,
              longitude: -119.272
            }}>
            <View style={styles.container}>
              <View style={styles.bubble}>
                <Text style={styles.amount}>10081</Text>
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: 50.267,
              longitude: -119.272
            }}>
            <View style={styles.container}>
              <View style={styles.bubble}>
                <Text style={styles.amount}>10082</Text>
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{
              latitude: 50.267,
              longitude: -119.232
            }}>
            <View style={styles.container}>
              <View style={styles.bubble}>
                <Text style={styles.amount}>10083</Text>
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: 50.267,
              longitude: -119.232
            }}>
            <View style={styles.container}>
              <View style={styles.bubble}>
                <Text style={styles.amount}>10084</Text>
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{
              latitude: 50.267,
              longitude: -119.212
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
              latitude: 50.277,
              longitude: -119.272
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
              latitude: 50.267,
              longitude: -119.272
            },
            {
              latitude: 50.297,
              longitude: -119.252
            },
            {
              latitude: 50.257,
              longitude: -119.242
            }]}
            strokeColor="#000"
            fillColor="transparent"
            strokeWidth={1}
          />

          <MapView.Polyline
            coordinates={[
            {
              latitude: 50.267,
              longitude: -119.272
            },
            {
              latitude: 50.267,
              longitude: -119.232
            }]}
            strokeColor="red"
            fillColor="red"
            strokeWidth={5}
          />

          <MapView.Circle
            center={{
              latitude: 50.267,
              longitude: -119.272
            }}
            radius={1750}
            strokeColor="#000"
            fillColor="transparent"
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
