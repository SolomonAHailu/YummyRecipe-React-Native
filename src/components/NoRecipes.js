import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function NoRecipes({ animation }) {
  return (
    <View className="flex-1 justify-center items-center space-y-10 relative">
      {/* Lottie Logo */}
      <View>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 300,
          }}
          source={require("../../assets/lottie/nor-recipe.json")}
        />
      </View>
    </View>
  );
}
