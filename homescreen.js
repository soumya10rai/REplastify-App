import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, User!</Text>
      <Button title="Scan" onPress={() => navigation.navigate("Scanner")} />
      <Button title="Challenges" onPress={() => navigation.navigate("Challenges")} />
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
