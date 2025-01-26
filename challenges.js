import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ChallengesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This Week's Challenges</Text>
      <Text>- Educate 5 people about plastic waste</Text>
      <Text>- Reuse plastic bags</Text>
      <Text>- Walk 1 mile while recycling</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
