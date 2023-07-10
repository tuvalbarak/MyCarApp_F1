import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Home = () => {
  const navigation = useNavigation();

  const handleOptionPress = () => {
    navigation.navigate('Intro');
  };


  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleOptionPress}>
          <Text style={styles.buttonText}>לחץ כאן לכניסה לאפליקציה</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
