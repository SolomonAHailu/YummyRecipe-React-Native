import { View, Text, FlatList, Image, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TrashIcon } from "react-native-heroicons/outline";
import Animated, { FadeInLeft, FadeInUp } from "react-native-reanimated";

export default function FavouritesScreen() {
  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    getFavourites();
  }, []);

  const getFavourites = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      if (response && response.data) {
        setFavourites(response.data.meals.slice(1, 15));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = (id) => {
    const newFavourites = favourites.filter((favourite) => {
      return favourite.idMeal != id;
    });
    setFavourites(newFavourites);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 50,
      }}
    >
      <StatusBar style="dark" />

      {/*  Title */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Animated.Text
          entering={FadeInUp.delay(400).duration(200).springify()}
          style={{ marginBottom: 10, fontWeight: "800", fontSize: 18 }}
        >
          My Favorites
        </Animated.Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Animated.Text
          entering={FadeInLeft.delay(600).duration(200).springify()}
          style={{
            paddingRight: 10,
          }}
          onPress={() => {
            setFavourites([]);
          }}
        >
          Clear
        </Animated.Text>
      </View>

      {/*  Items List */}
      <View>
        <FlatList
          data={favourites}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                marginRight: 10,
                marginLeft: 10,
                backgroundColor: "#e2e2e2",
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 20,
                  }}
                >
                  <Image
                    source={{ uri: item.strMealThumb }}
                    style={{ width: hp(6), height: hp(6), borderRadius: 10 }}
                  />
                  <Text>{item.strMeal}</Text>
                </View>
                <View>
                  <TrashIcon
                    onPress={() => {
                      handlePress(item.idMeal);
                    }}
                    size={hp(3.5)}
                    color={"#f64e32"}
                  />
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.idMeal}
        />
      </View>
    </View>
  );
}
