import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Menu() {
  return (
    <View>
      <Svg
        width={26}
        height={26}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0 4C0 1.79086 1.79086 0 4 0H8C10.2091 0 12 1.79086 12 4V12H4C1.79086 12 0 10.2091 0 8V4Z"
          fill="#25C387"
        />
        <Path
          d="M22 0C24.2091 0 26 1.79086 26 4V8C26 10.2091 24.2091 12 22 12L14 12L14 4C14 1.79086 15.7909 0 18 0L22 0Z"
          fill="#25C387"
        />
        <Path
          d="M26 22C26 24.2091 24.2091 26 22 26L18 26C15.7909 26 14 24.2091 14 22L14 14L22 14C24.2091 14 26 15.7909 26 18L26 22Z"
          fill="#25C387"
        />
        <Path
          d="M4 26C1.79086 26 0 24.2091 0 22L0 18C0 15.7909 1.79086 14 4 14L12 14L12 22C12 24.2091 10.2091 26 8 26L4 26Z"
          fill="#25C387"
        />
      </Svg>
    </View>
  );
}
