import "@/styles/global.css";

import { StatusBar } from 'expo-status-bar';

import { ToastProvider } from "@/components/Toast";

import { Profile } from '@/app/Profile';

import ThemeProvider from "@/contexts/theme";

export default function App() {
  return (
    <ToastProvider position="top">
      <ThemeProvider>
        <Profile />
        <StatusBar style="light" />
      </ThemeProvider>
    </ToastProvider>
  );
}