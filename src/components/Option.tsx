import { ReactNode, useContext } from "react";
import { Text, TextProps, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { ThemeContext } from "@/contexts/theme";

interface OptionProps {
  children: ReactNode
}

interface IconProps {
  icon: keyof typeof MaterialIcons.glyphMap;
}

function Option({ children }: OptionProps) {
  return (
    <View className="w-full flex-row items-center gap-2 border-b border-gray-500 py-3">
      {children}
    </View>
  )
}

function Icon({ icon }: IconProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <MaterialIcons name={icon} size={20} color={theme === "dark" ? colors.white : colors.black} />
  )
}

function Title({ ...rest }: TextProps) {
  return (
    <Text className="font-bold text-black dark:text-white text-lg flex-1" {...rest} />
  )
}

Option.Title = Title;
Option.Icon = Icon;

export { Option };