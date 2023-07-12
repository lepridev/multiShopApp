import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./ShopScreen";
import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ShopScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";
import { clsx } from "clsx";
import { CategoriesData, ShopData } from "../constant/data";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 5,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#9f4a944b",
          borderRadius: 10,
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center space-y-1">
              <AntDesign
                name="home"
                size={24}
                color={focused ? "#941B80" : "black"}
              />
              <Text
                className={clsx(
                  `text-[10px] ${focused ? "text-[#941B80]" : "text-white"}`
                )}
              >
                Accueil
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        initialParams={{ CategoriesData, ShopData }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center space-y-1">
              <Entypo
                name="shop"
                size={24}
                color={focused ? "#941B80" : "white"}
              />
              <Text
                className={clsx(
                  `text-[10px] ${focused ? "text-[#941B80]" : "text-white"}`
                )}
              >
                Boutique
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ShopScreen"
        component={ShopScreen}
        initialParams={{ CategoriesData, ShopData }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center space-y-1">
              <MaterialIcons
                name="image-search"
                size={24}
                color={focused ? "#941B80" : "white"}
              />

              <Text
                className={clsx(
                  `text-[10px] ${focused ? "text-[#941B80]" : "text-white"}`
                )}
              >
                Trouver
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center space-y-1">
              <Entypo
                name="user"
                size={24}
                color={focused ? "#941B80" : "white"}
              />

              <Text
                className={clsx(
                  `text-[10px] ${focused ? "text-[#941B80]" : "text-white"}`
                )}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
