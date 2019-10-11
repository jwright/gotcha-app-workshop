import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";

import ArenasQuery from "../../queries/Arenas";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

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
  const { loading, error, data } = useQuery(ArenasQuery, {
    variables: {
        latitude, longitude, radius: 25
      },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage
                     message="Error occured retrieving arenas. Try again later."
                    />;

  if (data) { console.log("GOT DAT DATA", data); }

  return (
    <View style={styles.container}>
      <Text>Get them arenas for {latitude}/{longitude}</Text>
    </View>
  );
};

export default ArenaList;
