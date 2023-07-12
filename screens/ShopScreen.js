import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, ScrollView, TextInput, View } from "react-native";
import CategoriesSection from "../ui/components/CategoriesSection";
import { StatusBar } from "expo-status-bar";
import ShopBox from "../ui/components/ShopBox";

const ShopScreen = ({ route }) => {
  const navigation = useNavigation();

  const { CategoriesData, ShopData } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="mt-7">
      <StatusBar style="auto" />
      <ScrollView>
        <CategoriesSection CategoriesData={CategoriesData} />
        <View className="flex-row mx-4 m items-center space-x-2 bg-white shadow-md py-3 px-2 rounded-md ">
          <View>
            <Image
              source={require("../assets/filter.png")}
              className="w-[14px] h-[14px] object-cover "
            />
          </View>
          <View className="">
            <TextInput placeholder="Filtrer par..." className="w-full" />
          </View>
        </View>
        <View className="mx-4">
          {ShopData.map((item) => (
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
