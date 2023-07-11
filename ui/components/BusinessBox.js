import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const BusinessBox = () => {
  return (
    <TouchableOpacity className="w-[45%] flex-col bg-white shadow-md rounded-md">
      <View>
        <Image
          source={require("../../assets/Burger.png")}
          className="w-full object-cover rounded-t-md"
        />
      </View>
      <View className="px-[15px] mt-[15px] ">
        <Text className="text-[13px] text-[#1A0700] font-semibold mb-1 ">
          The Burger House
        </Text>
        <Text className="text-[10px] text-[#A39C99] font-[400] mb-1 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <View className="flex-row items-center space-x-1 mb-3">
          <AntDesign name="clockcircle" size={10} color="#941B80" />
          <Text className="text-[12px] text-[#941B80] font-[400]">Open</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessBox;
