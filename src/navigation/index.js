// import { View, Text } from "react-native";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "../screens/HomeScreen";
// import WelcomeScreen from "../screens/WelcomeScreen";
// import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
// import LoginScreen from "../screens/LoginScreen";
// import SignupScreen from "../screens/SignupScreen";

// const Stack = createNativeStackNavigator();

// export default function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Welcome"
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         <Stack.Screen
//           name="RecipeDetailsScreen"
//           component={RecipeDetailsScreen}
//         />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="SignUp" component={SignupScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

///////////////////////////

import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import FavouritesScreen from "../screens/FavouritesScreen";
import ProfileSceen from "../screens/ProfileSceen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabNavigatorScreenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    background: "#fff",
  },
};

function Inside() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={tabNavigatorScreenOptions}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <Entypo name="home" size={24} color="#f64e32" />;
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <Entypo name="heart" size={24} color="#f64e32" />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileSceen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <FontAwesome name="user" size={24} color="#f64e32" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Inside"
          component={Inside}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeDetailsScreen"
          component={RecipeDetailsScreen}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
