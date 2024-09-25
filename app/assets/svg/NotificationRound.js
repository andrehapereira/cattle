import React from "react";
import { View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

export default function NotificationRound() {
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
          d="M28.3488 43L25.9782 40.842C17.5586 33.2071 12 28.1553 12 21.9918C12 16.9401 15.9564 13 20.9918 13C23.8365 13 26.5668 14.3243 28.3488 16.4005C30.1308 14.3243 32.861 13 35.7057 13C40.7411 13 44.6975 16.9401 44.6975 21.9918C44.6975 28.1553 39.139 33.2071 30.7193 40.842L28.3488 43Z"
          fill="#FE7883"
        />
      </Svg>
    </View>
  );
}
