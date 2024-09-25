import React from "react";
import { View } from "react-native";
import Svg, { Path, G, Defs, Rect, ClipPath } from "react-native-svg";

export default function Heart() {
  return (
    <View>
      <Svg
        width={33}
        height={30}
        viewBox="0 0 33 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path d="M16.5 30L14.1294 27.842C5.7098 20.2071 0.151215 15.1553 0.151215 8.99183C0.151215 3.94005 4.10762 0 9.14304 0C11.9877 0 14.718 1.32425 16.5 3.40054C18.282 1.32425 21.0123 0 23.8569 0C28.8924 0 32.8488 3.94005 32.8488 8.99183C32.8488 15.1553 27.2902 20.2071 18.8706 27.842L16.5 30Z" fill="#FE7883"/>
      </Svg>
    </View>
  );
}
