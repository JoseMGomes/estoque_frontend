import React from "react";
import { Stack } from "expo-router";
import { View, StyleSheet, Text, StatusBar } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

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
});
