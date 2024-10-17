import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { Loading, ToastBase } from '@components';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import theme from '@theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.COLORS.GRAY_600}
        barStyle="light-content"
      />

      <ToastBase>
        {fontsLoaded ? <Routes /> : <Loading />}
      </ToastBase>
    </ThemeProvider>
  );
}
