import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Navigator = createSwitchNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    initialRoute: "Home",
  }
);

const AppNavigationContainer = createAppContainer(Navigator);

const App = () => (
  <AppNavigationContainer />
);

export default App;
