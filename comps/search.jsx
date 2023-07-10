import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Bussines } from '../bussines';

export const Search = () => {
  const bussines = Bussines;

  const [inputCity, setInputCity] = useState('');

  const handleInputChange = (text) => {
    setInputCity(text);
  };

  const openNavigationApps = (location) => {
    const address = location;
    const encodedAddress = encodeURIComponent(address);
    const deepLinkURL = `geo:0,0?q=${encodedAddress}`;
    Linking.canOpenURL(deepLinkURL).then((supported) => {
      if (supported) {
        Linking.openURL(deepLinkURL);
      } else {
        console.log('Navigation apps are not supported on this device.');
      }
    });
  };

  // Filter the bussines array based on the input city
  const filteredBussines = bussines.filter((item) =>
    item.city.includes(inputCity)
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="הקלד שם עיר..."
          placeholderTextColor="#999"
          value={inputCity}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 25 }}>
        נמצאו {filteredBussines.length} תוצאות
      </Text>
      <ScrollView style={styles.scrollContainer}>
        {filteredBussines.map((business, index) => (
          <View key={index}>
            <View style={styles.bussinesContainer}>
              <Image style={styles.img} source={require('../assets/Nav2.png')} />
              <View style={styles.busNav}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{business.name}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{business.adress}</Text>
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => openNavigationApps(business.adress)}
              >
                <Text style={styles.btnText}>נווט</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bussInfo}>
              <View style={styles.communication}>
                <Text>טלפון</Text>
                <Text style={styles.text}>04-6247878</Text>
              </View>
              <View style={styles.communication}>
                <Text>ראשון עד חמישי</Text>
                <Text>08:00-17:00</Text>
              </View>
              <View style={styles.communication}>
                <Text>שישי וערבי חג</Text>
                <Text>08:00-12:00</Text>
              </View>
              <View style={styles.communication}>
                <Text>שבת וחגים</Text>
                <Text>סגור</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#900',
    padding: 10,
    borderRadius: 4,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 10,
  },
  bussinesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  bussInfo: {
    marginTop: 30,
  },
  busNav: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  communication: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  text: {
    color: 'blue',
  },
  img: {
    height: 30,
    width: 30,
  },
  btn: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
