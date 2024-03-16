import { useContext } from "react";
import { Linking, Pressable, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";

import { ThemeContext } from "@/contexts/theme";

export function User() {
  const { theme } = useContext(ThemeContext);

  function handleRedirect(type: string) {
    if (type === "github") {
      Linking.openURL("https://github.com/ICarlosJuniorI");
    } else if (type === "instagram") {
      Linking.openURL("https://instagram.com/carlosjunior00");
    } else if (type === "linkedin") {
      Linking.openURL("https://linkedin.com/in/ICarlosJuniorI");
    }

  }

  return (
    <View
      className="items-center"
    >
      <Avatar className="w-32 h-32 border-4 border-gray-600">
        <AvatarImage
          source={{ uri: "http://github.com/ICarlosJuniorI.png" }}
        />
        <AvatarFallback>CJ</AvatarFallback>
      </Avatar>

      <Text className="text-gray-700 dark:text-white font-bold text-2xl mt-4">
        Carlos Junior
      </Text>

      <Text className="text-gray-500 dark:text-gray-400 font-bold text-md mt-2">
        Software Developer
      </Text>

      <View className="w-full flex-row items-center justify-around mt-4">
        <View className="flex-row items-center gap-4">
          <Pressable onPress={() => handleRedirect("github")}>
            <FontAwesome5 name="github" size={24} color={theme === "light" ? "black" : "white"} />
          </Pressable>

          <Pressable onPress={() => handleRedirect("linkedin")}>
            <FontAwesome5 name="linkedin" size={24} color={theme === "light" ? "black" : "white"} />
          </Pressable>

          <Text className="text-gray-500 dark:text-gray-400 font-bold text-lg">
            ICarlosJuniorI
          </Text>
        </View>

        <View className="flex-row items-center gap-4">
          <Pressable onPress={() => handleRedirect("instagram")}>
            <FontAwesome5 name="instagram" size={24} color={theme === "light" ? "black" : "white"} />
          </Pressable>

          <Text className="text-gray-500 dark:text-gray-400 font-bold text-lg">
            @carlosjunior00
          </Text>
        </View>
      </View>
    </View>
  )
}