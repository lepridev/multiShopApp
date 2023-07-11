import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView clasName="mt-7">
      <ScrollView>
        <View>
          <Text>Hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
