import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { Image } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInOut,
  FadeInUp,
} from "react-native-reanimated";

export default function WelcomeScreen() {
  const rndInt = Math.round(Math.random());
  const animation = useRef(null);
  const navigation = useNavigation();
  // #f64e32
  return (
    <View className="bg-[#4290de] flex-1 justify-center items-center space-y-10 relative">
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
          source={
            [
              require("../../assets/lottie/food-logo.json"),
              require("../../assets/lottie/food.json"),
            ][rndInt]
          }
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
          className="text-white tracking-widest font-bold"
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
          className="rounded-full"
          style={{
            backgroundColor: "#fff",
            paddingVertical: hp(1.5),
            paddingHorizontal: hp(2.5),
            borderRadius: hp(1.5),
          }}
          onPress={() => navigation.navigate("Inside")}
        >
          <Animated.Text
            entering={FadeInUp.delay(200).duration(200).springify()}
            style={{
              color: "#f64e32",
              fontSize: hp(2.2),
              fontWeight: "medium",
            }}
          >
            Get Started
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
