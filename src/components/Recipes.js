import React from "react";
import { View, Text } from "react-native";
import RecipesCard from "./RecipesCard";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import Loading from "./Loading";

export default function Recipes({ meals, categories }) {
  const navigation = useNavigation();
  return (
    <View className="mx-4 space-y-4">
      <Text
        style={{
          fontSize: hp(2),
        }}
        className="font-semibold text-neutral-600"
      >
        {meals.length} Recipes
      </Text>
      <View>
        {categories.length == 0 || meals.length == 0 ? (
          <Loading size="large" className="mt-20 justify-center items-center" />
        ) : (
          <MasonryList
            data={meals}
            keyExtactor={(item) => item.idMeal}
            numberColumns={2}
            showVerticalScrollbarIndicator={false}
            renderItem={({ item, i }) => (
              <RecipesCard item={item} index={i} navigation={navigation} />
            )}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
}
