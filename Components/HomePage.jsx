import { View, Text, Switch, FlatList } from "react-native";
import { products } from "../Components/products.js";
import ProductList from "./ProductList.jsx";

export default function HomePage({ isEnabled, toggleColor }) {
  return (
    <View>
      <View className="w-full flex justify-center items-center flex-row-reverse gap-10 ">
        <Switch value={isEnabled} onValueChange={toggleColor} />
        <Text className=" text-xl font-medium dark:text-white">
          New Collections
        </Text>
      </View>
      <FlatList
        data={products}
        style={{ paddingHorizontal: 15 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          // console.log(item.name);
          // console.log(item.image.url);
          return <ProductList {...item} />;
        }}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
            }}
          >
            No Item Found
          </Text>
        }
      />
    </View>
  );
}
