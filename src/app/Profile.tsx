import { ChangeEvent, useState } from "react";
import { Image, ScrollView, View } from "react-native";

import { User } from "@/components/User";
import { Skills } from "@/components/Skills";
import { Preferences } from "@/components/Preferences";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useToast } from "@/components/Toast";

import Banner from "@/assets/banner.png";

export function Profile() {
  const { toast } = useToast();

  const [company, setCompany] = useState("");

  function handleChangeCompany(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setCompany(e.target.value);
  }

  function handleSave() {
    toast("Saved!");
    setCompany("");
  }

  return (
    <View className="flex-1 bg-gray-200 dark:bg-gray-700">
      <ScrollView>
        <Image className="w-full h-52 -mb-16" source={Banner} />

        <View className="flex-1 px-4 gap-6">
          <User />
          <Skills />
          <Preferences />

          <View className="w-full mt-6 flex-1">
            <Input placeholder="Company" label="Company" inputClasses="mb-6" onChange={e => handleChangeCompany(e)} value={company} />

            <Button label="Save" onPress={handleSave} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}