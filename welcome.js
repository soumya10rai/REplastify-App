import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REplastify</Text>
      <Text style={styles.subtitle}>Recycle Smart, Live Safe</Text>
      <Button title="Get Started" onPress={() => navigation.navigate("Register")} />
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    color: "#4CAF50",
  },
});
