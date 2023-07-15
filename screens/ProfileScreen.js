import { View, Text, Image, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import FavoriteSection from "../ui/components/FavoriteSection";
import clsx from "clsx";

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const types = ["services", "hours", "deals", "favorite"];
  const [type, setType] = useState("services");

  return (
    <ScrollView className="">
      <View className="bg-red-200 h-[149px] sticky">
        <LinearGradient
          className="w-full h-full"
          colors={["#941B80", "#301F58"]}
        ></LinearGradient>
        <View className="items-center justify-center absolute -bottom-1/3 right-[38%] w-[100px] h-[100px] bg-gray-200 rounded-full">
          <Image
            source={require("../assets/ProfilPic.png")}
            className="w-full h-full object-cover"
          />
        </View>
      </View>
      <View className="flex-row items-center justify-between mt-[70px]  py-2 px-7 space-x-5">
        {types.map((item, index) => (
          <TouchableOpacity
            key={index}
            className={clsx(
              ` ${
                type === item
                  ? "text-red-500 pb-1 border-b-2 border-red-400 "
                  : ""
              }`
            )}
            onPress={() => setType(item)}
          >
            <Text>{item.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="mt-8">
        <FavoriteSection />
      </View>
    </ScrollView>

    // <ScrollView className=" flex-1 relative ">
    //   <StatusBar style="light" />
    //   <LinearGradient
    //     className="h-[149px] w-full mb-10"
    //     colors={["#941B80", "#301F58"]}
    //     start={{ x: 0, y: 0 }}
    //     end={{ x: 1, y: 1 }}
    //   ></LinearGradient>

    //   <View className="flex-col items-center absolute top-[99px] w-[100px] h-[100px] right-[38%] bg-white rounded-full border-5 border-red-400 ">
    //     <Image
    //       source={require("../assets/ProfilPic.png")}
    //       className="w-full h-full object-center"
    //     />
    //     <Text className="text-[15px] text-[#2E1F57] font-[700] mt-2  ">
    //       Armand Lepri
    //     </Text>
    //   </View>
    //   <View className="flex-row items-center mt-11 h-2 justify-center space-x-7 bg-red-100">
    //     <TouchableOpacity>
    //       <Text>Services</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity>
    //       <Text>Services</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity>
    //       <Text>Services</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View>
    //     <FavoriteSection />
    //   </View>
    // </ScrollView>
  );
};

export default ProfileScreen;
