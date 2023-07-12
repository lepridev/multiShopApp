import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CategoriesSection from "../ui/components/CategoriesSection";
import OffertBox from "../ui/components/OffertBox";
import OffertBoxSection from "../ui/components/OffertBoxSection";
import { StatusBar } from "expo-status-bar";

const SearchScreen = ({ route }) => {
  const navigation = useNavigation();
  const { CategoriesData, ShopData } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="mt-8">
      <StatusBar style="auto" />
      <ScrollView>
        <View className=" items-center ">
          <CategoriesSection CategoriesData={CategoriesData} />
        </View>
        <OffertBoxSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
