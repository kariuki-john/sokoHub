import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";
export default function Page() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>About page is working </Text>
    </View>
  );
}
