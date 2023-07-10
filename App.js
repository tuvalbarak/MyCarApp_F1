import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native';
import Intro from './comps/intro';
import { Search } from './comps/search';
import { City } from './comps/city';
import { Home } from './comps/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="City" component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


