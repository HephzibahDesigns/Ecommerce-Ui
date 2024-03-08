import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function ProductList({
  title,
  price,
  description,
  category,
  image,
}) {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();

  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <View className="w-full bg-white rounded-3xl dark:bg-card p-4 my-5">
      <View className="bg-white rounded-2xl px-9 py-5">
        <Image source={{ uri: image }} style={styles.images} />
      </View>

      <View className="mt-2">
        <Text
          style={{
            fontSize: 14,
            padding: 5,
            alignSelf: "flex-start",
            borderRadius: 4,
            marginTop: 5,
            backgroundColor: "#E79914",
            color: "white",
          }}
        >
          {category}
        </Text>
        <Text className="text-lg font-semibold pt-1 dark:text-white">
          {title}
        </Text>

        <View className="flex flex-row justify-between items-center py-1">
          <Text className="text-xl font-semibold dark:text-white">
            ${price * count}
          </Text>
          <View className="flex flex-row items-center gap-3">
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <Ionicons
                name="add-circle"
                size={24}
                color={colorScheme === "light" ? "#E79914" : "white"}
              />
            </TouchableOpacity>

            <Text className="text-xl font-medium text-center dark:text-white">
              {count}
            </Text>

            <TouchableOpacity
              onPress={() => (count <= 1 ? null : setCount(count - 1))}
            >
              <FontAwesome
                name="minus-circle"
                size={24}
                color={colorScheme === "light" ? "#E79914" : "white"}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="py-1">
          <Text
            style={{
              fontSize: 16,
            }}
            numberOfLines={isReadMore ? 200 : 3}
            className=" font-normal text-black/70 text-left leading-5 pb-1 dark:text-white/80"
          >
            {description}
          </Text>

          <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
            <Text
              style={{
                fontSize: 15,
                textDecorationLine: "underline",
              }}
              className=" font-medium text-black/70 text-left leading-5 dark:text-white/80"
            >
              {isReadMore ? "Read Less" : "Read More"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className=" bg-black  my-3 py-3 rounded-full  dark:bg-white">
          <Text className="text-white font-semibold text-center text-lg dark:text-black">
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  images: { width: "100%", height: 300, resizeMode: "contain" },
});
