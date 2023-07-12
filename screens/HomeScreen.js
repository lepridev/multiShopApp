import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { FontAwesome } from "@expo/vector-icons";

import { BannerImage } from "../assets";
import ShopBox from "../ui/components/ShopBox";
import BusinessBox from "../ui/components/BusinessBox";
import CategoriesSection from "../ui/components/CategoriesSection";
import { CategoriesData, ShopData } from "../constant/data";

const HomeScreen = () => {
  const shopToShow = ShopData.slice(0, 2);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#74456d18]">
      <ScrollView className="flex" showsVerticalScrollIndicator={false}>
        <View className="bg-red-100 w-full relative">
          <Image source={BannerImage} className=" w-full object-cover" />
          <View className="absolute top-[77px] left-[29px] max-w-sm">
            <Text className="text-[27px] font-[600] leading-tight text-gray-100 px-5">
              Get 20% off on all purchases over $30 at our bakery! Indulge in
              our freshly baked bread, cakes, cookies, and pastries. Limited
              time offer, so visit us today!
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between  bg-white mt-3 mx-4 px-4 py-1 rounded-md shadow-lg">
          <FontAwesome name="search" size={24} color="#BBBBBB" />
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: "YOUR API KEY",
              language: "en",
            }}
          />
        </View>

        <CategoriesSection CategoriesData={CategoriesData} />
        <View className="flex px-4 space-y-2 py-5 justify-center ">
          <Text className="text-[17px] text-[#2E1F57] font-[700] mb-2 ">
            Hot Deals
          </Text>

          <View className="">
            {shopToShow.map((item) => (
              <ShopBox
                key={item.id}
                imageSrc={item.imageScr}
                label={item.label}
                remise={item.remise}
                content={item.content}
                option={item.option}
              />
            ))}
          </View>
        </View>
        <View className="flex-col px-4 space-y-2 py-5 justify-center ">
          <Text className="text-[17px] text-[#2E1F57] font-[700] mb-2 ">
            Businesses
          </Text>

          <View className="flex-row items-center justify-between">
            <BusinessBox />
            <BusinessBox />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
