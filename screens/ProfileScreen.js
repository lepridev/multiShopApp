import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import FavoriteSection from "../ui/components/FavoriteSection";

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className=" flex-1 relative ">
      <StatusBar style="light" />
      <LinearGradient
        className="h-[149px] w-full"
        colors={["#941B80", "#301F58"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      ></LinearGradient>

      <View className="flex-col items-center absolute top-[99px] w-[100px] h-[100px] right-[38%] bg-white rounded-full border-5 border-red-400 ">
        <Image
          source={require("../assets/ProfilPic.png")}
          className="w-full h-full object-center"
        />
        <Text className="text-[15px] text-[#2E1F57] font-[700] mt-2 ">
          Armand Lepri
        </Text>
      </View>
      <View className="mt-28">
        <FavoriteSection />
      </View>
    </View>
  );
};

export default ProfileScreen;
