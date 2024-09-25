import React from "react";
import { View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

export default function Rupee() {
  return (
    <View>
      <Svg
        width={56}
        height={56}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="28" cy="28" r="28" fill="#F1FEFA" />
        <Path
          d="M35.5 19.25H21.75H25.5C26.8261 19.25 28.0979 19.7768 29.0355 20.7145C29.9732 21.6521 30.5 22.9239 30.5 24.25C30.5 25.5761 29.9732 26.8479 29.0355 27.7855C28.0979 28.7232 26.8261 29.25 25.5 29.25H21.75L29.25 36.75M21.75 24.25H35.5"
          stroke="#2AC689"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
