import { View, Text, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

//icons
import Menu from "../assets/svg/Menu.js";
import Notification from "../assets/svg/Notification.js";
import Gear from "../assets/svg/Gear.js";
import { useNavigation } from "@react-navigation/native";
const UpperNav = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <Menu />
      <View style={styles.sideCon}>
        <Gear />

        <Pressable
          onPress={() => {
            navigator.navigate("NotificationScreen");
          }}
        >
          <View style={{ marginLeft: 15 }}>
            <Notification />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default UpperNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
  },
  sideCon: {
    flexDirection: "row",
  },
});
