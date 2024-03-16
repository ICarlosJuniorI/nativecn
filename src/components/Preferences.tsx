import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { useColorScheme } from "nativewind";

import { Title } from "@/components/Title";
import { Option } from "@/components/Option";
import { Switch } from "@/components/Switch";
import { Checkbox } from "@/components/Checkbox";

import { ThemeContext } from "@/contexts/theme";

export function Preferences() {
  const { handleChangeTheme, theme } = useContext(ThemeContext);

  const { colorScheme, setColorScheme } = useColorScheme();

  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    handleChangeTheme(theme === "light" ? "dark" : "light");
    setDarkMode(theme === "light" ? false : true);
    setColorScheme(theme === "light" ? "dark" : "light");
  }

  return (
    <View className="w-full">
      <Title>Preferences</Title>

      <Option>
        {theme === "dark" ? (<Option.Icon icon="dark-mode" />) : (<Option.Icon icon="sunny" />)}
        <Option.Title>Dark Mode</Option.Title>
        <Switch onValueChange={handleDarkMode} value={!darkMode} />
      </Option>

      <Option>
        <Option.Icon icon="email" />
        <Option.Title>Public e-mail</Option.Title>
        <Checkbox />
      </Option>
    </View>
  )
}