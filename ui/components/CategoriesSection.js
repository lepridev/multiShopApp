import { View, Text, FlatList } from "react-native";
import React from "react";
import { CategoriesCard } from "./CategoriesCard";

const CategoriesSection = ({ CategoriesData }) => {
  return (
    <View className="flex mt-1 px-4 space-y-2 py-5 justify-center ">
      <Text className="text-[17px] text-[#2E1F57] font-[700] ">Categories</Text>

      <View className="flex-row  items-center justify-between">
        <FlatList
          data={CategoriesData}
          renderItem={({ item }) => (
            <CategoriesCard label={item.label} imageScr={item.imageScr} />
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default CategoriesSection;
