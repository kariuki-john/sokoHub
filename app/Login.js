import { FontAwesome5 } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
export default function Page() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="user-shield" size={50} color="gold" />
      <Text style={{ fontSize: 20, marginTop: 15 }}>LOGIN</Text>
      <TextInput
        style={styles.Input}
        placeholder="Enter email or phone Number"
      />
      <TextInput
        style={styles.Input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Link href={"/(tabs)/home"} asChild>
        <Pressable style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => {
              router.push("home");
            }}
          >
            Login
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'green'
  },
  Input: {
    height: 55,
    width: 330,
    margin: 25,
    borderWidth: 1,
    borderColor: "gold",
    borderRadius: 20,
    padding: 12,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "gold",
    width: 200,
  },
});
