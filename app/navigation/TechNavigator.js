import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProblemsScreen from "../screens/ProblemsScreen";
import AdminAccScreen from "../screens/AdminAccScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();
const LibNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.primary,
      activeTintColor: colors.white,
    }}
  >
    <Tab.Screen />
    <Tab.Screen
      name="Account"
      component={AdminAccScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default LibNavigator;
