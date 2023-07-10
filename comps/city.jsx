import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { Cities } from '../bussines';
import { Image } from 'react-native';

export const City = () => {
  const navigation = useNavigation();

  const handleOptionPress = () => {
    navigation.navigate('Search');
  };
  const cities = Cities

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cities.map((item, index) => (
        <Animated.View
          key={item}
          style={[styles.cityContainer, { opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }] }]}
          delay={index * 200}
        >
          <Image style={styles.img} source={require('../assets/Nav2.png')} />
          <Text style={styles.cityText}>{item}</Text>
          <TouchableOpacity style={styles.button} onPress={handleOptionPress} >
            <Text style={styles.buttonText}>בחירה</Text>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    opacity: 0,
    transform: [{ translateY: 50 }],
  },
  cityText: {
    flex: 1,
    fontSize: 20,
    marginRight: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 'auto',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
