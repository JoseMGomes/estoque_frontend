import React from "react";
import { Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
 
      <Stack
        screenOptions={{
          headerShown: false, 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", 
  },
  header: {
    height: 60,
    backgroundColor: "#FF9800", 
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});