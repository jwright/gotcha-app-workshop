import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ArenasQuery from "../../queries/Arenas";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArenaList = ({ navigation }) => {
  const { latitude, longitude } = navigation.getParam("location");

  return (
    <View style={styles.container}>
      <Text>Get them arenas for {latitude}/{longitude}</Text>
    </View>
  );
};

export default ArenaList;
