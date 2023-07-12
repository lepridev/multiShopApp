import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const OffertBox = ({ imageSrc, label, content, option }) => {
  return (
    <TouchableOpacity className="flex-row bg-white my-2 shadow-md rounded-md ">
      <View className="relative">
        <Image
          source={imageSrc}
          className="w-[120px] h-[100px] object-cover rounded-l-md "
        />
        <View className="absolute items-center justify-center bottom-3 right-3 bg-[#ffffff4b] shadow-2xl rounded-full w-[20px] h-[20px] ">
          <AntDesign name="heart" size={11} color="white" />
        </View>
      </View>
      <View className="flex-1 flex-col ml-8 py-[15px]">
        <Text className="text-[13px] text-[#1A0700] mb-1 font-semibold ">
          {label}
        </Text>
        <Text className="text-[10px] text-[#A39C99] font-[400] ">
          {content}
        </Text>
        <View className="flex-row items-center gap-1 mt-1">
          <AntDesign name="clockcircle" size={12} color="#941B80" />
          <Text className="text-[12px] text-[#941B80] font-[400] ">
            {option}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OffertBox;
