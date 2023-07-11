import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ShopBox = ({ imageSrc, label, remise, content, option }) => {
  return (
    <TouchableOpacity className="w-full rounded-md flex-row my-2 space-x-3 items-center py-[15px] px-[11px] bg-white shadow-md">
      <View>
        <Image source={imageSrc} className="w-[52px] h-[52px] object-cover" />
      </View>
      <View className="flex-1 flex-col h-full space-y-1 px-2">
        <View className="flex-row items-center justify-between ">
          <Text className="text-[#2E1F57] text-[13px] font-semibold ">
            {label}
          </Text>
          <Text className="text-[#941B80] text-[13px] font-semibold ">
            {remise}
          </Text>
        </View>
        <View>
          <Text className="text-[12px] text-[#7E8392] ">{content}</Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <FontAwesome name="clock-o" size={12} color="#941B80" />

          <Text className="text-[12px] text-[#7E8392] ">{option}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShopBox;
