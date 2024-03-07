import {
  View,
  Text,
  ScrollView,
  TextInput,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInOut,
  FadeInUp,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />

      {/*  Background  */}
      <Image
        className="h-full w-full absolute"
        source={require("../../assets/images/background.png")}
      />
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(200).springify()}
          className="h-[255] w-[90]"
          source={require("../../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(200).springify()}
          className="h-[160] w-[65]"
          source={require("../../assets/images/light.png")}
        />
      </View>

      {/* Title */}
      <View className="h-full w-full flex justify-around pt-48">
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.delay(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl"
          >
            Sign Up
          </Animated.Text>
        </View>

        {/*  Form  */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Username" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="w-full"
          >
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            className="flex-row justify-content"
          >
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="text-sky-600">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
