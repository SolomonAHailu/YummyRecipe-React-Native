import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Categories from "../components/Categories";
import axios from "axios";
import Recipes from "../components/Recipes";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipies();
  }, []);

  const handleChangeCategory = (category) => {
    getRecipies(category);
    setActiveCategory(category);
    setMeals([]);
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.log("ERROR ME " + error.message);
    }
  };

  const getRecipies = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View className="flex-1 bg-[#808080 ] ">
      <StatusBar style="dark" />
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          className="space-y-6 pt-14"
        >
          {/* Avatar and bell icon */}
          <View className="mx-4 flex-row justify-between items-center">
            <AdjustmentsHorizontalIcon size={hp(4)} color={"gray"} />
            <Image
              source={require("../../assets/images/avatar.jpg")}
              style={{ width: hp(5), height: hp(5), resizeMode: "cover" }}
              className="rounded-full"
            />
          </View>

          {/* Headlines */}
          <View className="mx-4 space-y-1 mb-2">
            <View>
              <Text
                style={{ fontSize: hp(3.5) }}
                className="font-bold text-neutral-800"
              >
                Fast & Delicious
              </Text>
              <Text
                style={{ fontSize: hp(3.5) }}
                className="font-extrabold text-neutral-800  "
              >
                Food You <Text className="text-[#f64e32]">Love</Text>
              </Text>
            </View>
          </View>

          {/* Search bar */}
          <View className="mx-4 flex-row items-center border rounded-xl borderblack p-[6px]">
            <View className="bd-white rounded-full p-2">
              <MagnifyingGlassIcon
                size={hp(2.5)}
                color={"gray"}
                strokeWidth={3}
              />
            </View>
            <TextInput
              placeholder="Search your food"
              placeholderTextColor={"gray"}
              style={{ fontSize: hp(1.7) }}
              className="flex-1 text-base mb-1 pl-1 tracking-widest"
            />
          </View>

          {/* Categories */}
          <View>
            {categories.length > 0 && (
              <Categories
                categories={categories}
                activeCategory={activeCategory}
                handleChangeCategory={handleChangeCategory}
              />
            )}
          </View>

          {/* Recipes Meal */}
          <View>
            <Recipes meals={meals} categories={categories} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
