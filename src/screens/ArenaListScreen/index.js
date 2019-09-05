import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArenaList = () => (
  <View style={styles.container}>
    <Text>Get them arenas</Text>
  </View>
);

export default ArenaList;
