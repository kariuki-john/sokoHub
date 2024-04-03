import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Link, Tabs, router, Text } from "expo-router";
import React from "react";
import { Button } from "react-native";

export default function _layout() {
  return (
    <Tabs >
      <Tabs.Screen 
        name="home"
        options={{
          tabBarIcon: ({ color }) => {
            <FontAwesome5 name="list-ul" size={20} color={color} />;
          },
          tabBarLabel: "home",
          headerTitle: "Home",
        }}
      />

      <Tabs.Screen
        name="feeds"
        options={{
          tabBarIcon: ({ color }) => {
            <FontAwesome5 name="list-ul" size={20} color={color} />;
          },
          tabBarLabel: "Feed",
          headerTitle: "Feeds",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => {
            <AntDesign name="user" size={24} color={color} />;
          },
          tabBarLabel: "Profile",
          headerTitle: "Profile",
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarIcon: ({ color }) => {
            <AntDesign name="user" size={24} color={color} />;
          },
          tabBarLabel: "contact",
          headerTitle: "Contact Us",
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          tabBarIcon: ({ color }) => {
            <AntDesign name="user" size={24} color={color} />;
          },
          tabBarLabel: "blog",
          headerTitle: "Blogs",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color }) => {
            <AntDesign name="user" size={24} color={color} />;
          },
          tabBarLabel: "about",
          headerTitle: "About Us",
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          tabBarIcon: ({ color }) => {
            <AntDesign name="user" size={24} color={color} />;
          },
          tabBarLabel: "Exit",
        }}
      />
    </Tabs>
  );
}
