import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
export default function Page() {
  return (
    <View style={styles.div}>
      <Text style={{ fontSize: 30 }}>Welcome home get your orders at sokoHub</Text>
      <Button onPress={router.back} title="Go back" />
    </View>
  );
}
const styles = StyleSheet.create({
  div: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
});
