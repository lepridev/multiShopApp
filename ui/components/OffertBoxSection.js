import { View, Text } from "react-native";
import React from "react";
import OffertBox from "./OffertBox";

const OffertBoxSection = () => {
  return (
    <View className="px-4">
      <View className="mb-2">
        <Text className="text-[17px] text-[#2E1F57] font-[700] ">
          Businessess
        </Text>
      </View>
      <OffertBox
        label={"The Burger House"}
        content={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
        option={"Open"}
        imageSrc={require("../../assets/BurgerPic.png")}
      />
      <OffertBox
        label={"The Burger House"}
        content={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
        option={"Open"}
        imageSrc={require("../../assets/BurgerPic.png")}
      />
      <OffertBox
        label={"The Burger House"}
        content={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
        option={"Open"}
        imageSrc={require("../../assets/BurgerPic.png")}
      />
    </View>
  );
};

export default OffertBoxSection;
