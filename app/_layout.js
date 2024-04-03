import { Stack, router } from "expo-router";
import React from "react";
import { Button } from "react-native";
export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "gold",
        },
        headerTintColor: "green",
      }}
    >
      <Stack.Screen
        name="Login"
        options={{
          headerBackTitle: "Login",
        }}
      />        
      <Stack.Screen
        name="(tabs)"
        options={{ 
          headerShown: false,
        }}
        
      />
     
    </Stack>
    
  );
}
