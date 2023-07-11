import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const CategoriesCard = ({ imageScr, label }) => (
  <>
    <TouchableOpacity className="flex-col items-center py-[14px] px-[15px] mx-1 space-y-1 rounded-lg w-[85px] h-[80px] bg-white shadow-sm">
      <View>
        <Image source={imageScr} className="w-[32px] h-[32px] object-cover " />
      </View>
      <View>
        <Text className="text-[12px] font-[600 text-[#941B80] truncate ">
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  </>
);
