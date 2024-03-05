import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";
import { Image } from "react-native";

export default function WelcomeScreen() {
  const animation = useRef(null);
  const navigation = useNavigation();
  // #f64e32
  return (
    <View className="bg-[#ffd91b] flex-1 justify-center items-center space-y-10 relative">
      <Image
        source={require("../../assets/images/background.png")}
        style={{
          position: "absolute",
          width: wp(100),
          height: hp(100),
        }}
      />
      <StatusBar style="light" />
      {/* Lottie Logo */}
      <View>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 300,
          }}
          source={require("../../assets/lottie/food-logo.json")}
        />
      </View>

      {/* Title and Subtitle */}
      <View className="flex items-center space-y-2">
        <Text
          className="text-white font-extrabold tracking-widest"
          style={{ fontSize: hp(5) }}
        >
          YummyRecipe
        </Text>
        <Text
          className="text-white tracking-widest font-medium"
          style={{
            fontSize: hp(2.5),
          }}
        >
          Explore tasty delights!
        </Text>
      </View>

      {/* Get Started Button  */}
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingVertical: hp(1.5),
            paddingHorizontal: hp(2.5),
            borderRadius: hp(1.5),
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              color: "#f64e32",
              fontSize: hp(2.2),
              fontWeight: "medium",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
