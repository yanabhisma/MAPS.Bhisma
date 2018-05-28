import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.128673,
          longitude:  115.086407
        },
        title: 'Waroeng Maii Singgah1',
        subtitle: 'Berlokasi di Gg. Pisang, Baktiseraga, Kec. Buleleng, Kabupaten Buleleng, Bali 81119'
      },
      {
        key:2,
        latlng: {
          latitude:-8.127507,
          longitude:  115.081960
        },
        title: 'Warung Makan Belimbing Sari ',
        subtitle: 'Berlokasi di Jl. Sriamerta Gg. 6 No.9, Baktiseraga, Kec. Buleleng, Kabupaten Buleleng, Bali 81119'
      },
      {
        key:3,
        latlng: {
          latitude: -8.476677,
          longitude: 115.209527
        },
        title: 'Warung Sate Nyoman BledorII',
        subtitle: 'Berlokasi di Jl. Raya Sangeh, Sangeh, Abiansemal, Kabupaten Badung, Bali 80352'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.498953,
          longitude: 115.271578
        },
        title: 'Warung Mina Ubud',
        subtitle: 'Berlokasi di Jl. Gunung Sari No. 2, Ambengan, Peliatan, Ubud, Peliatan, Ubud, Badung, Bali 80227'
      },
      {
        key:5,
        latlng: {
          latitude:-8.628665,
          longitude: 115.206909
        },
        title: 'Universitas Mahendradatta Bali',
        subtitle: 'Berlokasi di Jl. Ken Arok No.12, Peguyangan, Denpasar Utara, Kota Denpasar, Bali'
      },
      {
        key:6,
        latlng: {
          latitude:-8.357955,
          longitude: 114.611039
        },
        title: 'Warung Semangat',
        subtitle: 'Berlokasi di Jl. Nakula, Banjar Tengah, Negara, Kabupaten Jembrana, Bali 82213'
      },
      {
        key:7,
        latlng: {
          latitude:-8.143631,
          longitude: 114.600646
        },
        title: 'Warung Sate Gurita',
        subtitle: 'Berlokasi di Sumberkima, Gerokgak, Kabupaten Buleleng, Bali 81155'
      },{
        key:8,
        latlng: {
          latitude: -8.253578,
          longitude:  115.570825
        },
        title: 'Warung Kampoeng Kubu',
        subtitle: 'Berlokasi di Kubu, Kabupaten Karangasem, Bali 80853'
      },{
        key:9,
        latlng: {
          latitude: -8.505285,
          longitude: 115.559568
        },
        title: 'Warung Budiayu',
        subtitle: 'Berlokasi Jl. Raya Candidasa, Nyuh Tebel, Manggis, Kabupaten Karangasem, Bali'
      },{
        key:10,
        latlng: {
          latitude: -8.645526,
          longitude: 115.273168
        },
        title: 'Warung Arigatou Made',
        subtitle: 'Berlokasi di Batubulan, Sukawati, Kabupaten Gianyar, Bali'
      },{
        key:11,
        latlng: {
          latitude: -8.708060,
          longitude: 115.476886
        },
        title: 'Warung D Abian',
        subtitle: 'Berlokasi Sakti, Nusapenida, Kabupaten Klungkung, Bali 80771'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Warung Makan Di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>Bhismayana@Copyright </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
