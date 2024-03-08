import { SafeAreaView, Text, View, StatusBar, Switch } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import HomePage from "./Components/HomePage";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [isEnabled, setIsEnabled] = useState(colorScheme === "dark");

  const toggleColor = () => {
    setIsEnabled(!isEnabled);
    toggleColorScheme();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-200 dark:bg-color-bg">
      <StatusBar
        barStyle={isEnabled ? "light-content" : "dark-content"}
        backgroundColor={isEnabled ? "black" : "white"}
      />

      <HomePage isEnabled={isEnabled} toggleColor={toggleColor} />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
